(($) => {
  class Adminize {
    const _body = $('body');
    const _headerHeight = $('.js-headbar').height();

    initialize () {
      this.setSidebarHeight();
    }

    setSidebarHeight () {
      var _windowHeight = $(window).height();
      var _resultHeight = _windowHeight - _headerHeight;
      $('.js-scroll-wrap').height(_resultHeight);
    }

    
  };

  let adminize = new Adminize();
  $(window).on('load', () => {
    adminize.initialize();
  });
})(jQuery);
