Template.Organizaciones.helpers({
  usuarios: ()=> {
       return Meteor.users.find({});
  }
});
Template.DetalleOrg.helpers({
  organizacion: function() {
    var id = FlowRouter.getParam('id');
    return Meteor.users.findOne({_id : id});
  },
  solicitud: function() {
    var id = FlowRouter.getParam('id');
    return Solicitudes.findOne({idusuario:id});
  }
});

Template.DetalleOrg.events({
  "click .btnaceptar":function() {
    var id = FlowRouter.getParam('id');
    Meteor.users.update({_id:id}, {$set:{
      "roles":['organizacion']
    }});
  },
  "click .btncancelar":function() {
    var id = FlowRouter.getParam('id');
    Meteor.users.update({_id:id}, {$set:{
      "roles":['cliente']
    }});
  },
});




Meteor.subscribe('allusers');
