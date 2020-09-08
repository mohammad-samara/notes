'use strict';

const Notes = require('../lib/notes.js');


const mongoose = require('mongoose');
const MONGOOSE_URL = 'mongodb://localhost:27017/jestTest';
mongoose.connect(MONGOOSE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const supergoose = require('supergoose');
// let record = new NoteSchema(myNote);   myNote is an object
// let saved = await record.save();

const NoteSchema = require('../lib/model/notes-schema');

// Spies!
// we will get to know if something was called or not.
jest.spyOn(global.console, 'log');

// describe the module I am testing

describe('NOTE Module', () => {
  it('Nothing is logged to the console if there was no command given', () => {
    const myNote = new Notes();
    myNote.execute({action: undefined, payload: undefined});
    expect(console.log).not.toHaveBeenCalled();
  });
  it('create a new note when provided with valid data', async() => {
    const myNote = new Notes();
    await myNote.add({ action: 'add', payload: 'text note',category: 'category1' });

    // let allitems = await NoteSchema.find();
    // console.log('allitems : ', allitems);

    // myNote.execute({ action: 'add', payload: 'text note',category: 'category1' });
    expect(console.log).toHaveBeenCalled();
  });
});
