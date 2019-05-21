let primeNumbers = limit => {
  for (i = 2; i<= limit; i++) {
    for (j = 2; j<i; j++) {
      if (i % j === 0) {
        break;
      }else{
        console.log('Prime No',i)
        break;
      }
    }
  }
}


console.log(primeNumbers(10));
