// import angular from 'angular';

// class RandomNames {
//   constructor() {
//     this.names = ['John', 'Elisa', 'Mark', 'Annie'];
//   }

//   getName() {
//     const totalNames = this.names.length;
//     const rand = Math.floor(Math.random() * totalNames);
//     return this.names[rand];
//   }

//   getAll() {
//     return $http({
//       method: 'GET',
//       url: '/profiles'
//     })
//     .then(function (resp) {
//       return resp.data;
//     });
//   };
// }

// export default angular.module('services.random-names', [])
//   .service('randomNames', RandomNames)
//   .name;

export default angular.module('services.random-names', [])

.factory('profiles', function ($http) {

  var getAll = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:8000/profiles'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var addOne = function(profile) {
    return $http({
      method: 'POST',
      url: 'http://localhost:8000/profiles',
      data: profile
    })
    .then(function (resp) {
      return resp;
    });
  };
  return {
    'getAll': getAll,
    'addOne': addOne
  };
})
.name;