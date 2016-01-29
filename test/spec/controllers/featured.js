'use strict';

describe('Controller: FeaturedCtrl', function () {

  // load the controller's module
  beforeEach(module('grabAutoAppApp'));

  var FeaturedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FeaturedCtrl = $controller('FeaturedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FeaturedCtrl.awesomeThings.length).toBe(3);
  });
});
