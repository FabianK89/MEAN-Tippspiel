const mongoose = require('mongoose');
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