CKEDITOR.plugins.add( 'cataloglink', {

  init: function(editor) {

    editor.addCommand('cataloglinkDialog', new CKEDITOR.dialogCommand('cataloglinkDialog'));

    editor.ui.addButton( 'cataloglink', {
      label: 'Insert Catalog Link',
      command: 'cataloglinkDialog',
      icon: this.path + 'images/cataloglink.png'
    });
    
    CKEDITOR.dialog.add( 'cataloglinkDialog', function (editor) {
      return {
        title: 'Catalog Link Properties',
        minWidth: 400,
        minHeight: 200,
        contents: [
          {
            id: 'tab1',
            label: 'Add a Catalog link',
            elements:[
              {
                type: 'text',
                id: 'text',
                label: 'Text',
                setup: function (element) {
                  this.setValue(element.getText());
                },
                commit: function (element) {
                  var text = this.getValue();
                  if (text) {
                    element.setText(text);
                  } else if (!this.insertMode) {
                    element.removeText(text);
                  }
                }
              },
              {
                type: 'text',
                id: 'id',
                label: 'Id',
                setup: function (element) {
                  this.setValue(element.getAttribute('data-id'));
                },
                commit: function (element) {
                  var id = this.getValue();
                  if (id) {
                    element.setAttribute('data-id', id);
                  } else if (!this.insertMode) {
                    element.removeAttribute('data-id');
                  }
                }
              },
              {
                type: 'text',
                id: 'keywords',
                label: 'keywords',
                setup: function (element) {
                  this.setValue(element.getAttribute('data-keywords'));
                },
                commit: function (element) {
                  var keywords = this.getValue();
                  if (keywords) {
                    element.setAttribute('data-keywords', keywords);
                  } else if (!this.insertMode) {
                    element.removeAttribute('data-keywords');
                  }
                }
              }
            ]
          }
        ],

        onShow: function () {
          var selection = editor.getSelection(),
              element = selection.getStartElement();

          if (element) {
            element = element.getAscendant('a', true);
          }

          if (!element || element.getName() != 'a') {
            element = editor.document.createElement('a');
            this.insertMode = true;
          } else {
            this.insertMode = false;
          }

          this.element = element;

          if (!this.insertMode) {
            this.setupContent(this.element);
          }
        },

        onOk: function () {
          var link = 'http://nypl.bibliocommons.com/',
              dialog = this,
              id = dialog.getValueOf('tab1', 'id'),
              text = dialog.getValueOf('tab1', 'text'),
              keywords = dialog.getValueOf('tab1', 'keywords'),
              // cataloglink = editor.document.createElement('a');
              cataloglink = dialog.element;

          dialog.commitContent(cataloglink);

          if (dialog.insertMode) {
            editor.insertElement(cataloglink);
          }

          if (id) {
            link += 'item/show/' + id;
          } else if (keywords) {
            // split and add %20
            link += 'search?t=smart&q=' + keywords + '&commit=Search&searchOpt=catalogue';
          }

          cataloglink.setAttribute('data-id', id);
          cataloglink.setAttribute('data-keywords', keywords);

          cataloglink.setAttribute('title', text);
          cataloglink.setText(text);
          cataloglink.setAttribute('href', link);
          cataloglink.setAttribute('target', '_blank');
        }
      };
    });
  }
});