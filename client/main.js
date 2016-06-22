AutoForm.debug();
Template.registerHelper('fromNow', function(date) {
  if (date)
    return moment(date).fromNow(true);
});

var handle;

Accounts.onLogin(function(){
    handle = Meteor.user();
    Session.set('user', handle._id);
    mismensajes = Mensajes.find({"empresa" : handle._id});
    mismensajes.forEach(function(item){
      Mensajes.update({_id:item._id}, {$set:{
        "conectado": true
      }})
    });
    return handle;
});


Accounts.onLogout(function(){
    handle = Session.get('user');
    console.log(handle);
    var mismensajes = Mensajes.find({"empresa" : handle});
    console.log(mismensajes);
    mismensajes.forEach(function(item){
      Mensajes.update({_id:item._id}, {$set:{
        "conectado": false
      }})
  })
});

Meteor.subscribe('allusers');
