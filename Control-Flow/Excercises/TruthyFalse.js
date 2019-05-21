let input = [0, 1, 2, 4, false, '', 5, undefined, null];

const checkTruthy = input => {
  for (i of input) {
    let message = i ? 'Truthy' : 'False';
    console.log(message);
  }
}

checkTruthy(input);
