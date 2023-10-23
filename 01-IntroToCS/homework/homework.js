'use strict';

function BinarioADecimal(num) {
   return num.toString(2)
}

function DecimalABinario(num) {
   return parseInt(num, 2)
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
