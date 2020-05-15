const $ = require("jquery");
const Plugin1 = require("./plugin1/Plugin1");
const Utils = require("./plugin1/utils");
const Defaults = require("./plugin1/defaults");
require("../less/jquery.plugin1.less");

if ($.fn.plugin1 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.plugin1 = function (options) {
        options = options || {};

        if (typeof options === 'object') {
            this.each(function () {
            var instanceOptions = $.extend(true, {}, options);

            var instance = new Plugin1($(this), instanceOptions);
            });

            return this;
        } else if (typeof options === 'string') {
            var ret;
            var args = Array.prototype.slice.call(arguments, 1);

            this.each(function () {
                var instance = Utils.GetData(this, 'select2');

                if (instance == null && window.console && console.error) {
                    console.error(
                    'The select2(\'' + options + '\') method was called on an ' +
                    'element that is not using Select2.'
                    );
                }

                ret = instance[options].apply(instance, args);
            });

            // Check if we should be returning `this`
            if ($.inArray(options, thisMethods) > -1) {
                return this;
            }

            return ret;
        } else {
            throw new Error('Invalid arguments for Select2: ' + options);
        }
    };
}
  
if ($.fn.plugin1.defaults == null) {
    $.fn.plugin1.defaults = Defaults;
}
module.exports = Plugin1;