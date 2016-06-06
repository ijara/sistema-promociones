import { Meteor } from 'meteor/meteor';

Accounts.onCreateUser((options,user)=>{
    user.foto = "";
    user.descripcion = "";
    user.paginaweb = "";
    return user;
})

Meteor.startup(() => {

});

