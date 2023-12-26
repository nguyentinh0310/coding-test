/**
- Mark chơi Diablo II, cần tính số gold tối thiểu để qua màn.
- Thanh kiếm có độ bền là d, giảm k đơn vị mỗi lần giết quái.
- Mark có thể sửa đồ để phục hồi độ bền, mất c gold mỗi lần sửa.
- Nếu độ bền giảm về 0 hoặc dưới 0, vũ khí biến mất.
- Tính số gold cần để qua màn, in -1 nếu không thể.

Constraints:
- 0 <= m, k, c <= 1000
- 0 < d <= 1000

Input: 
- m: số lượng quái vật trong map.
- d: độ bền của thanh kiếm.
- k: độ giảm độ bền mỗi lần giết quái.
- c: số gold cần để sửa 1 lần.

Output: 
- 10 5 1 2 --> 4
- 10 4 1 2 --> 4
*/

function calculateGoldDiablo(m, d, k, c) {
  let gold = 0;
  let currentDurability = d;

  for (let i = 0; i < m; i++) {
    currentDurability -= k;

    if (currentDurability <= 0) {
      // Kiếm bị hỏng, mất gold sau mỗi lần sửa
      gold += c;

      if (currentDurability <= -d) {
        // mất vũ khí
        return -1;
      }

      currentDurability = d;
    }
  }

  return gold;
}

console.log(calculateGoldDiablo(10, 5, 1, 2));
console.log(calculateGoldDiablo(10, 4, 1, 2));
