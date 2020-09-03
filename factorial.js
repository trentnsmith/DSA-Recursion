function factorial(n){
    let result = 1
    for(let i = n; i > 0; i--) {
      result = result * i
    }
    console.log(result)
  }
  
  factorial(5)

  function findMin(array){
    let min = array[0], ticks = 1;
    for (let i = 1; i < array.length; i++) {
        ticks++;
        if (array[i] < min) {
            min = array[i];
        }
    }
    return {
        result: min,
        ticks: ticks
    };
}

findMin([1,2,3]);
findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);