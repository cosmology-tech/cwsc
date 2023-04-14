import { CWScriptScope, ScopeDefn } from './scope';
import { CWSCRIPT_STD } from './std';

export const GLOBAL_SCOPE_ID = '__GLOBAL__';

/**
 * The CWScriptEnv object manages the environment of a CWScript
 * compilation context through a stack of CWScriptScope objects.
 *
 * Each CWScriptEnv has a root scope which lies at the bottom of the
 * stack, called the "global" scope. New scopes are pushed onto the
 * stack, and are descended from the current scope -- leading eventually
 * back to the global scope.
 *
 * Each scope is associated with a string identifier, which can be used
 * to access the scope from the CWScriptEnv directly.
 */
export class CWScriptEnv {
  public scopes: CWScriptScope[] = [];

  constructor(globals: ScopeDefn = CWSCRIPT_STD) {
    this.enterScope(GLOBAL_SCOPE_ID);
    this.globalScope().applyDefn(globals);
  }

  /**
   * Enter a new scope and push it onto the stack. The new scope
   * will be a child of the current scope.
   * @param id scope id
   * @returns the new scope
   */
  public enterScope(id: string): CWScriptScope {
    if (this.scopes.length === 0) {
      this.scopes.push(new CWScriptScope(id));
    } else {
      this.scopes.push(
        new CWScriptScope(this.scope.id + '$' + id, this.currentScope())
      );
    }
    return this.currentScope();
  }

  /**
   * Returns the scope with the provided `id`, if it exists.
   * @param id scope id
   * @returns the scope, or undefined if it does not exist
   */
  public getScope(id: string): CWScriptScope | undefined {
    return this.scopes.find(s => s.id === id);
  }

  /**
   * Returns the environment's global scope.
   * @returns the global scope
   */
  public globalScope(): CWScriptScope {
    return this.scopes[0];
  }

  /**
   * Returns the environment's currently opened scope, which is
   * the top of the scope stack.
   * @returns the current scope
   */
  public currentScope(): CWScriptScope {
    return this.scopes[this.scopes.length - 1];
  }

  /**
   * Alias for `currentScope()`.
   */
  public get scope(): CWScriptScope {
    return this.currentScope();
  }

  /**
   * Closes the current scope, popping it off the stack. The next
   * current scope will be the parent of the closed scope.
   */
  public exitScope() {
    this.scopes.pop();
  }

  /**
   * Creates a new scope with the provided `id`, and enters it.
   * Once the function returns, the scope will be exited.
   */
  public withScope(id: string, fn: (scope: CWScriptScope) => void) {
    this.enterScope(id);
    fn(this.currentScope());
    this.exitScope();
  }
}
