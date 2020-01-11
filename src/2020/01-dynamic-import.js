/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

const language = 'en';

let lib;
switch (language) {
  case 'es': {
    lib = './01-dynamic-import_es.js';
    break;
  }
  default: {
    lib = './01-dynamic-import_en.js';
  }
}

import(lib)
  .then(module => console.log(module.greeting()))
  .catch(error => console.log(error));
