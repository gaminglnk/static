async function init() {
  const video = document.getElementById('youtube-theme');
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

    try {
      await player.load(youtube_theme_manifestUri);
    } catch (error) {
    }

    $('.shaka-overflow-menu-button').html('settings');
    $('.shaka-back-to-overflow-button .material-icons-round').html('arrow_back_ios_new');
}
document.addEventListener('shaka-ui-loaded', init);
