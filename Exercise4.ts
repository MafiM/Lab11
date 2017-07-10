class person { 
    private _firstName: string = "";

    constructor(firstName: string) {
        this._firstName = firstName;
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(firstName: string) {
        this._firstName = firstName;
    }
 };

let asaad = new person("Asaad");
console.log(asaad.firstName)