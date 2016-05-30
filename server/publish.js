Meteor.publish('mensajes', function () {
  return Mensajes.find({empresa: this.userId});
});
Meteor.publish('tags', function () {
  return Tags.find({empresa:this.userId});
});
