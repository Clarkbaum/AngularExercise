import './home.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import randomNames from '../../services/randomNames.service';

export default angular.module('app.home', [uirouter, randomNames])
  .config(routing)
  .controller('HomeController', function($scope, profiles) {
    $scope.service = profiles;

    $scope.getAll = function() {
      //this function is returning a promise 
      $scope.service.getAll().then(function(data) {
        $scope.profiles = data
      });
    }
    $scope.getAll();

    $scope.addProfile = function() {
      console.log("addprofile clicked");
      var profile = {
        'name': $scope.name,
        'email': $scope.email
      }
      $scope.service.addOne(profile);
      window.location.reload();
    }

    $scope.profileDelete = function(id) {
      console.log("profileDelete clicked");
      $scope.service.profileDelete(id);
      $scope.getAll();
      window.location.reload();
    }

    $scope.profileEdit = function(id) {
      console.log("profileEdit clicked");
      var profile = {
        'name': $scope.name,
        'email': $scope.email
      }
      $scope.service.profileEdit(id, profile);
      $scope.getAll();
      window.location.reload();
    }
  })
  .name;