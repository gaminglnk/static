async function init() {
  const video = document.getElementById('youtube-player');
    const ui = video['ui'];
    const config = {
      'seekBarColors': {
        base: 'rgba(255,255,255,.2)',
        buffered: 'rgba(255,255,255,.4)',
        played: 'rgb(255,0,0)',
      }
    }
   ui.configure(config);

    const controls = ui.getControls();
    const player = controls.getPlayer();
  
    window.player = player;
    window.ui = ui;

    player.addEventListener('error', onPlayerErrorEvent);
    controls.addEventListener('error', onUIErrorEvent);

    try {
      await player.load(video_manifestUri);
      console.log('The video has now been loaded!');
    } catch (error) {
      onPlayerError(error);
    }

    $('.shaka-overflow-menu-button').html('settings');
    $('.shaka-back-to-overflow-button .material-icons-round').html('arrow_back_ios_new');
}

function onPlayerErrorEvent(errorEvent) {
  onPlayerError(event.detail);
}

function onPlayerError(error) {
  console.error('Error code', error.code, 'object', error);
}

function onUIErrorEvent(errorEvent) {
  onPlayerError(event.detail);
}

function initFailed(errorEvent) {
  console.error('Unable to load the UI library!');
}

document.addEventListener('shaka-ui-loaded', init);
document.addEventListener('shaka-ui-load-failed', initFailed);
