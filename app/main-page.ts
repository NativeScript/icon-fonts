import observable = require("data/observable");
import pages = require("ui/page");

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    var viewModel = new observable.Observable();
    var glyphs = new Array<observable.Observable>();
    var charCode = 0xe903;
    for(; charCode <= 0xeaea; charCode++){
        var glyph = new observable.Observable();
        glyph.set("icon", String.fromCharCode(charCode));
        glyph.set("code", charCode.toString(16));
        glyphs.push(glyph);  
    }
    viewModel.set("glyphs", glyphs)
    page.bindingContext = viewModel;
}