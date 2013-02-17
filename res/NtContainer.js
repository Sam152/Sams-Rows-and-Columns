/**
 * Manage the creation of containers for website content.
 */
var NtContainer = (function($) {


  function NtContainer(inOptions) {
    var self = this;
    inOptions = inOptions || {};

    this.defaults = {
      cols: 4,
      rows: 4,
      url: 'http://github.com'
    };

    $.extend(inOptions, this.defaults);
    this.options = inOptions;
    
    this.createElements();
    this.addWidgets();

    this.$wrapper.bind(
      'option_changed',
      function() {
        self.applySettings.apply(self);
      }
    );

    this.applySettings();
  };


  /**
   * Add widgets to control this containers behavour.
   */
  NtContainer.prototype.addWidgets = function() {
    this.widgets = [];
    this.addWidget('cols', 'Columns');
    this.addWidget('rows', 'Rows');
  }


  /**
   * Create the elements required to render this container.
   */
  NtContainer.prototype.createElements = function() {
    var self = this;
    this.$wrapper = $('<div></div>');

    this.$edit = $('<div>Edit</div>')
      .addClass('edit')
      .click(function(){
        self.editSettings.call(self)
      });

    this.$wrapper.append(this.$edit);
  }


  /**
   * Use settings from this.options to build the state of the current NtContainer.
   */
  NtContainer.prototype.applySettings = function() {
    this.$wrapper
      .addClass('container-wrapper')
      .css('height', (this.options.cols * 5) + '%')
      .css('width', (this.options.rows * 5) + '%');
  }


  /**
   * Add a widget to this container.
   */
  NtContainer.prototype.addWidget = function(value, label) {
    
    var newWidget = new NtWidget({
      'value_name' : value,
      'values' : this.options,
      'wrapper' : this.$wrapper,
      'label' : label
    });

    this.widgets.push(newWidget);
    this.$wrapper.append(newWidget.getContainer());
  }


  /**
   * Start edditing the settings of this container.
   */
  NtContainer.prototype.editSettings = function() {
    var self = this;
    this.$wrapper.addClass('edit-mode');

    $.each(this.widgets, function(i, widget){
      widget.showContainer();
    });

    this.$edit.text('Done');

    this.$edit.unbind('click').bind(
      'click',
      function(){
        self.doneEdit.call(self);
      }
    );
  };


  /**
   * Completed edditing the settings of this container.
   */
  NtContainer.prototype.doneEdit = function() {
    var self = this;
    this.$wrapper.removeClass('edit-mode');

    $.each(self.widgets, function(i, widget){
      widget.hideContainer();
    });

    this.$edit.text('Edit');
    this.$edit
      .unbind('click')
      .bind('click', function(){
        self.editSettings.call(self);
      });
  };


  /**
   * Get this containers wrapper.
   */
  NtContainer.prototype.getWrapper = function() {
    return this.$wrapper;
  };

  return NtContainer;

}(jQuery));