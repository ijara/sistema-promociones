Template.Admin.helpers({
  usuarios: ()=> {
       return Meteor.users.find({});
  }
});
Template.CambiarPermisos.helpers({
  usuario: function() {
    var id = FlowRouter.getParam('id');
    return Meteor.users.findOne({_id : id});
  }
});


Meteor.subscribe('allusers');
