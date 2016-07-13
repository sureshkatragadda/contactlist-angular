'use strict';

var app = angular.module('myApp.contacts', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  })
  .when('/contacts/add', {
    templateUrl: 'contacts/contacts-add.html',
    controller: 'ContactsCtrl'
  });
}]);

app.controller('ContactsCtrl', ['$scope', '$http', '$location', 'ContactService', function($scope, $http, $location, ContactService) {
  this.contact = {};
  // load from service
  $scope.contacts = ContactService.getContacts();
  console.log($scope.contacts);


  $scope.addContact = function(data){
    console.log(data);
    $scope.contacts.push(data);
    console.log($scope.contacts);
    $location.path('/contacts');
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
