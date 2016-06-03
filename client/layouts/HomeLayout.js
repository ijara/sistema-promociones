Template.HomeLayout.helpers({
  mensajes:()=>{
    return Mensajes.find({conectado:true},{sort:{createdAt:-1}});
  }
});
