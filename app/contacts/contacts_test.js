'use strict';

describe('myApp.contacts module', function() {

  beforeEach(module('myApp.contacts'));

  describe('Contacts controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var ContactsCtrl = $controller('ContactsCtrl');
      expect(ContactsCtrl).toBeDefined();
    }));

  });
});
