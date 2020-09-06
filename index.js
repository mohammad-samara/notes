#!/usr/bin/env node

// to do http requests like httpie, postman and so on.

// ./index.js -m POST -u http://localhost:3000

'use strict';

const Input = require('./lib/input.js');  //take inputs(note)
const Notes = require('./lib/notes.js');  //display input(note)

const inputCommand = new Input();
const myNote = new Notes(inputCommand);
myNote.execute(inputCommand);