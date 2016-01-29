'use strict';

describe('Controller: ShowinfoCtrl', function () {

  // load the controller's module
  beforeEach(module('grabAutoAppApp'));

  var ShowinfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowinfoCtrl = $controller('ShowinfoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShowinfoCtrl.awesomeThings.length).toBe(3);
  });
});
