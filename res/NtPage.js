/**
 * Handle the rendering of a NewTab page.
 */
var NtPage = (function($) {


  function NtPage() {
    var self = this;

    this.containers = [];
    this.$containersWrapper = $('#containers');
    this.$containersWrapper.hasIsotope = false;
    
    this.bindEvents();
  };


  /**
   * Bind events related to the setup of this page.
   */
  NtPage.prototype.bindEvents = function() {
    var self = this;

    $('.add-container').bind('click', function(){
      self.createContainer.call(self);
    });

    $('body').bind('container_regenerate', function(){
      self.regenerateContainerLayouts.call(self);
    });

    $('body').bind('container_reflow', function(){
      self.reflowContainerLayouts.call(self);
    });

    $(window).bind('resize', function(){
      self.reflowContainerLayouts.call(self);
    });

  }


  /**
   * Create a new container to hold information on our dashboard.
   */
  NtPage.prototype.createContainer = function() {
    var newContainer = new NtContainer();
    this.$containersWrapper.append(newContainer.getWrapper());
    this.containers.push(newContainer);
    this.regenerateContainerLayouts();
  };


  /**
   * Take the container layouts and make them sit nicely next to eachother.
   */
  NtPage.prototype.regenerateContainerLayouts = function() {

    if (this.$containersWrapper.hasIsotope) {
      this.$containersWrapper.isotope('destroy');
      this.$containersWrapper.hasIsotope = false;
    }

    this.$containersWrapper.isotope({
      itemSelector: '.container-wrapper',
      resizable: false,
      masonry: {
        gutterWidth: 0,
        columnWidth: 1,
      }
    });

    this.$containersWrapper.hasIsotope = true;
  }


  /**
   * Relayout all of the container elements.
   */
  NtPage.prototype.reflowContainerLayouts = function() {
    if (this.$containersWrapper.hasIsotope) {
      this.$containersWrapper.isotope('reLayout');
    }
  }

  NtPage.prototype.exportConfigurationLink = function() {
    
  };

  NtPage.prototype.readConfigurationLink = function() {
    
  };

  return NtPage;

}(jQuery));