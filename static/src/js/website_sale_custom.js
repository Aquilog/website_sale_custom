odoo.debug = true;

odoo.define('website_sale_custom', function (require) {
  'use strict';
  var Widget = require('web.Widget');
  var core = require('web.core');
  require('website.website');

  var ValuePicker = Widget.extend({
    // template: 'website_sale_custom.index',
    init: function () {
      // this.eventType = 'click touchstart';
    },
    start: function () {
      // this.menu_dropdown();
      this.action_hover();
      this.action_select();
    },
    // menu_dropdown: function () {
    //   $('.texture-dropdown').on(this.eventType, function (e) {
    //     e.stopImmediatePropagation();
    //     if (!$(this).next().hasClass('is-open')) {
    //       $(this).addClass('is-active');
    //       $(this).next().addClass('is-open');
    //     } else {
    //       $(this).removeClass('is-active');
    //       $(this).next().removeClass('is-open');
    //     }
    //   });
    // },
    action_hover: function () {
      console.log($);
      console.log(this);
      $('.variant-value').on('mouseover', function (e) {
        var parentDiv  = $(this).parent().parent();
        var valueId = parentDiv.attr('id').split('-')[1];
        var valueImg = $(this).find('img:first').attr('src');
        var preview = $('#preview-' + valueId);
        preview.css('visibility', 'visible');
        preview.find('img:first').attr('src', valueImg);
      });
    },
    action_select: function () {
      $('.variant-value').on('click', function (e) {
        var parentDiv  = $(this).parent().parent();
        var valueId = parentDiv.attr('id').split('-')[1];
        var valueImg = $(this).find('img:first').attr('src');
        var preview = $('#preview-' + valueId);
        preview.css('visibility', 'visible');
        preview.find('img:first').attr('src', valueImg);
      });
    },
  });

  var t = new ValuePicker();
  t.start();
  return t;
});
