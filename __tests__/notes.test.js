'use strict';

const Notes = require('../lib/notes.js');
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
  it('logs data when execute() is called with valid data', () => {
    const myNote = new Notes();
    myNote.execute({ action: 'add', payload: 'text note' });
    expect(console.log).toHaveBeenCalled();
  });
});
