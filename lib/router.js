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
