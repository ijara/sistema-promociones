
Template.messages.helpers({
    'msgs':function(){
        var result=ChatRooms.findOne({_id:Session.get('roomid')});
        if(result){
          return result.messages;
        }
    }
});

Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) {
        if (Meteor.user())
        {
              var name = Meteor.user()._id;
              var message = document.getElementById('message');

              if (message.value !== '') {
                var de=ChatRooms.update({"_id":Session.get("roomid")},{$push:{messages:{
                 name: name,
                 text: message.value,
                 createdAt: Date.now()
                }}});
                document.getElementById('message').value = '';
                message.value = '';
              }
        }
        else
        {
           alert("login to chat");
        }

    }
  }
}
