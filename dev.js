// https://leetcode.com/problems/valid-parentheses/
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
/* An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Note that an empty string is also considered valid.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s[0] && !s[0].match(/(\(|\[|{)/g)) { return false; }
  else if (!s[0]) { return true; }
  else {
    let open = '';
    let closed = '';
    const parens = {
      ')': '(',
      ']': '[',
      '}': '{',
    };
    for (c of s) {
      if (c.match(/(\(|\[|{)/g)) {
        open += c;
      } else {
        if (open[open.length - 1] !== parens[c]) {
          return false;
        } else {
          open = open.substring(0, open.length - 1);
        }
      }
    }
    if (open.length === closed.length) {
      return true;
    } else {
      return false;
    }
  }
};

const testcase = "[";
console.log(isValid(testcase));