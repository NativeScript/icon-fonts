import observable = require("data/observable");

export class ViewModel extends observable.Observable {
    private _charCodes: Array<string>;
    
    constructor(){
        super();
        this._charCodes = new Array<string>();
        var charCode = 0xe903;
        for(; charCode <= 0xeaea; charCode++){
            var s = String.fromCharCode(charCode);
            this._charCodes.push(s);  
        }
    }
    
    public get charCodes(): Array<string> {
        return this._charCodes;
    }
}
export var viewModel = new ViewModel();