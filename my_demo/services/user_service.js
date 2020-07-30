const User = require('../models/mongoose/user');
const Subscription = require('../models/mongoose/subscription');

module.exports.getAllUsers = async function() {
  const users = await User.list();
  return users;
};

module.exports.addNewUser = async (name, age) => {
  const user = await User.insert({
    name,
    age
  });
  return user;
};

module.exports.getUserById = async (userId) => {
  const user = await User.getOneById(userId);
  return user;
};

module.exports.createSubscription = async function(userId, url) {
  const user = await User.getOneById(userId);
  if(!user) throw Error('No such user!');
  const sub = Subscription.insert(userId, url);
  return sub;
}