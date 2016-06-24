Meteor.publish("allusers",
  function() {
    return Meteor.users.find({});
  }
);
