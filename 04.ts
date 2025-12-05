/** 8 stars */

/**
 * The elves have found the encrypted code that protects the door to Santa’s workshop 🔐.
 * The PIN has 4 digits, and it is hidden inside blocks like these:
 *
 * [1++][2-][3+][<]
 * Write a function that deciphers the PIN from the code.
 *
 * The code is made up of blocks between brackets [...] and each block generates one digit of the PIN.
 *
 * A normal block has the form [nOP...], where n is a number (0-9) and after it there can be a list of (optional) operations.
 *
 * The operations are applied in order to the number and are:
 *
 * + adds 1
 * - subtracts 1
 * The result is always a digit (mod 10 arithmetic), for example 9 + 1 → 0 and 0 - 1 → 9.
 *
 * There is also the special block [<], which repeats the digit from the previous block.
 *
 * If in the end there are fewer than 4 digits, you must return null. 
 */

function decodeSantaPin(code: string): string | null {
  // Code here
  let result = '';
  const newCode = code.substring(1, code.length - 1);
  const digits = newCode.split('][');
  if (digits.length < 4) return null;
  let counter = 0;
  for (let digit of digits) {
    let x: number = digit === '<' ? +result[counter - 1] : +digit[0];
    for (let i = 1; i < digit.length ; i++) {
      if (digit[i] === '+') {
          x=== 9 ? x = 0 : x++;
      } else if (digit[i] === '-') {
          x=== 0 ? x = 9 : x--;
      }
    }
      result += x;
      counter++;
  }
  return result;
}
