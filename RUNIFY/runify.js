if ( ! window.deferAfterjQueryLoaded ) {
    window.deferAfterjQueryLoaded = [];
    Object.defineProperty(window, "$", {
        set: function(value) {
            window.setTimeout(function() {
                $.each(window.deferAfterjQueryLoaded, function(index, fn) {
                    fn();
                });
            }, 0);
            Object.defineProperty(window, "$", { value: value });
        },

        configurable: true
    });
}

window.deferAfterjQueryLoaded.push(function() {

var mainContainer = document.getElementById('js-main-container'),
    loginContainer = document.getElementById('js-login-container'),
    loginButton = document.getElementById('js-btn-login'),
    background = document.getElementById('js-background');

var spotifyPlayer = new spotifyplayer();

var template = function (data) {
  return `
  <div class="screen-container">
  <div class="screen-display">
      <p class="song">${data.item.name}</p>
      <p class="artist">
          <span>${data.item.artists[0].name}</span>
          <span>-</span>
          <span>[ALBUM]</span>
          <span>[YEAR]</span>
      </p>
      <p class="prog-bar"><div class="progress__bar" style="width:${data.progress_ms * 100 / data.item.duration_ms}%"></div></p>
  </div>
  <div class="screen-buttons">
      <p class="audio-control-p"><button class="audio-control" id="switch">
        <div id="hide_id"></div>⏮︎</button></p>
      <p class="audio-control-p"><button class="audio-control" id="switch">
        <div id="hide_id"></div>▶⏸︎</button></p>
      <p class="audio-control-p"><button class="audio-control" id="switch">
        <div id="hide_id"></div>⏭︎</button></p>
      <p class="audio-control-p"><button class="audio-control" id="switch">
        <div id="hide_id"></div>❤</button></p>
  </div>
  
</div>
<div class="album-art-paneling">
  <div class="album-art-bg">
      <div class="album-art glass"><img src="${data.item.album.images[0].url}"></div>
  </div>    
</div>
  `;
};

var previousResponse = null;
spotifyPlayer.on('update', response => {
  mainContainer.innerHTML = template(response);
  if (previousResponse === null ||
    response.item.id !== previousResponse.item.id) {
    var options = {
      body: response.item.artists[0].name + ' — ' + response.item.album.name,
      icon: response.item.album.images[0].url
    }
    var n = new Notification(response.item.name, options);
    setTimeout(n.close.bind(n), 4000);
  }
  previousResponse = response;
});

spotifyPlayer.on('login', user => {
  if (user === null) {
    loginContainer.style.display = 'block';
    mainContainer.style.display = 'none';
  } else {
    loginContainer.style.display = 'none';
    mainContainer.style.display = 'block';
    Notification.requestPermission().then(function(result) {
      console.log(result);
    });
  }
});

loginButton.addEventListener('click', () => {
    spotifyPlayer.login();
});

spotifyPlayer.init();

});