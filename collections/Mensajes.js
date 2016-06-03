Tags = new Mongo.Collection("tags");
Tags.allow({
  insert: function(userId,doc){
    return !!userId
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Files = new FS.Collection("files", {
  stores: [new FS.Store.GridFS("filesStore")]
});

Files.allow({
  download: function () {
    return true;
  },
  fetch: null
});


Mensajes = new Mongo.Collection("mensajes");
Mensajes.allow({
  insert: function(userId,doc){
    return !!userId
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Tag = new SimpleSchema({
  nombre:{
    type:String,
    label: "Tag"
  },empresa:{
    type:String,
    label:"Empresa",
    autoValue:function(){
      return this.userId
    },
    autoform:{
      type:"hidden"
    }
  }
});

MensajeSchema = new SimpleSchema({
  titulo:{
    type:String,
    label: "Titulo"
  },
  tags:{
    type:[String],
    label:'Tag',
    autoform:{
      type:"select-multiple",
      options:function () {
        return Tags.find().map(function (c){
          return {label: c.nombre, value: c.nombre};
        })
      }
    }
  },
  conectado:{
    type: Boolean,
    label: "Conectado"
  },
  fileId: {
    type: String,
    autoform: {
      afFieldInput: {
        type: "cfs-file",
        collection: "files"
      }
    }
  },
  desc:{
    type:String,
    label: "Descripción",
    autoform:{
      type:"textarea"
    }
  },
  empresa:{
    type:String,
    label:"Empresa",
    autoValue:function(){
      return this.userId
    },
    autoform:{
      type:"hidden"
    }
  },
  createdAt:{
    type:Date,
    label:"Created At",
    autoValue:function () {
      return new Date()
    },
    autoform:{
      type:"hidden"
    }
  }
});

Meteor.methods({
  deleteTag: function (id) {
    Tags.remove({_id:id});
  }
});

Mensajes.attachSchema ( MensajeSchema );
Tags.attachSchema ( Tag );
