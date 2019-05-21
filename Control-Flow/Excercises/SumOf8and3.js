const sumOf3and8 = number =>{
  let multipleOf3Sum=0;
  let multipleOf8Sum=0;

  for(i=0;i<=number;i++){
    if(i%3 === 0){
      multipleOf3Sum += i;
    }
    if(i%8 === 0){
      multipleOf8Sum += i;
    }
  }

  return multipleOf3Sum + multipleOf8Sum;
}

console.log(sumOf3and8(10));
