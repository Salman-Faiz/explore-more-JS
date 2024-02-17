function canPay(arr,num){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        
        sum=arr[i]+sum;
        
     
    }
    if(sum>=num){
        console.log('true');
    }
    else{
        console.log('false')
    }
}
const a= [5,8,7];
const b=20;
canPay(a,b);