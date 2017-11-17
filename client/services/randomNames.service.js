export default angular.module('services.random-names', [])

.factory('profiles', function ($http) {

  var getAll = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:8000/profiles'
    })
    .then(function (resp) {
      return resp.data;
    })
    .catch(function (error) {
      console.error(error);
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
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  var profileDelete = function(id) {
    return $http({
      method: 'DELETE',
      url: 'http://localhost:8000/profiles/' + id
    })
    .then(console.log("profile deleted"))
    .catch(function (error) {
      console.error(error);
    });
  }

  var profileEdit = function(id, profile) {
    return $http({
      method: 'PUT',
      url: 'http://localhost:8000/profiles/' + id,
      data: profile
    })
    .then(console.log("profile edited"))
    .catch(function (error) {
      console.errpr(error);
    })
  }

  return {
    'getAll': getAll,
    'addOne': addOne,
    'profileDelete': profileDelete,
    'profileEdit': profileEdit
  };
})
.name;