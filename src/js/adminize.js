import Adminize from './adminize.core';

(($) => {
  let adminize = new Adminize();
  $(window).on('load', () => {
    adminize.initialize();
  });
  $(window).on('resize', () => {
    adminize.setSidebarHeight();
  });
})(jQuery);
