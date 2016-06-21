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
FlowRouter.route('/panel',{
  name:"panel",
  action(){
    BlazeLayout.render('MainLayout',{main:'Panel'})
  }
});
