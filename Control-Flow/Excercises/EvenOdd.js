//Even or ODD

const ShowNumbers = number => {
  for (i = 0; i <= number; i++) {
    let message = i % 2 === 0 ? 'EVEN' : 'ODD';
    console.log(i,message);
  }
}

console.log(ShowNumbers(5));
