Meteor.subscribe('mensajes');
Meteor.subscribe('tags');
Meteor.subscribe('users');

Template.ListadoMensajes.helpers({
  mensajes: ()=> {
       return Mensajes.find({empresa: Meteor.userId()},{sort:{createdAt:-1}});
  }
});
