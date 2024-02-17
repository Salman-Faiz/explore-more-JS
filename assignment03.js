function sortMaker(arr){
    if(arr[0]>0 && arr[1]>0){

        if(arr[0]=== arr[1]){
            console.log('equal');
        }
        else{
            arr.sort((a, b) => b - a);
        console.log(arr); 
        }
        // array number sorting formula ,a-b used for ascending order and b-a use for descending order
       
    }
    else if(arr[0]<0 || arr[1]<0){
        console.log('Invalid Number')
    }
}
sortMaker([22,122]);