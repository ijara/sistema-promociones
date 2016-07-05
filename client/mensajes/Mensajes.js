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

Template.DetalleMsg.helpers({
  mensaje: function() {
    var id = FlowRouter.getParam('id');
    return Mensajes.find({_id: id});
  },
  roomid: function () {
    return Session.get("roomid");
  }
});

Template.ListadoMensajes.events({
  "click .fa-trash": function() {
    Meteor.call('deleteMsg', this._id);
  }
});

Template.DetalleMsg.onRendered(function() {
  var idmensaje = FlowRouter.getParam('id');
  var mensaje = Mensajes.findOne({_id:idmensaje});
  if (mensaje.empresa != Meteor.userId()) {
    var res = ChatRooms.findOne({chatIds:{$all:[mensaje.empresa,Meteor.userId()]}});
    if (res) {
      //ya existe una room
      Session.set('roomid', res._id);
    }else {
      //crear una room
      var newRoom = ChatRooms.insert({chatIds:[mensaje.empresa,Meteor.userId()],messages:[]});
      Session.set("roomid", newRoom);
    }
  }
});
