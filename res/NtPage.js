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
    $('body').append(newContainer.getWrapper());
    self.containers.push(newContainer);
  };

  NtPage.prototype.exportConfigurationLink = function() {
    
  };

  NtPage.prototype.readConfigurationLink = function() {
    
  };

  return NtPage;

}(jQuery));