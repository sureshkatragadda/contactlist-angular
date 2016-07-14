'use strict';

var app = angular.module('myApp.contacts', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  })
  .when('/contacts/add', {
    templateUrl: 'contacts/contacts-form.html',
    controller: 'ContactsCtrl'
  })
  .when('/contacts/edit/:contact_index', {
    templateUrl: 'contacts/contacts-form.html',
    controller: 'ContactsCtrl'
  });
}]);

app.controller('ContactsCtrl', ['$scope', '$http', '$location', 'ContactService', '$routeParams', function($scope, $http, $location, ContactService, $routeParams) {
  // load from service
  $scope.path = $location.path();
  console.log($scope.path);
  $scope.contacts = ContactService.getContacts();
  var index = $routeParams.contact_index;
  $scope.currentContact = $scope.contacts[index];

  $scope.addContact = function(){
   var contact = $scope.currentContact;
   contact.id = $scope.contacts.length;
   $scope.contacts.push(contact);
  };

  $scope.removeContact = function (item) {
   var index = $scope.contacts.indexOf(item);
   $scope.contacts.splice(index, 1);
 };

}]);

app.factory('ContactService', ['$http', function ($http) {
  var factory = {};

  factory.getContacts = function () {
    return contactList;
  };

  var contactList = [
    {
      "firstName": "Suresh",
      "lastName": "Katragadda",
      "phone": "801-xxx-xxxx"
    },
    {
      "firstName": "John",
      "lastName": "Doe",
      "phone": "801-xxx-xxxx"
    }
  ];

  return factory;
}]);
