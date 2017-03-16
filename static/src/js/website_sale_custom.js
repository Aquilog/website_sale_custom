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
    action_select: function () {
      console.log($);
      console.log(this);
      $('.variant-value').on('mouseover', function (e) {
        var parentDiv  = $(this).parent().parent();
        var valueId = parentDiv.attr('id').split('-')[1];
        var valueImg = $(this).find('img:first').attr('src');
        var preview = $('#preview-' + valueId);
        console.log(parentDiv);
        console.log(valueId);
        console.log(valueImg);
        console.log(preview);

        preview.css('visibility', 'visible');
        preview.find('img:first').attr('src', valueImg);
        // e.stopImmediatePropagation();
        // var self = $(this);
        // var Value = new instance.web.Model('product.attribute.value')
        // var image_name = Value.read('name').filter([('id', '=', $('#value-img').attr('id'))])
        // console.log()
        // var icon = link.find('.status:first');
        // var value = link.attr('data-value')
        // var css = link.attr('data-class')
        // $('#texture-text').html(value)
        
        // $('#value-preview').css("visibility", "visible");
        // $('#value-img').attr("src", "/website_sale_custom/static/src/img/seat_colors/cerise.png");
        // $('.texture-row').removeClass('is-selected');
        // $('.status').addClass('hide');
        // var span = link.parent().parent().prev();
        // span.find('span.texture-cube').removeAttr('class').addClass('texture-cube ' + css);
        // span.find('span.texture-label').html(value);
        // link.addClass('is-selected');
        // icon.removeClass('hide')
      });
    }
  });

  var t = new ValuePicker();
  t.start();
  return t;
});
