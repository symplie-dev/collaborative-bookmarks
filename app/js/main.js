

function showArticles(){
  var content = document.querySelector('#content');

  var s = '<div class="row">'
    + '<div class="col-sm-6 col-md-4">' + '<div class="thumbnail">' + '<div class="caption">' + '<h3>nytimes.com</h3>' + '<p>...</p>' + '<p><a href="#" class="btn btn-primary" role="button">Open</a>' + '<a href="#" class="btn btn-default" role="button">Dismiss</a></p>' + '</div>' + '</div>' + '</div>'
    + '<div class="col-sm-6 col-md-4">' + '<div class="thumbnail">' + '<div class="caption">' + '<h3>nytimes.com</h3>' + '<p>...</p>' + '<p><a href="#" class="btn btn-primary" role="button">Open</a>' + '<a href="#" class="btn btn-default" role="button">Dismiss</a></p>' + '</div>' + '</div>' + '</div>'
    + '<div class="col-sm-6 col-md-4">' + '<div class="thumbnail">' + '<div class="caption">' + '<h3>nytimes.com</h3>' + '<p>...</p>' + '<p><a href="#" class="btn btn-primary" role="button">Open</a>' + '<a href="#" class="btn btn-default" role="button">Dismiss</a></p>' + '</div>' + '</div>' + '</div>'
    + '<div class="col-sm-6 col-md-4">' + '<div class="thumbnail">' + '<div class="caption">' + '<h3>nytimes.com</h3>' + '<p>...</p>' + '<p><a href="#" class="btn btn-primary" role="button">Open</a>' + '<a href="#" class="btn btn-default" role="button">Dismiss</a></p>' + '</div>' + '</div>' + '</div>'
    + '</div>';

  content.innerHTML = '<h1 class="page-header">Articles</h1>' + s;
}

function showGroups(){
  var content = document.querySelector('#content');

  var s = '<ul class="media-list">'
    + '<li class="media">' + '<div class="media-left">' + '<a href="#">' + '<img class="media-object" src="./images/group.png" alt="...">' + '</a>' + '</div>' + '<div class="media-body">' + '<h4 class="media-heading">Group 1</h4>' + 'Developer group at BlahBlergBlorg Inc.'
      + '<div class="media">' + '<div class="media-left">' + '<a href="#">' + '<img class="media-object" src="./images/headshot.jpg" alt="...">' + '</a>' + '</div>' + '<div class="media-body">' + '<h4 class="media-heading">Joe Shmo</h4>' + 'Internal developer at BlahBlergBlorg Inc.' + '</div>' + '</div>'
      + '<div class="media">' + '<div class="media-left">' + '<a href="#">' + '<img class="media-object" src="./images/headshot.jpg" alt="...">' + '</a>' + '</div>' + '<div class="media-body">' + '<h4 class="media-heading">Joe Shmo</h4>' + 'Internal developer at BlahBlergBlorg Inc.' + '</div>' + '</div>'
    + '</div>' + '</li>'
    + '<li class="media">' + '<div class="media-left">' + '<a href="#">' + '<img class="media-object" src="./images/group.png" alt="...">' + '</a>' + '</div>' + '<div class="media-body">' + '<h4 class="media-heading">Group 1</h4>' + 'Developer group at BlahBlergBlorg Inc.'
      + '<div class="media">' + '<div class="media-left">' + '<a href="#">' + '<img class="media-object" src="./images/headshot.jpg" alt="...">' + '</a>' + '</div>' + '<div class="media-body">' + '<h4 class="media-heading">Joe Shmo</h4>' + 'Internal developer at BlahBlergBlorg Inc.' + '</div>' + '</div>'
      + '<div class="media">' + '<div class="media-left">' + '<a href="#">' + '<img class="media-object" src="./images/headshot.jpg" alt="...">' + '</a>' + '</div>' + '<div class="media-body">' + '<h4 class="media-heading">Joe Shmo</h4>' + 'Internal developer at BlahBlergBlorg Inc.' + '</div>' + '</div>'
    + '</div>' + '</li>'
    + '<li class="media">' + '<div class="media-left">' + '<a href="#">' + '<img class="media-object" src="./images/group.png" alt="...">' + '</a>' + '</div>' + '<div class="media-body">' + '<h4 class="media-heading">Group 1</h4>' + 'Developer group at BlahBlergBlorg Inc.' + '</div>' + '</li>'
    + '</ul>';

  content.innerHTML = '<h1 class="page-header">Groups</h1>' + s;
}

function showCollaborators(){
  var content = document.querySelector('#content');

  var s = '<ul class="media-list">'
    + '<li class="media">' + '<div class="media-left">' + '<a href="#">' + '<img class="media-object" src="./images/headshot.jpg" alt="...">' + '</a>' + '</div>' + '<div class="media-body">' + '<h4 class="media-heading">Joe Shmo</h4>' + 'Internal developer at BlahBlergBlorg Inc.' + '</div>' + '</li>'
    + '<li class="media">' + '<div class="media-left">' + '<a href="#">' + '<img class="media-object" src="./images/headshot.jpg" alt="...">' + '</a>' + '</div>' + '<div class="media-body">' + '<h4 class="media-heading">Joe Shmo</h4>' + 'Internal developer at BlahBlergBlorg Inc.' + '</div>' + '</li>'
    + '<li class="media">' + '<div class="media-left">' + '<a href="#">' + '<img class="media-object" src="./images/headshot.jpg" alt="...">' + '</a>' + '</div>' + '<div class="media-body">' + '<h4 class="media-heading">Joe Shmo</h4>' + 'Internal developer at BlahBlergBlorg Inc.' + '</div>' + '</li>'
    + '</ul>';

  content.innerHTML = '<h1 class="page-header">Collaborators</h1>' + s;
}

function showAnalytics(){
  var content = document.querySelector('#content');

  content.innerHTML = '<h1 class="page-header">Analytics</h1>';
}

function showExport(){
  var content = document.querySelector('#content');

  content.innerHTML = '<h1 class="page-header">Export</h1>';
}

function showDashboard(){
  var content = document.querySelector('#content');

  content.innerHTML = '<h1 class="page-header">Dashboard</h1>';
}

function showSettings(){
  var content = document.querySelector('#content');

  content.innerHTML = '<h1 class="page-header">Settings</h1>';
}

function showProfile(){
  var content = document.querySelector('#content');

  content.innerHTML = '<h1 class="page-header">Profile</h1>';
}

function showHelp(){
  var content = document.querySelector('#content');

  content.innerHTML = '<h1 class="page-header">tion showHelp</h1>';
}

showGroups();
