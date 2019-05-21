//No divisible by 3 fizz
//No divisible by 5  buzz
//No divisible by 5 and 3 buzz
//Not Divisible by any no is  same // NOTE:

const fizBuzz = no =>{
  if( no % 3 === 0 || no %5 === 0)
  return no % 3 === 0 && no % 5 === 0 ? 'FizBuzz' :(no % 3 === 0 ? 'Fizz' : 'Buzz');
  else return no;
}


console.log( isNaN('10') ? 'Not a Number' : fizBuzz(10))
