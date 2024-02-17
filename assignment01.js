function cubeNumber(number){
    if(typeof number !== 'number'){
        console.log('please enter a number');
     
    }
    let result =1;
    result= number * number * number;
  console.log(result);  
    return result;
}

cubeNumber(5);