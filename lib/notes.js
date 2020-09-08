'use strict';

const NoteSchema = require('./model/notes-schema');
const mongoose = require('mongoose');
// Notice: This is not a constructor.
// this demonstrates exporting a POJO (plain old javascript object)

class Notes{
  constructor() {
  } 
  
  execute(inputCommand) {
    switch (inputCommand.action) {
    case 'add':
      this.add(inputCommand);
      break;
    case 'delete':
      this.delete(inputCommand);
      break;
    case 'list':
      this.list(inputCommand);
      break;
    default:
      //console.log('you should not reach here at all because of the validation');
      break;
    }



  }

  // add(myNote){
  //   let newNote ={
  //     id: Math.ceil(Math.random()*100),
  //     noteText: myNote.payload,
  //   };
  //   console.log(`Adding Note: ${newNote.noteText}`);
  //   console.log(newNote.id);
  // }
  async add(myNote) {
    let record = new NoteSchema(myNote);
    let saved = await record.save();
    console.log('saved : ', saved);
    await mongoose.disconnect();
    return saved; 
  }

  async list(myNote) {
    if(typeof(myNote.category)=='string'){
      let allitems = await NoteSchema.find({category: myNote.category});
      console.log('allitems : ', allitems);
      await mongoose.disconnect();
      return allitems;
    }else{
      let allitems = await NoteSchema.find();
      console.log('allitems : ', allitems);
      await mongoose.disconnect();
      return allitems;
    }
    
  }

  async delete(myNote){
    if (myNote.id){
      await NoteSchema.findOneAndRemove({_id:myNote.id});
      console.log('Deleted Note ' + myNote.id);
      await mongoose.disconnect();
      // await mongoose.disconnect();
    } else {
      console.log('No ID was provided,please provide an ID');
      await mongoose.disconnect();
      // await mongoose.disconnect();
    }
  }

}


module.exports = Notes;
