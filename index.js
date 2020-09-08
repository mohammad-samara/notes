#!/usr/bin/env node

// to do http requests like httpie, postman and so on.

// ./index.js -a 'my text note'

'use strict';

const Input = require('./lib/input.js');  //take inputs(note)
const Notes = require('./lib/notes.js');  //display input(note)
const mongoose = require('mongoose');
const MONGOOSE_URL = 'mongodb://localhost:27017/food';

mongoose.connect(MONGOOSE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const inputCommand = new Input();
// console.log('the inputCommand to be processed : ',inputCommand);
const myNote = new Notes(inputCommand);
inputCommand.valid() ? myNote.execute(inputCommand) : help() ;

async function help() {
  console.log(`
        api usage1: api --add <text note>
        api usage2: api -a <text note>

        --add text note to be saved enclosed with single quotes 
        -a text note to be saved enclosed with single quotes 
        must enter a text note
        must use -a or --add
    `);
  await mongoose.disconnect();
}

//myNote.execute(inputCommand);