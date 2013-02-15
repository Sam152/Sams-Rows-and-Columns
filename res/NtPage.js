/**
 * Handle the rendering of a NewTab page.
 */
var NtPage = (function($) {

  var self;

  function NtPage() {
    self = this;
    self.containers = [];
  };


  NtPage.prototype.setup = function() {
    $('.add-container').bind('click', self.createContainer);
  };

  NtPage.prototype.createContainer = function() {
    var newContainer = new NtContainer();
    newContainer.render();
    self.containers.push(newContainer);

  };

  NtPage.prototype.exportConfigurationLink = function() {
    
  };

  NtPage.prototype.readConfigurationLink = function() {
    
  };

  NtPage.prototype.render = function() {

  };

  return NtPage;

}(jQuery));