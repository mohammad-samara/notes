#!/usr/bin/env node

// to do http requests like httpie, postman and so on.

// ./index.js -a 'my text note'

'use strict';

const Input = require('./lib/input.js');  //take inputs(note)
const Notes = require('./lib/notes.js');  //display input(note)

const inputCommand = new Input();
const myNote = new Notes(inputCommand);
inputCommand.valid() ? myNote.execute(inputCommand) : help() ;

function help() {
  console.log(`
        api usage1: api --add <text note>
        api usage2: api -a <text note>

        --add text note to be saved enclosed with single quotes 
        -a text note to be saved enclosed with single quotes 
        must enter a text note
        must use -a or --add
    `);
}
//myNote.execute(inputCommand);