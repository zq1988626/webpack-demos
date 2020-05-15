function Defaults(){
    this.reset();
}


Defaults.prototype.reset = function () {
    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      language: {},
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      scrollAfterSelect: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
};

Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);
    if(options.dataAdapter==null){
        options.dataAdapter = jsonData;
    }
}

Defaults.prototype.set =function(key,value){

}

module.exports = new Defaults();