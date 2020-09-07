'use strict';

jest.mock('minimist');
const minimist = require('minimist');
minimist.mockImplementation(()=> {
  return {
    add: 'text note',
  };
});

const Input = require('../lib/input.js');

describe('Input Module', () => {

  it('The Class valid() method returns true when the input is valid', ()=> {
    let options = new Input();
    expect(options.valid()).toBeTruthy();
  });
  it('The input module creates a new instance with both action and payload properties when the input is valid', ()=> {
    let options = new Input();
    expect(options.action && options.payload).toBeTruthy();
    console.log(options);
  });

  it('The Class valid() method returns false when the input is invalid', ()=> {
    let options = new Input();
    options.payload = undefined;
    expect(options.valid()).toBeFalsy();
  });
      
});

