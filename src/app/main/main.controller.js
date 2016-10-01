class MainController {
  constructor() {
    'ngInject';

    let background = 0;
    let count = 6;

    // preload

    for (let i = 0; i < count; i++){
      let div = $(`<div class='hidden pjo-photo-${i}'></div>`);
      $('body').append(div);
    }

    setInterval(function() {

      $('.pjo-photographer').removeClass(`pjo-photo-${background}`);

      background = (background + 1) % count;

      $('.pjo-photographer').addClass(`pjo-photo-${background}`);

    }, 5000);
  }
}

export default MainController;
