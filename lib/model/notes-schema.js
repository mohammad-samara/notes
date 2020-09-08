'use strict';

const mongoose = require('mongoose');

const notes = new mongoose.Schema({
  payload: { type: 'string', required: true },
  category: {type: 'string', required: true},
});

module.exports = mongoose.model('notes', notes);