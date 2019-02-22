// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
 matrix(4)
    [[1,   2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7]]

// results[1][3]
function matrix(n) {
  const results = []; // [[1, 2, 3][ ,  ,4][ , , 5]]
  let count = 1;
  let sColumn = 0;
  let sRow = 0;
  let eColumn = n - 1;
  let eRow = n - 1;

  for (let i = 0; i < n; i += 1) {
    results.push([]);
  }

  while (sColumn <= eColumn && sRow <= eRow) {
    for (let i = sColumn; i < eColumn; i += 1) {
      results[sRow][i] = count;
      count += 1;
    }
    sRow += 1;
    for (let i = sRow; i < eRow; i += 1) {
      results[i][eColumn] = count;
      count += 1;
    }
    eColumn -= 1;
    for (let i = eColumn; eColumn >= sColumn; i -= 1) {
      results[eRow][eColumn] = count;
      count += 1;
    }
    eRow -= 1;
    for (let i = eRow; eRow >= )
  }
}

let array = [[1,2,3]

//number of arrays = n
//length of each array = n
//total numbers is n squared
// module.exports = matrix;
