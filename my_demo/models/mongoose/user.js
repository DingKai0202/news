const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, index: 1 },
  url:{ type: String, required: true },
});

const UserModel = mongoose.model('user', UserSchema);

async function insert(user) {
  const created =  await UserModel.create(user);
  return created;
};

async function getOneById(id) {
  const user = await UserModel.findOne({ _id: id });
  return user;
}

async function getOneByName(name) {
  const user = await UserModel.findOne({ name });
  return user;
}


module.exports = {
  insert,
  getOneById,
  getOneByName,

}

