/**
- viết chương trình để đếm số cách để đạt được tỉ số của trận đấu bóng đá trong hiệp 1. 
- Tỉ số là x - y
- Xác định số cách có thể để đạt được tỉ số này.

Input:
- Dòng đầu tiên là số test case N.
- N dòng tiếp theo chứa các cặp số x và y.

Output:
- N dòng, dòng thứ i là số cách để đạt được tỉ số trong test case thứ i.
- 2 0 --> 2
- 1 3 --> 4
 */

function countGoalPredictive(x, y) {
  let count = 0;

  // Duyệt qua tất cả các bàn thắng của đội TT (ttGoals)
  for (let ttGoals = 0; ttGoals <= x; ttGoals++) {
    // Tính số bàn thắng tương ứng của TTLab
    const ttlabGoals = y + (x - ttGoals);

    // Kiểm tra nếu tỉ số hợp lệ
   if (ttlabGoals >= 0 && ttlabGoals <= y) {
      // Nếu hợp lệ, tăng biến đếm số cách lên 1
      count++;
    }
  }
  
  return count;
}

console.log(countGoalPredictive(2, 0));
console.log(countGoalPredictive(1, 3));
