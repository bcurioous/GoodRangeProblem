function findGoodRangeSum(lines) {
  // console.log('lines\n',lines)
  const allLines = lines.split("\n");

  allLines.shift(); // removed blank line from first element
  allLines.pop(); // removing last element which is also blank

  console.log("allLines", allLines);

  const nAndMLine = allLines.shift(); // removing n-and-m line, to store only queries (M) now

  console.log("allLines", allLines);
  console.log("nAndMLine", nAndMLine);

  const nAndM = nAndMLine.split(" ");

  const N = nAndM[0];
  const QUERY_LENGTH = nAndM[1];

  console.log("N", N);
  console.log("QUERY_LENGTH", QUERY_LENGTH);

  for(i=0; i < QUERY_LENGTH; i++){
    allLines[0];
  }
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
