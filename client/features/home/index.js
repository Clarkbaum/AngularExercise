import './home.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import appServices from '../../services/app.service';

export default angular.module('app.home', [uirouter, appServices])
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
      window.location.reload();
    }

    $scope.profileEdit = function(id) {
      console.log("profileEdit clicked");
      var profile = {
        'name': $scope.name,
        'email': $scope.email
      }
      $scope.service.profileEdit(id, profile);
      window.location.reload();
    }
  })
  .name;