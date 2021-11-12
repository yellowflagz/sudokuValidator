// Accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise.

function validSolution(board) {
  let sudokuNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Returns true if board includes 0
  function includesZero() {
    for (element of board) {
      if (element.includes(0)) return true;
    }
    return false;
  }
  // Gets an iterable array (finalArray) of all the grids (3x3 squares) inside the board

  function getGrids() {
    let grid1 = [];
    let grid2 = [];
    let grid3 = [];
    let finalArray = [];

    for (row of board) {
      let myArray1 = [];
      let myArray2 = [];
      let myArray3 = [];

      for (item of row) {
        if (row.indexOf(item) <= 2) {
          myArray1.push(item);
        }

        if (row.indexOf(item) > 2 && row.indexOf(item) <= 5) {
          myArray2.push(item);
        }

        if (row.indexOf(item) > 5) {
          myArray3.push(item);
        }
      }

      grid1.push(myArray1);
      grid2.push(myArray2);
      grid3.push(myArray3);
    }

    let i = 0;

    let newArr = [];

    for (element of grid1) {
      if (i <= 2) {
        newArr = newArr.concat(element);
        if (newArr.length == 9) {
          finalArray.push(newArr);
          newArr = [];
        }
      } else if (i > 2 && i <= 5) {
        newArr = newArr.concat(element);
        if (newArr.length == 9) {
          finalArray.push(newArr);
          newArr = [];
        }
      } else if (i > 5) {
        newArr = newArr.concat(element);
        if (newArr.length == 9) {
          finalArray.push(newArr);
          newArr = [];
        }
      }
      i++;
    }

    for (element of grid2) {
      if (i <= 2) {
        newArr = newArr.concat(element);
        if (newArr.length == 9) {
          finalArray.push(newArr);
          newArr = [];
        }
      } else if (i > 2 && i <= 5) {
        newArr = newArr.concat(element);

        if (newArr.length == 9) {
          finalArray.push(newArr);
          newArr = [];
        }
      } else if (i > 5) {
        newArr = newArr.concat(element);
        if (newArr.length == 9) {
          finalArray.push(newArr);
          newArr = [];
        }
      }
      i++;
    }

    for (element of grid3) {
      if (i <= 2) {
        newArr = newArr.concat(element);
        if (newArr.length == 9) {
          finalArray.push(newArr);
          newArr = [];
        }
      } else if (i > 2 && i <= 5) {
        newArr = newArr.concat(element);

        if (newArr.length == 9) {
          finalArray.push(newArr);
          newArr = [];
        }
      } else if (i > 5) {
        newArr = newArr.concat(element);

        if (newArr.length == 9) {
          finalArray.push(newArr);
          newArr = [];
        }
      }
      i++;
    }

    return finalArray;
  }
  // Gets an iterable array (finalArray) of all the columns inside the board
  function getColumns() {
    let finalArray = [];

    for (let i = 0; i < 9; i++) {
      let myArr = [];
      for (element of board) {
        myArr.push(element[(0, i)]);
      }
      finalArray.push(myArr);
    }
    return finalArray;
  }
  // Checks if 2 arrays are equal
  function checkArrayEquality(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  // Using checkArrayEquality() we check if grids are valid (checking against sudokuNums)
  function checkGrids() {
    for (element of getGrids()) {
      if (checkArrayEquality(element, sudokuNums) == false) return false;
    }
    return true;
  }
  // Using checkArrayEquality() we check if rows are valid (checking against sudokuNums)
  function checkRows() {
    for (element of board) {
      if (checkArrayEquality(element, sudokuNums) == false) return false;
    }
    return true;
  }
  // Using checkArrayEquality() we check if columns are valid (checking against sudokuNums)
  function checkColumns() {
    for (element of getGrids()) {
      if (checkArrayEquality(element, sudokuNums) == false) return false;
    }
    return true;
  }

  // Using previous functions to determine if either its a valid solution or not :)
  if (includesZero() === true) {
    return false;
  } else if (
    checkGrids() === true &&
    checkColumns() === true &&
    checkRows() === true
  ) {
    return true;
  } else {
    return false;
  }
}
