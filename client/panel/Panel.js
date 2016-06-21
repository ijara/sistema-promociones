Template.Panel.helpers({
  usuarios: ()=> {
       return Meteor.users.find({});
  }
});
