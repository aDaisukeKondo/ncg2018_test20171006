#!/usr/bin/env node
'use strict';

const isValid = (aInput) => {
  let n = [];
  for (let i = 0; i < 9; i++) {
    const num = aInput.toString().charAt(i);
    if (Number(num) === 0) {
      return false;
    }
    n.push(num);
  }

  for (let i = 0; i < 9; i++) {
    const temp = n.slice(0); // deep copy
    temp[i] = 0; // replace dummy param

    if (!temp.every((aNum) => {
      return aNum !== n[i];
    })) {
      return false;
    }
  }

  if (Number(n[0] + n[1]) * n[2] !== Number(n[3] + n[4])) {
    return false;
  }

  if (Number(n[3] + n[4]) + Number(n[5] + n[6]) !== Number(n[7] + n[8])) {
    return false;
  }
  return true;
};

for (let i = 123456789; i < 1000000000; i++) {
  if (isValid(i)) {
    console.log(i);
  }
}
