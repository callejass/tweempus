export class Token {
    private _idAuthor: string;
    private _key: string;

    constructor(key: string, idAuthor: string) {
        this._key = key;
        this._idAuthor = idAuthor;
    }
    get key(): string {
        return this._key;
    }
    set key(key: string) {
        this._key = key;
    }
    get idAuthor(): string {
        return this._idAuthor;
    }
    set idAuthor(idAuthor: string) {
        this._idAuthor = idAuthor;
    }

}
