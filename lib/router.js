FlowRouter.route('/',{
  name: 'home',
  action(){
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/mensajes',{
  name: 'mensajes',
  action(){
    BlazeLayout.render('MainLayout', { main: "Mensajes"})
  }
});
FlowRouter.route('/tags',{
  name:'tags',
  action(){
    BlazeLayout.render('MainLayout',{main:"Tags"})
  }
});
FlowRouter.route('/mensajecontag/:tag',{
  name: "hello",
  action: function(params) {
      BlazeLayout.render("MainLayout",{main:"MCT"})
    }

  });
FlowRouter.route('/editarperfil',{
   name: "perfil",
    action(){
      BlazeLayout.render('MainLayout',{main:"EditarPerfil"})
    }
});
FlowRouter.route('/perfil',{
  name: "profile",
  action(){
      BlazeLayout.render('MainLayout',{main:'Perfil'})
  }
});
FlowRouter.route('/organizaciones',{
  name:"organizaciones",
  action(){
    BlazeLayout.render('MainLayout',{main:'Organizaciones'})
  }
});
FlowRouter.route('/detalleorg/:id',{
  name:"detalleorg",
  action: function(params){
    BlazeLayout.render("MainLayout",{main:'DetalleOrg'})
  }
});
FlowRouter.route('/detallemsg/:id',{
  name:"detallemsg",
  action: function(params) {
    BlazeLayout.render("MainLayout",{main:"DetalleMsg"})
  }
});

FlowRouter.route('/chat/:empresa',{
  name:"chat",
  action: function(params) {
    BlazeLayout.render("MainLayout",{main:"Chat"})
  }
});

FlowRouter.route('/cambiarpermisos/:id',{
  name:"permisos",
  action: function(params) {
    BlazeLayout.render("MainLayout",{main:"CambiarPermisos"})
  }
});
FlowRouter.route('/admin',{
  name:'admin',
  action(){
    BlazeLayout.render('MainLayout', {main:'Admin'});
  }
});

FlowRouter.route('/chats',{
  name:'chats',
  action(){
      BlazeLayout.render('MainLayout',{main:'Chats'})
  }
});
