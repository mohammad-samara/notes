'use strict';

// Notice: This is not a constructor.
// this demonstrates exporting a POJO (plain old javascript object)

class Notes{
  constructor() {
  } 
  
  execute(inputCommand) {
    if (inputCommand.action == 'add') {
      this.add(inputCommand);
    }
  }

  add(myNote){
    let newNote ={
      id: Math.ceil(Math.random()*100),
      noteText: myNote.payload,
    };
    console.log(`Adding Note: ${newNote.noteText}`);
    console.log(newNote.id);
    //console.log(`action: ${myNote.action}`);
  }

}


module.exports = Notes;
