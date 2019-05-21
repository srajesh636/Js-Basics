/*
 *
 **
 ***
 ****
 ******
 */

let stars = limit => {
  let pattern = ''
  for (i = 0; i < limit; i++) {
    pattern += '*'
    console.log(pattern)
  }
}

stars(20);
