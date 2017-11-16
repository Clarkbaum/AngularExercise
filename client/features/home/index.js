import './home.css';
//the css isnt effecting anything at the moment
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
//import HomeController from './home.controller';
import randomNames from '../../services/randomNames.service';

export default angular.module('app.home', [uirouter, randomNames])
  .config(routing)
  .controller('HomeController', function($scope, profiles) {

    $scope.random = profiles;

    $scope.getAll = function() {
      //this function is returning a promise 
      $scope.random.getAll().then(function(data) {
        $scope.profiles = data
      });
    }

    $scope.addProfile = function() {
      console.log("addprofile clicked");
      console.log("$scope.name", $scope.name);
      console.log("$scope.email", $scope.email);
      var profile = {
        'name': $scope.name,
        'email': $scope.email
      }
      $scope.random.addOne(profile);
    }
  })
  .name;