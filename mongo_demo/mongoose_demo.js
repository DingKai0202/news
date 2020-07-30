const mongoose = require('mongoose');

mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const url = `mongodb://localhost:27017/what_i_love`;
const connection = mongoose.connect(url);
const db = mongoose.connection;

const UserSchema = new Schema({
  name: { type: String, required: true, unique: true,index: 1 },
  age: { type: Number, max: 188, min:0 },
})

const UserModel = mongoose.model('user', UserSchema);

(async () => {
  
  const user = await UserModel.create({
    name: "dingkafdfadasi",
    age: 27,
  });
  return user;
  
//   const users = await UserModel.find({
//     name: "dingkai"
//   });

//   return users;

})()
  .then(r => {
    console.log(r);
  })
  .catch(e => {
    console.log(e);
})


db.on('open', () => {
  console.log('db connected!');
});

db.on('error', (e) => {
  console.log(e);
});