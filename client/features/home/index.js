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
    $scope.name = 'World';

    $scope.changeName = function() {
      console.log("changename clicked")
      $scope.name = 'angular-tips';
    }

    // $scope.randomName = function() {
    //   $scope.name = $scope.random.getName();
    // }

    $scope.getAll = function() {
      $scope.profiles = $scope.random.getAll();
      console.log("$scope.random.getAll();", $scope.random.getAll().$$state)
    }

    $scope.addProfile = function() {
      console.log("addprofile clicked")
    }
  })
  .name;