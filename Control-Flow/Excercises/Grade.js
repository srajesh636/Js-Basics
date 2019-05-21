let grade = marks => {
  let total = 0;

  marks.map((i) => total += i)
  
  if(total <59) return 'F';
  if(total <69) return 'D';
  if(total <79) return 'C';
  if(total <89) return 'B';
  if(total <99) return 'A';

}
let marks = [30, 20, 30];

console.log(grade(marks));
