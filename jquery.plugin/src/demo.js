const $ = require("jquery");
require("./jquery.plugin1");

var init = function(){
    $("#test").plugin1({
        css:{
            border:"1px solid green"
        }
    }).val(1111);
}

$(function(){
    init();
})

if (module.hot) {
    module.hot.accept('./jquery.plugin1.js', function() {
        init();
    })
}