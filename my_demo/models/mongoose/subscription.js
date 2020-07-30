const mongoose = require('mongoose');
const Subscription = require('../in_memo/subscription');

const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const SubSchema = new Schema({
  userId: { type: ObjectId, required: true, index: 1 },
  url:{ type: String, required: true },
});

const SubModel = mongoose.model('Sub', SubSchema);

async function insert(Sub) {
  const created =  await SubModel.create(Sub);
  return created;
};

async function findByUserId(userId) {
  const subs = await Subscription.subscriptions.map(s => s.userId === userId);
  return subs;
}


async function list(params) {
  const match = {};
  const flow = SubModel.find(match);
  const subs = await flow.exec();
  return subs;
}

module.exports = {
  insert,
  findByUserId,
  list
}
