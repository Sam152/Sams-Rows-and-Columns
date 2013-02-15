/**
 * Manage the creation of containers for website content.
 */
var NtContainer = (function($) {

  var self;

  function NtContainer(inOptions) {
    
    self = this;
    inOptions = inOptions || {};

    self.options = {
      cols: 4,
      rows: 4,
      url: 'http://github.com'
    };

    $.merge(self.options, inOptions);

    self.$wrapper = $(document.createElement('div'));
    self.iFrame = new 
    self.applySettings();
  };


  /**
   * Use dat from self.options to build the state of the current NtContainer.
   */
  NtContainer.prototype.applySettings = function() {
    self.$wrapper
      .addClass('container-wrapper')
      .css('width', (self.cols * 5) + '%')
      .css('width', (self.rows * 5) + '%');
  }


  NtContainer.prototype.editSettings = function() {

    self.$wrapper.addClass('edit-mode');

  };

  NtContainer.prototype.render = function() {

    // If or container does not appear in the current page.
    if (!$.contains(document.documentElement, self.$wrapper[0])) {
      $('body').append(self.$wrapper);
    }

  };

  return NtContainer;

}(jQuery));