/**
kiểm tra xem mỗi xâu chứa các ký tự ngoặc { [ ( ) ] } có cân bằng không. 
Một xâu được coi là cân bằng nếu các điều kiện sau đây được thỏa mãn:
- Mỗi dấu mở ngoặc có 1 dấu đóng ngoặc tương ứng không nằm trước nó.
- Tất cả các chuỗi con giữa mọi cặp ngoặc phải cân bằng.
- 0 < N <= 100
- Độ dài mỗi xâu không quá 100000 ký tự.
- Xâu chỉ chứa các ký tự { [ ( ) ] } 

Input:
- Dòng đầu tiên là số test case con N
- N dòng tiếp theo là N string chứa các dấu mở/đóng ngoặc

Output: N dòng, dòng thứ i là true nếu test thứ i là xâu cân bằng, ngược lại thì là false
- ( ) --> true
- { [ ( ) ] } --> true
- { [ ( ) } ] --> false
- ( ) ( --> false
- ] ( ) [ --> false
*/

function isBracket(expression) {
  const stack = [];
  const brackets = { "{": "}", "[": "]", "(": ")" };
  for (let char of expression) {
    if (brackets[char]) {
      // Nếu dấu mở ngoặc
      stack.push(char);
    } else {
      // Nếu là dấu đóng ngoặc
      const lastOpeningBracket = stack.pop();
      if (brackets[lastOpeningBracket] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function checkBalancedStrings(testCases) {
  for (let expression of testCases) {
    const result = isBracket(expression);
    console.log(result);
  }
}

checkBalancedStrings(["()", "{[()]}", "{[()}]", "()(", "]()["]);
