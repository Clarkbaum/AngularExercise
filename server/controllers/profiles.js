//profiles.js
const Profile = require('../models/profiles.js');

exports.create = (request, response) => {
  const profile = Object.assign({}, request.body);
  Profile.create(profile)
  .then(result => response.status(201).json(result))
  .catch((err) => console.log("profile.create error", err));
};

exports.get = (request, response) => {
  Profile.find()
  .then(result => response.status(200).json(result))
  .catch((err) => console.log("profile.get error", err));
};

exports.update = (request, response) => {
  Profile.findById(request.params.id).exec()
  .then((data) => {
    const user = data;
    user.name = request.body.name;
    user.email = request.body.email;
    return user.save();
  })
  .then((result) => {
    response.status(200).json(result);
  })
  .catch((err) => console.log("profile.update error", err));
};

exports.delete = (request, response) => {
  Profile.findById(request.params.id).exec()
  .then(user => user.remove())
  .then(user => response.status(200).json(user))
  .catch((err) => console.log("profile.delete error", err));
};