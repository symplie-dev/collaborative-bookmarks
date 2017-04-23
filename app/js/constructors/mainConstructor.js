var construct = {
  content: null,
  views: {},

  init: function(callback){
    callback();

    console.log('init', data.bookmarks);
    construct.content = document.querySelector('#content');
    construct.usersList = document.querySelector('#usersList');
    construct.groupsList = document.querySelector('#groupsList');

    construct.content.innerHTML = construct.build.bookmarkCards(data.bookmarks);
    construct.groupsList.innerHTML = construct.build.groupsList(data.groups);
    construct.usersList.innerHTML = construct.build.usersList(data.users);
  },

  build: {
    bookmarkCards: function(bookmarks){
      if(bookmarks){
        var bookmark, s = '';

        for(bookmark in bookmarks){
          s += construct.views.bookmarkCard(bookmarks[bookmark]);
        }

        return s;
      }else{
        return '';
      }
    },
    groupsList: function(groups){
      if(groups){
        var group, s = '';

        for(group in groups){
          s += construct.views.groupsList(groups[group]);
        }

        return s;
      }else{
        return '';
      }
    },
    usersList: function(users){
      if(users){
        var user, s = '';

        for(user in users){
          s += construct.views.usersList(users[user]);
        }

        return s;
      }else{
        return '';
      }
    }
  }
}
