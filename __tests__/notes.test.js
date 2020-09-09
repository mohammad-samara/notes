'use strict';

const Notes = require('../lib/notes.js');

///
const { collection } = require('../lib/model/notes-schema');

// try it with mongoose package and see ow the test data will be inserted 
require('@code-fellows/supergoose');

const notesSchema = require('../lib/model/notes-collection');
///

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







////////////////////////////
describe('Note Model', () => {
  it('can create a new note item', () => {
    let obj = { payload: 'text note',category: 'category1' };
    notesSchema.create(obj).then(record => {
      Object.keys(obj).forEach(key => {
        expect(record[key]).toEqual(obj[key]);
      });
    });
  });

  // it('can get() a food item', ()=> {
  //   let obj = { payload: 'text note',category: 'category2'};
  //   return  notesSchema.create(obj).then(record => {
  //     console.log('obj : ',obj);
  //     return notesSchema.get(record._id)
  //       .then(foodItem => {
  //         console.log('foodItem : ',foodItem);
  //         Object.keys(obj).forEach(key => {
  //           expect(foodItem[key]).toEqual(obj[key]);
  //         });
  //       });
  //   });
  // });

  it('can get() a note item', async ()=> {
    let obj = { payload: 'text note',category: 'category2'};
    let addedNote = await notesSchema.create(obj);
    console.log('record : ',addedNote);
    let oldNote = await notesSchema.get(addedNote);
    console.log('note from db : ',oldNote);
    Object.keys(obj).forEach(key => {
      expect(oldNote[key]).toEqual(obj[key]);
    });
    
    // expect(addedNote).toEqual(addedNote);
  });
  
});