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
FlowRouter.route('/perfil',{
   name: "perfil",
    action(){
        BlazeLayout.render("MainLayout",{main:"Perfil"})
    }
});