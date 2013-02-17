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
    this.addWidget('url', 'Url');
  }


  /**
   * Create the elements required to render this container.
   */
  NtContainer.prototype.createElements = function() {
    var self = this;
    this.$wrapper = $('<div></div>')
      .addClass('container-wrapper');
    this.$innerWrapper = $('<div></div>')
      .addClass('inner-wrapper');
    this.$widgets = $('<div></div>')
      .addClass('widgets')
      .hide();

    this.$edit = $('<div>Edit</div>')
      .addClass('edit')
      .click(function(){
        self.editSettings.call(self)
      });

    this.$wrapper
      .append(this.$innerWrapper);
    this.$innerWrapper
      .append(this.$edit)
      .append(this.$widgets);
  }


  /**
   * Use settings from this.options to build the state of the current NtContainer.
   */
  NtContainer.prototype.applySettings = function() {
    this.$wrapper
      .css('height', (this.options.rows) + '%')
      .css('width', (this.options.cols) + '%');
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
    this.$widgets.append(newWidget.getContainer());
  }


  /**
   * Start edditing the settings of this container.
   */
  NtContainer.prototype.editSettings = function() {
    var self = this;
    this.$wrapper.addClass('edit-mode');

    this.$widgets.show();

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

    this.$widgets.hide();

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