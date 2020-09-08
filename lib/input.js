'use strict';

// Bring in some 3rd party libraries to help us out

const minimist = require('minimist');

// ex input : node index.js --action "add" --payload "my note"

class Input {
  constructor(){
  // Get the -x style of arguments from the user
    const args = minimist(process.argv.slice(2));
    //console.log(' args minimist >>>>> ', args);
    // Use the args to create our properties with helper methods
    this.action = this.getAction(args);
    this.payload = this.getNote(args.a || args.add);  //note text
    this.category = this.getCategory(args.category || args.c);
    this.id = args.delete || args.d;
  }
  getAction(args) {
    // if(args.add ||args.a){return 'add';}else{return undefined;}
    if(args.add ||args.a){return 'add';}else if(args.list || args.l){return 'list';}else if(args.delete || args.d){return 'delete';}else{return undefined;}
  }
  getCategory(category){
    if(typeof(category)=='string'){return category;}else{return undefined;}
  }
  getNote(note) {
    if(typeof(note)=='string'){return note;}else{return undefined;}
  }
  valid() {
    switch (true) {
    case (this.action == 'add'):
      return this.payload && this.category;
    case (this.action == 'list'):
      return true;
    case (this.action == 'delete'):
      return this.id;
      
    default:
      return false;
    }
    // return this.payload && this.action;
  }
}
  
module.exports = Input;