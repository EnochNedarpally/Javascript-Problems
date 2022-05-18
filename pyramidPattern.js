function pyramidPattern(num){
    for(i=1;i<=num;i++){
      let padding=" ".repeat(num-i);
      let hashes="#".repeat(i*2-1)
      console.log(padding+hashes+padding)
    }
}

pyramidPattern(3);
