var NODE_ENV;

import {
  join,
  dirname
} from 'path';

import uridir from '@w5/uridir';

//  USER_TAX_CDN:CDN
({NODE_ENV} = process.env);

//export CDN = CDN or '//user0.ga/'
export var DEV = NODE_ENV !== 'production';

export var ROOT = dirname(uridir(import.meta));

export var LIB = join(ROOT, 'lib');

export var SRC = join(ROOT, 'src');
