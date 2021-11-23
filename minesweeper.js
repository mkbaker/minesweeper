//
// Normally I'd delete the console.logs, but I thought I'd leave them in to "show my work" :)
//

export const annotate = (input) => {
  // handles empty input/no rows
  if (input.length == 0) {
    return input
  }
  // get board dimensions
  const boardWidth = input[0].length // number of columns
  const boardHeight = input.length // number of rows
  
  // handles no columns
  if (boardWidth == 0) {
    return input
  }

  let result = []
  for (let x = 0; x < boardHeight; x++) { 
    let row = input[x];
    let parsedRow = ''
    // console.log('input[x]: ', row)
    row = row.split('')
    // console.log('row: ', row)
    for (let y = 0; y < boardWidth; y++) {
      const cell = input[x][y];
      // console.log('x, y', x, y)
      // console.log('cell: ', cell)
      if (cell == '*') {
        parsedRow = parsedRow + '*'
      } else {
        let adjacentTiles = []
        // console.log('boardHeight: ', boardHeight)
        // console.log('input[x+1]:', input[x+1])`
        if (boardHeight === 1) { // handles single row
          adjacentTiles.push(input[x][y -1] ? input[x][y - 1] : '', 
          input[x][y + 1] ? input[x][y + 1] : '',)
        } else if (x === 0) { // first row
          adjacentTiles.push(input[x][y -1] ? input[x][y - 1] : '', 
          input[x][y + 1] ? input[x][y + 1] : '', 
          input[x+1][y - 1] ? input[x+1][y - 1] : '', 
          input[x + 1][y],
          input[x+1][y+1] ? input[x+1][y+1] : '')
        } else if (x > 0 && x < boardHeight - 1) { // middle rows
          adjacentTiles.push(
            input[x - 1][y -1] ? input[x - 1][y - 1] : '',
            input[x - 1][y] ? input[x - 1][y] : '',
            input[x - 1][y + 1] ? input[x - 1][y + 1] : '',
            input[x][y - 1] ? input[x][y - 1] : '',
            input[x][y + 1] ? input[x][y + 1] : '', 
            input[x + 1][y - 1] ? input[x+1][y - 1] : '', 
            input[x + 1][y],
            input[x + 1][y + 1] ? input[x+1][y+1] : '')
        } else if (x === boardHeight - 1) { // last row
          adjacentTiles.push(
            input[x - 1][y -1] ? input[x - 1][y - 1] : '',
            input[x - 1][y] ? input[x - 1][y] : '',
            input[x - 1][y + 1] ? input[x - 1][y + 1] : '',
            input[x][y - 1] ? input[x][y - 1] : '',
            input[x][y + 1] ? input[x][y + 1] : '')
        }
        let count = 0
        // console.log('adjacentTiles:', adjacentTiles)
        adjacentTiles.forEach(tile => {
          if (tile == '*') { count ++ }
        })
        // console.log('count: ', count)
        parsedRow = parsedRow + count.toString()
      }

       
    }
    // console.log('parsedRow: ', parsedRow)
    result.push(parsedRow.replace(/0/g, ' '))
  }
  // console.log('result: ', result)
  return result
};

