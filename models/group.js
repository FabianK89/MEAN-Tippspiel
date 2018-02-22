const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const config = require('../config/database');

// Group schema
const groupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    member: [mongoose.Schema.Types.ObjectId]
});

const Group = module.exports = mongoose.model('Group', groupSchema);

module.exports.addGroup = function(newGroup, callback) {
    newGroup.save(callback);
}

module.exports.getGroupsForUser = function(userID, callback) {
    const query = { member: [new ObjectId(userID)] }

    console.log(query);

    Group.find(query, callback);
}