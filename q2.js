#!/usr/bin/env node
'use strict';

const input = '5,ABCDbcB';
// const input = '10,ABCDEFGHIJ';
// const input = '4,ABCbD';
// const input = '5,ABCDabcEFA';

let table = [];

const tableSize = input.split(',')[0];
const inputString = input.split(',')[1];

for (let i = 0; i < Number(tableSize); i++) {
  table.push('-');
}

const inCustomer = (aCustomer) => {
  const isCenterEmpty = (aIndex) => {
    return table[aIndex] === '-' ? true : false;
  };

  const isLeftEmpty = (aIndex) => {
    if (aIndex - 1 < 0) {
      return true;
    }
    return table[aIndex - 1] === '-' ? true : false;
  };

  const isRightEmpty = (aIndex) => {
    if (aIndex + 1 >= tableSize) {
      return true;
    }
    return table[aIndex + 1] === '-' ? true : false;
  };

  // cond 1
  for (let i = 0; i < tableSize; i++) {
    if (isCenterEmpty(i) && isLeftEmpty(i) && isRightEmpty(i)) {
      table[i] = aCustomer;;
      return;
    }
  }

  // cond 2
  for (let i = 0; i < tableSize; i++) {
    if (isCenterEmpty(i) && (isLeftEmpty(i) || isRightEmpty(i))) {
      table[i] = aCustomer;
      return;
    }
  }

  // cond 3
  for (let i = 0; i < tableSize; i++) {
    if (isCenterEmpty(i)) {
      table[i] = aCustomer;
      return;
    }
  }
  console.warn('table is full');
};

const outCustomer = (aCustomer) => {
  for (let i = 0; i < tableSize; i++) {
    if (table[i] === aCustomer.toUpperCase()) {
      table[i] = '-';
      return;
    }
  }
};

console.log(table);

for (let i = 0; i < inputString.length; i++) {
  const c = inputString.charAt(i);

  if (c === c.toUpperCase()) {
    console.log(`in ${c}`);
    inCustomer(c);
  } else {
    console.log(`out ${c}`);
    outCustomer(c);
  }
  console.log(table);
}

console.log('===== Answer =====');
console.log(table.join(''));
