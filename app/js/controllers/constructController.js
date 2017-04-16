var construct = {
  content: document.querySelector('#content'),
  sidebar: document.querySelector('#sidebar'),
  navbar: document.querySelector('#navbar'),
  init: function(){
    construct.navbar.onclick = construct.events.navbar.onclick;
    construct.sidebar.onclick = construct.events.sidebar.onclick;
    construct.content.onclick = construct.events.content.onclick;
  },
  events: {
    navbar: {
      onclick: function(e){
        console.log('click', e.target);

        var section = e.target.hasAttribute('section') ? e.target.getAttribute('section') : false

        if(section){
          switch (section){
            case 'dashboard':
              console.log('show dashboard');
              construct.dashboard.build();
              break;
            case 'settings':
              console.log('show settings');
              // construct.settings.build();
              break;
            case 'profile':
              console.log('show profile');
              // construct.profile.build();
              break;
            case 'help':
              console.log('show help');
              // construct.help.build();
              break;
            default:
              console.error('unhandled switch case');
              console.trace();
              break;
          }
        }
      }

    },

    sidebar: {
      onclick: function(e){
        console.log('click', e.target);

        var section = e.target.hasAttribute('section') ? e.target.getAttribute('section') : false

        if(section){
          var result;
          
          switch (section){
            case 'users':
              console.log('show users');
              result = construct.users.build();
              break;
            case 'articles':
              console.log('show articles');
              result = construct.articles.build();
              break;
            case 'groups':
              console.log('show groups');
              result = construct.groups.build();
              break;
            default:
              console.error('unhandled switch case');
              console.trace();
              break;
          }

          if(result){
            content.innerHTML = result;
          }
        }

      }


    },

    content: {
      onclick: function(e){
        console.log('click', e.target);

      }
    }

  }
}

construct.init();
