var construct = {
  content: null,
  views: {},

  init: function(){
    console.log('init', data.bookmarks);
    construct.content = document.querySelector('#content');
    construct.usersList = document.querySelector('#usersList');
    construct.groupsList = document.querySelector('#groupsList');

    construct.content.innerHTML = construct.build.bookmarkCards(data.bookmarks);
    construct.groupsList.innerHTML = construct.build.groupsList(data.groups);
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
    }
  }
}
