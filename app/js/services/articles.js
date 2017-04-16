services.articles = {
  getArticles: function(){
    network.get({
      url: '/articles/',
      callbacks: {
        success: function(data){
          data.set('articles', data)
        },
        error: function(){
          console.error('error loading');
        }
      }
    });
  },
  getArticle: function(id){
    network.get({
      url: '/articles/' + id,
      callbacks: {
        success: function(data){
          // data.set('users', data)
        },
        error: function(){
          console.error('error loading');
        }
      }
    });
  }
};
