Mensajes = new Mongo.Collection("mensajes");
Mensajes.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

MensajeSchema = new SimpleSchema({
  titulo:{
    type:String,
    label: "Titulo"
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

Mensajes.attachSchema ( MensajeSchema );
