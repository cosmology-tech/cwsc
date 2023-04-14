import { CWScriptSymbol } from './symbols';

/**
 * Common scope subspaces.
 */
export enum Subspace {
  TYPE = 'type' /** used for struct, enum, type aliases */,
  FN = 'fn' /** used for functions */,
  STATE = 'state' /** used for contract state */,
  LOCAL = 'local-var' /** used for local variables */,
  ARG = 'arg' /** used for function arguments */,
  ERROR = 'error' /** used for error definitions  */,
  EVENT = 'event' /** used for event definitions */,
}

export interface ScopeDefn {
  [subspace: string]: {
    [identifier: string]: CWScriptSymbol;
  };
}

/**
 * A class representing a scope within CWScript. Scopes are used to
 * mark the boundaries of local variables and functions within various
 * CWScript constructs, such as functions, loops, and if statements.
 *
 * CWScript scope objects are implemented as symbol tables in which
 * the various symbol definition entries are segregated by "subspace."
 * This allows for the separation of different types of symbols, such
 * as functions, variables, and types.
 *
 * When looking up an identifier, the CWScript scope object will first
 * check to see if the identifier is defined in the current scope. If
 * it is not, it will check the parent scope, and so on until it reaches
 * the global scope.
 */
export class CWScriptScope {
  public symbolTable: Map<string, Map<string, CWScriptSymbol>>;

  constructor(public id: string, public parent: CWScriptScope | null = null) {
    this.symbolTable = new Map<string, Map<string, CWScriptSymbol>>();
  }

  /**
   * Searches the scope hierarchy for a definition entry with the
   * provided `ident` inside the `subspace`. The search begins at the
   * current scope and proceeds up the scope hierarchy until it reaches
   * the global scope.
   *
   * If a definition entry is found, it is returned. If no definition
   * entry is found, `undefined` is returned.
   *
   * If the `subspace` is set to `null`, the search will be performed
   * across all subspaces for the first definition entry found.
   *
   * @param subspace the subspace to search for the definition entry
   * @param identifier name of the definition entry to search for
   * @returns the definition entry, or `undefined` if it does not exist
   */
  resolve(
    subspace: Subspace | Subspace[] | null,
    identifier: string
  ): CWScriptSymbol | undefined {
    if (subspace === null) {
      // search all subspaces
      for (let ss of this.symbolTable.keys()) {
        let symbol = this.symbolTable.get(ss)?.get(identifier);
        if (symbol !== undefined) {
          return symbol;
        }
      }
    } else {
      // search only the specified subspace
      if (Array.isArray(subspace)) {
        for (let ss of subspace) {
          let symbol = this.symbolTable.get(ss)?.get(identifier);
          if (symbol !== undefined) {
            return symbol;
          }
        }
      } else {
        let symbol = this.symbolTable.get(subspace)?.get(identifier);
        if (symbol !== undefined) {
          return symbol;
        }
      }
    }

    // check parent scopes recursively
    if (this.parent !== null) {
      return this.parent.resolve(subspace, identifier);
    }

    // nothing found
    return undefined;
  }

  /**
   * Adds a new definition entry to the scope. If a definition entry
   * already exists with the same name, it will be overwritten.
   *
   * @param subspace  the subspace to add the definition entry to
   * @param identifier   the name of the definition entry
   * @param symbol  the definition entry to add
   */
  public define(
    subspace: Subspace,
    identifier: string,
    symbol: CWScriptSymbol
  ): void {
    if (!this.symbolTable.has(subspace)) {
      // create a new subspace
      this.symbolTable.set(subspace, new Map<string, CWScriptSymbol>());
    }
    // add the symbol to the subspace
    this.symbolTable.get(subspace)!.set(identifier, symbol);
  }

  /**
   * Removes a definition entry from the scope. If no definition entry
   * exists with the provided name, this method will do nothing.
   * If no idenfier is provided, the entire subspace will be removed.
   *
   * @param subspace the subspace to remove the definition entry from
   * @param identifier the name of the definition entry to remove
   */

  public delete(subspace: Subspace, identifier?: string): void {
    if (identifier === undefined) {
      this.symbolTable.delete(subspace);
    } else {
      this.symbolTable.get(subspace)!.delete(identifier);
    }
  }

  /**
   * Merges the provided scope defition into the current scope.
   * @param defn the definition to mergej
   */
  public applyDefn(defn: ScopeDefn): void {
    for (const subspace in defn) {
      for (const identifier in defn[subspace]) {
        this.define(
          subspace as Subspace,
          identifier,
          defn[subspace][identifier]
        );
      }
    }
  }
}
