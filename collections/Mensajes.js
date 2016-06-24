Perfiles = new Mongo.Collection("perfiles");
Perfiles.allow({
    insert:function(userId,doc) {
      return !!userId
    },
    update:function(userId,doc){
      return !!userId
    }
});


Perfil = new SimpleSchema({
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
  fechanac:{
    type:String,
    label: "Edad"
  },
  nombre:{
    type:String,
    label:"Nombre"
  }
});

User = new SimpleSchema({
    emails: {
        type: Array,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    // Use this registered_emails field if you are using splendido:meteor-accounts-emails-field / splendido:meteor-accounts-meld
    registered_emails: {
        type: [Object],
        optional: true,
        blackbox: true
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Perfil,
        optional: true
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // Add `roles` to your schema if you use the meteor-roles package.
    // Option 1: Object type
    // If you specify that type as Object, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Example:
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    // roles: {
    //     type: Object,
    //     optional: true,
    //     blackbox: true
    // },
    roles: {
    type: [String],
    label: 'Tipo de Usuario',
    allowedValues: ['cliente', 'organizacion','captador','admin'],
    defaultValue: ['cliente']
    },
    status: {
    type: Object,
    optional: true,
    blackbox: true
},
    // In order to avoid an 'Exception in setInterval callback' from Meteor
    heartbeat: {
        type: Date,
        optional: true
    }
});



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
    label: "Conectado",
    defaultValue: true,
    autoform:{
      type:"hidden"
    }
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
      if (this.isInsert) {
        return this.userId;
      }else if (this.isUpSert) {
        return {$setOnInsert: this.userId}
      }else {
        this.unset();
      }
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

Meteor.users.allow({
	  insert: function () { return true; },
	  update: function () { return true; },
	  remove: function () { return true; }
});

Meteor.users.attachSchema( User );
Perfiles.attachSchema ( Perfil );
Mensajes.attachSchema ( MensajeSchema );
Tags.attachSchema ( Tag );
