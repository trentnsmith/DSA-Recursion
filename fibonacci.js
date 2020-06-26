function fibonacci(n) {
    let seq = [1, 1]
    if (n===0) {
      console.log(0);
      return;
    }
    if(n===1){
      console.log(1)
      return;
    }
    if(n===2){
      console.log(seq)
      return;
    }
    for (let i = 2; i <= n; i++) {
      seq.push(seq[i-1]+seq[i-2])
    }
    console.log(seq)
  }
  
  fibonacci(9)