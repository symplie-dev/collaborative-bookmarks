construct.users = {
  build: function(){
    var i, s = '<ul class="media-list">'
    var users = controllers.users.getAll();

    for(i = 0; i < users.length; i++){
      s += '<li class="media">'
      + '<div class="media-left">'
      + '<a href="#"><img class="media-object" src="./images/headshot.jpg" alt="..."></a>'
      + '</div>'
      + '<div class="media-body"><h4 class="media-heading">'
      + users[i].name + '</h4>'
      + users[i].desc + '</div>' + '</li>';
    }

    return s + '</ul>';
  }
}
