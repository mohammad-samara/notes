'use strict';

const notesSchema = require('./model/notes-collection');
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


  // async add(myNote) {
  //   let record = new noteSchema(myNote);
  //   let saved = await record.save();
  //   console.log('saved : ', saved);
  //   await mongoose.disconnect();
  //   return saved; 
  // }

  async add(myNote) {
    let saved = await notesSchema.create(myNote);
    console.log('saved : ', saved);
    await mongoose.disconnect();
    return saved; 
  }

  // async list(myNote) {
  //   if(typeof(myNote.category)=='string'){
  //     let allitems = await noteSchema.find({category: myNote.category});
  //     console.log('allitems : ', allitems);
  //     await mongoose.disconnect();
  //     return allitems;
  //   }else{
  //     let allitems = await noteSchema.find();
  //     console.log('allitems : ', allitems);
  //     await mongoose.disconnect();
  //     return allitems;
  //   }
    
  // }

  async list(myNote) {
    let allitems = await notesSchema.get(myNote);
    console.log('allitems : ', allitems);
    await mongoose.disconnect();
    return allitems;
    
  }

  // async delete(myNote){
  //   if (myNote.id){
  //     await noteSchema.findOneAndRemove({_id:myNote.id});
  //     console.log('Deleted Note ' + myNote.id);
  //     await mongoose.disconnect();
  //   } else {
  //     console.log('No ID was provided,please provide an ID');
  //     await mongoose.disconnect();
  //   }
  // }

  async delete(myNote){
    if(myNote.id){
      await notesSchema.deleteByGivenId(myNote);
      console.log('Deleted Note ' + myNote.id);
      await mongoose.disconnect();
    }else {
      console.log('No ID was provided,please provide an ID');
      await mongoose.disconnect();
    }
    
  }

}


module.exports = Notes;
