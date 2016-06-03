Template.ListadoMensajes.helpers({
  mensajes: ()=> {
       return Mensajes.find({empresa: Meteor.userId()},{sort:{createdAt:-1}});
  }

});

Template.MCT.helpers({
  mensajes: function() {
    var tag = FlowRouter.getParam('tag');
    var items =  Mensajes.find({tags:tag},{sort:{createdAt:-1}});
    var fecha;
    items.forEach(function (item) {
      item.createdAt = moment(item.createdAt).fromNow();
    });
    return items;
  }
});
