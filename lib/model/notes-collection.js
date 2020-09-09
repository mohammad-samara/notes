'use strict';

const schema = require('./notes-schema.js');

class NotesSchema {

  constructor() {
  }

  get(myNote) {
    if(typeof(myNote.category)=='string'){
      let allitems =  schema.find({category: myNote.category});
      return allitems;
    }else{
      let allitems =  schema.find();
      return allitems;
    }
  }

  create(record) {
    let newRecord = new schema(record);
    let saved = newRecord.save();
    return saved; 
  }

  deleteByGivenId(myNote) {
    return schema.findOneAndRemove({_id: myNote.id});


  }
   
  //   update(_id, record) {
  //     return schema.findByIdAndUpdate(_id, record);
  //   }
    
//   updateWithNew(_id, record) {
//     return schema.findByIdAndUpdate(_id, record, {new: true});
//   }
}

// Singleton
// exports an instance instead of the class, 
// this instance will be shared]
module.exports = new NotesSchema();