Template.ListadoTags.helpers({
  tags: ()=> {
       return Tags.find({});
  }
});

Template.ListadoTags.events({
  "click .fa-trash": function(){
     Meteor.call('deleteTag', this._id);
  }
});
