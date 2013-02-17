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
    
    this.$container = $('<div></div>')
      .text(this.options.label);
    
    this.createInputWidget();

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

  /**
   * Create an input widget for the user to enter some data.
   */
  NtWidget.prototype.createInputWidget = function() {
    
    var self = this;
    var currentValue = this.getValue();
    var type = typeof currentValue;

    switch(type) {
      case 'number':
        self.createSliderWidget();
        break;
      case 'string':
        self.createTextWidget();
        break;
    }
  }


  /**
   * Create a text widget to capture data from the user. This could
   * have been a great place for sub-classing.
   * @todo refactor for sub-classing.
   */
  NtWidget.prototype.createTextWidget = function() {
    var currentValue = this.getValue();
    var self = this;    
    var $input = $('<input/>')
      .attr('type', 'text')
      .val(currentValue);
    
    self.$container.append($input);
    
    $input.bind('change', function(){
      self.setValue($(this).val());
    });
  }


  /**
   * Create a slider based widget for altering this current widgets
   * value.
   */
  NtWidget.prototype.createSliderWidget = function() {
    
    var currentValue = this.getValue();
    var self = this;

    var $slideInput = $('<input/>')
      .attr('type', 'slider')
      .attr('id', 'test-slider')
      .attr('value', currentValue);

    console.log($slideInput);

    self.$container.append($slideInput);

    $slideInput.slider({
        from: 20,
        to: 100,
        step: 10,
        dimension: '%',
        onstatechange : function(value) {
          self.setValue(value);
        }
    });

  }

  return NtWidget;

}(jQuery));
