const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Group = require('../models/group');

// Create group
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    let newGroup = new Group({
        name: req.body.name,
        creator: req.body.creator,
        member: [req.body.creator]
    });

    Group.addGroup(newGroup, (err, group) => {
        if (err) {
            res.json({success: false, msg: 'Failed to create group'});
        } else {
            res.json({success: true, msg: 'Group created'});
        }
    });
});

module.exports = router;