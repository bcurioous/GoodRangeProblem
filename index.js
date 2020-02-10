function findGoodRangeSum(lines) {
  // console.log('lines\n',lines)
  const allLines = lines.split("\n");

  allLines.shift(); // removed blank line from first element
  allLines.pop(); // removing last element which is also blank

  //   console.log("allLines", allLines);

  const nAndMLine = allLines.shift(); // removing n-and-m line, to store only queries (M) now

  console.log("allLines", allLines);
  //   console.log("nAndMLine", nAndMLine);

  const nAndM = nAndMLine.split(" ");

  const N = +nAndM[0];
  const QUERY_LENGTH = nAndM[1];

  console.log("N", N);
  console.log("QUERY_LENGTH", QUERY_LENGTH);

  let setA = [];
  let output = [];
  for (let i = 0; i < QUERY_LENGTH; i++) {
    setA.push(+allLines[i]); // parsing to integer

    setA = setA.sort(numberComparator);

    // console.log("setA parsed :: ", setA);

    let sumRange = 0;
    setA.forEach((_, index) => {
      const minIndex = index - 1 < 0 ? 1 : setA[index - 1] + 1;
      const maxIndex = index + 1 >= setA.length ? N : setA[index + 1] - 1;
      //   console.log("sumRange before :: ", sumRange, minIndex, maxIndex);
      sumRange = sumRange + (minIndex + maxIndex);
      //   console.log("sumRange after :: ", sumRange);
    });

    output.push(sumRange);
  }
//   console.log("setA", setA);
  console.log("output", output);
}

function numberComparator(a, b) {
  return a - b;
}

const lines = `
10 10
2 
7
5
9
6
1
8
10
3
4
`;

findGoodRangeSum(lines);
