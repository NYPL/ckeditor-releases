/*jslint indent: 2, maxlen: 80 */
/*globals CKEDITOR */

CKEDITOR.plugins.add('digitalcollection', {
  requires: 'widget',
  icons: 'digitalcollection',
  init: function (editor) {
    'use strict';

    CKEDITOR.dialog.add(
      'digitalcollectionDialog',
      this.path + 'dialogs/digitalcollection.js'
    );

    editor.ui.addButton('digitalcollection', {
      label: 'Add Digital Collections Image',
      command: 'digitalcollection',
      icon: this.path + 'images/digitalcollection.png'
    });

    editor.widgets.add('digitalcollection', {
      dialog: 'digitalcollectionDialog',
      init: function () {
        var img = this.element.find('img').getItem(0),
          link = this.element.find('a').getItem(0),
          alt = img.getAttribute('alt'),
          width = img.getAttribute('width'),
          img_id = img.data('id'),
          img_uuid = link.data('uuid');

        if (alt && alt !== undefined) {
          this.setData('alt', alt);
        }
        if (width) {
          this.setData('width', width);
        }
        if (img_id) {
          this.setData('img_id', img_id);
        }
        if (img_uuid) {
          this.setData('img_uuid', img_uuid);
        }

        if (this.element.hasClass('align-left')) {
          this.setData('align', 'left');
        }
        if (this.element.hasClass('align-right')) {
          this.setData('align', 'right');
        }
        if (this.element.hasClass('align-center')) {
          this.setData('align', 'center');
        }
      },
      data: function () {
        var img = this.element.find('img').getItem(0),
          link = this.element.find('a').getItem(0);

        if (this.data.alt === '') {
          img.setAttribute('alt', '');
        } else {
          img.setAttribute('alt', this.data.alt);
        }

        if (this.data.width === '') {
          img.setAttribute('width', '');
        } else {
          img.setAttribute('width', this.data.width);
        }

        if (this.data.img_id === '') {
          img.setAttribute('data-id', '');
          img.setAttribute('src', '');
        } else {
          img.setAttribute('data-id', this.data.img_id);
          img.setAttribute('src',
            'http://images.nypl.org/index.php?id=' + this.data.img_id + '&t=w');
        }

        if (this.data.img_uuid === '') {
          link.setAttribute('data-uuid', '');
          link.setAttribute('href', '');
        } else {
          link.setAttribute('data-uuid', this.data.img_uuid);
          link.setAttribute('href',
            'http://digitalcollections.nypl.org/items/' + this.data.img_uuid);
        }

        this.element.removeClass('inline');
        this.element.removeClass('align-left');
        this.element.removeClass('align-right');
        this.element.removeClass('align-center');

        if (this.data.align) {
          this.element.addClass('align-' + this.data.align);
        }
        if (this.data.align !== 'center') {
          this.element.addClass('inline');
        }
      },

      template:
        '<div class="digcol-image">' +
          '<figure class="caption">' +
            '<a href="" target="_blank">' +
            '<img data-id src="" width="300px" alt=""/></a>' +
            '<figcaption class="digcol-caption">Caption</figcaption>' +
          '</figure>' +
        '</div>',
      editables: {
        caption: {
          selector: '.digcol-caption',
          allowedContent: 'strong em'
        }
      },
      allowedContent:
        'div(!digcol-image,inline,align-left,align-right,align-center);' +
        'figure(!caption);a(!data-uuid);img(!data-id);' +
        'figcaption(!digcol-caption);',
      requiredContent: 'div(digcol-image)',
      upcast: function (element) {
        return element.name === 'div' && element.hasClass('inline');
      }
    });
  }
});
