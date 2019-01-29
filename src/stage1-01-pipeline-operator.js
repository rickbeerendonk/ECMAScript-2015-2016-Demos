/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

// https://github.com/tc39/proposal-pipeline-operator/

'use strict';

function reverse(str) {
    return str.split('').reverse().join('');
}

function exclaim(str) {
    return str + '!';
}

function capatalize(str) {
    return str.length === 0 ? str : str[0].toUpperCase() + str.substring(1);
}

const name = 'ecmascript';

// Old (reverse order of application):
// const result = exclaim(reverse(capatalize(name)));

// New:
const result = name
  |> capatalize
  |> reverse
  |> exclaim;

console.log(result);
// tpircsamcE!