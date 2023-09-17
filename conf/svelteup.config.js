var IGNORE_WARN;

import SveltePreprocess from '@w5/svelte-preprocess';

import {
  join,
  dirname
} from 'path';

import {
  // ./esbuild
  // ./markup
  // ./postcss
  DEV,
  SRC,
  ROOT
} from './env';

import write from '@w5/write';

write(join(ROOT, 'lib/DEV.js'), 'export default ' + DEV);

IGNORE_WARN = new Set('a11y-no-noninteractive-element-interactions a11y-click-events-have-key-events a11y-missing-content a11y-no-static-element-interactions'.split(' '));

export default {
  entry: join(SRC, 'index.js'),
  outdir: join(ROOT, 'lib'),
  sourcemap: DEV, // true
  servedir: '.',
  compilerOptions: {
    css: 'external',
    customElement: true
  },
  // esbuild
  onwarn: (warn) => {
    var code, message;
    ({code, message} = warn);
    if (code === 'a11y-missing-attribute') {
      return !message.includes('<a>');
    }
    return !IGNORE_WARN.has(code);
  },
  preprocess: [
    // style: ({ content, attributes, filename }) =>
    //  #if attributes.lang != 'stylus'
    //  #  return
    //  {css} = await postcss.process(content,{from:filename})
    //  return {
    //    code:css
    //  }
    // {
    //   markup
    // }
    SveltePreprocess({
      sourceMap: true,
      coffeescript: {
        label: true,
        sourceMap: true
      },
      babel: {
        presets: [
          [
            '@babel/preset-env',
            {
              loose: true,
              modules: false,
              targets: {
                esmodules: true
              }
            }
          ]
        ]
      },
      stylus: true,
      pug: {
        basedir: SRC
      }
    })
  ]
};

// postcss
