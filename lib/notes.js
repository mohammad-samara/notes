'use strict';

// Notice: This is not a constructor.
// this demonstrates exporting a POJO (plain old javascript object)
function Notes(inputCommand) {}
Notes.prototype.execute = function (inputCommand) {
  if (inputCommand.action == 'add') {
    this.add(inputCommand);
  }
};
Notes.prototype.add = function(myNote){
  let newNote ={
    id: Math.ceil(Math.random()*100),
    noteText: myNote.payload,
  };
  console.log(`Adding Note: ${newNote.noteText}`);
  console.log(newNote.id);
  //console.log(`action: ${myNote.action}`);
};



// const note = {};

// note.execute = function (myNote) {
//   if (myNote.action == 'add') {
//     console.log(`Adding Note: ${myNote.payload}`);
//     console.log(`action: ${myNote.action}`);
//   }
// };

module.exports = Notes;
