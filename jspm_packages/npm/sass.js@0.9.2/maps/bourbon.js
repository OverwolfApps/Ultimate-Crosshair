/* */ 
"format cjs";
(function(Sass) {
  'use strict';

  // make sure the namespace is available
  !Sass.maps && (Sass.maps = {});

  // files map for bourbon v4.2.1 - http://bourbon.io/
  Sass.maps.bourbon = {
    // make the source file available in "bourbon/_bourbon.scss"
    directory: 'bourbon',
    // https://github.com/thoughtbot/bourbon/blob/v4.2.1/app/assets/stylesheets/
    // using rawgit to directly access the github repository via CORS
    // NOTE: that this will only work for preloading, as lazyloading throws security exceptions
    base: 'https://cdn.rawgit.com/thoughtbot/bourbon/v4.2.1/app/assets/stylesheets/',
    files: [
      '_bourbon.scss',
      '_bourbon-deprecated-upcoming.scss',
      'addons/_border-color.scss',
      'addons/_border-radius.scss',
      'addons/_border-style.scss',
      'addons/_border-width.scss',
      'addons/_buttons.scss',
      'addons/_clearfix.scss',
      'addons/_ellipsis.scss',
      'addons/_font-stacks.scss',
      'addons/_hide-text.scss',
      'addons/_margin.scss',
      'addons/_padding.scss',
      'addons/_position.scss',
      'addons/_prefixer.scss',
      'addons/_retina-image.scss',
      'addons/_size.scss',
      'addons/_text-inputs.scss',
      'addons/_timing-functions.scss',
      'addons/_triangle.scss',
      'addons/_word-wrap.scss',
      'css3/_animation.scss',
      'css3/_appearance.scss',
      'css3/_backface-visibility.scss',
      'css3/_background-image.scss',
      'css3/_background.scss',
      'css3/_border-image.scss',
      'css3/_calc.scss',
      'css3/_columns.scss',
      'css3/_filter.scss',
      'css3/_flex-box.scss',
      'css3/_font-face.scss',
      'css3/_font-feature-settings.scss',
      'css3/_hidpi-media-query.scss',
      'css3/_hyphens.scss',
      'css3/_image-rendering.scss',
      'css3/_keyframes.scss',
      'css3/_linear-gradient.scss',
      'css3/_perspective.scss',
      'css3/_placeholder.scss',
      'css3/_radial-gradient.scss',
      'css3/_selection.scss',
      'css3/_text-decoration.scss',
      'css3/_transform.scss',
      'css3/_transition.scss',
      'css3/_user-select.scss',
      'functions/_assign-inputs.scss',
      'functions/_contains-falsy.scss',
      'functions/_contains.scss',
      'functions/_is-length.scss',
      'functions/_is-light.scss',
      'functions/_is-number.scss',
      'functions/_is-size.scss',
      'functions/_modular-scale.scss',
      'functions/_px-to-em.scss',
      'functions/_px-to-rem.scss',
      'functions/_shade.scss',
      'functions/_strip-units.scss',
      'functions/_tint.scss',
      'functions/_transition-property-name.scss',
      'functions/_unpack.scss',
      'helpers/_convert-units.scss',
      'helpers/_directional-values.scss',
      'helpers/_font-source-declaration.scss',
      'helpers/_gradient-positions-parser.scss',
      'helpers/_linear-angle-parser.scss',
      'helpers/_linear-gradient-parser.scss',
      'helpers/_linear-positions-parser.scss',
      'helpers/_linear-side-corner-parser.scss',
      'helpers/_radial-arg-parser.scss',
      'helpers/_radial-gradient-parser.scss',
      'helpers/_radial-positions-parser.scss',
      'helpers/_render-gradients.scss',
      'helpers/_shape-size-stripper.scss',
      'helpers/_str-to-num.scss',
      'settings/_asset-pipeline.scss',
      'settings/_prefixer.scss',
      'settings/_px-to-em.scss',
    ]
  };

})(Sass);