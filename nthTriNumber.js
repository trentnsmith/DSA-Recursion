function nthTriNum(x, y) {
    if (y === 0 || y === x - 1) {
      return 1;
    } else {
      return (
        nthTriNum(x - 1, y) +
        nthTriNum(x - 1, y - 1)
      );
    }
  }
  
  console.log(nthTriNum(5, 3));