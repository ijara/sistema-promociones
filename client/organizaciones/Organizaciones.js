Template.Organizaciones.helpers({
  usuarios: ()=> {
       return Meteor.users.find({});
  }
});
Template.DetalleOrg.helpers({
  organizacion: function() {
    var id = FlowRouter.getParam('id');
    return Meteor.users.findOne({_id : id});
  }
});
