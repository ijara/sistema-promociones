Template.ListadoMensajes.helpers({
  mensajes: ()=> {
       return Mensajes.find({empresa: Meteor.userId()},{sort:{createdAt:-1}});
  }

});

Template.MCT.helpers({
  mensajes: function() {
    var tag = FlowRouter.getParam('tag');
    return Mensajes.find({$and:[{conectado:true},{tags:tag}]},{sort:{createdAt:-1}});
  }
});
