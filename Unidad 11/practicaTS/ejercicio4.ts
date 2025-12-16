let id: string | number;

function whatIsIt(id: string | number){
  if (typeof id === 'string') {
    return 'Es texto';
  } else {
    return 'Es numero';
  }
}

console.log(whatIsIt(2));
