/**
 * Manage the creation of containers for website content.
 */
var NtWidget = (function($) {

  function NtWidget(inOptions) {
    var self = this;
    inOptions = inOptions || {};

    this.defaults = {
      'value' : false,
      'wrapper' : false,
      'label' : 'No Label'
    };

    $.extend(this.defaults, inOptions);
    this.options = inOptions;

    this.renderElements = [];
    this.$container = $('<div>test</div>');
    this.hideContainer();

  };

  /**
   * Set the value of this widget.
   */
  NtWidget.prototype.setValue = function(value) {
    this.options.values[this.options.value_name] = value;
    this.options.wrapper.trigger('option_changed');
  }

  /**
   * Get the value of this widget.
   */
  NtWidget.prototype.getValue = function() {
    return this.options.values[this.options.value_name];
  }

  /**
   * Hide this widgets container.
   */
  NtWidget.prototype.hideContainer = function() {
    this.$container.hide();
  };

  /**
   * Show this widgets container.
   */
  NtWidget.prototype.showContainer = function() {
    this.$container.show();
  };

  /**
   * Get this widgets container.
   */
  NtWidget.prototype.getContainer = function() {
    return this.$container;
  }

  return NtWidget;

}(jQuery));
