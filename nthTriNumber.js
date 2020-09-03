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



  function countTriangle(layers) {
    let ticks = 1;
    let count = 0; // the number of dots we've counted so far
    let layer = 0; // the current layer we're on
    let lastLayer = 1; // the number of dots we counted in the previous layer
    while (layer < layers) {
        ticks++;
        let newLayer = 0; // the number of dots we've counted so far in the current layer
        for (let i = 0; i < lastLayer; i++) {
            ticks++;
            newLayer += 2;
        }
        lastLayer = newLayer;
        count += lastLayer;
        layer++;
    }
    return {
        result: count,
        ticks: ticks
    };
}

countTriangle(2);
countTriangle(4);
countTriangle(16);