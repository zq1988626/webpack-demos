const $ = require("jquery");
require("./jquery.plugin1");

var init = function(){
    $("#test").plugin1().val(1111);

    $(".js-example-basic-single").select2(
        {"theme":"bootstrap"}
    );
}

$(function(){
    init();
})

if (module.hot) {
    module.hot.accept('./jquery.plugin1.js', function() {
        init();
    })
}