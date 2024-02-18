const myNumbers =[12,13,14,15,16,17,18,19,11];
function showNumbers(numbers){

    for(const number of numbers){
        console.log(number);
    }
}
// showNumbers(myNumbers);

const myProducts =[
    {id :1,name:'xiaomi',price:25000,color:'red'},
    {id :2,name:'xiaomi phone',price:25000,color:'red'},
    {id :3,name:'xiaomi laptop',price:25000,color:'red'},
    {id :4,name:'xiaomi earphone',price:25000,color:'black'},
    {id :5,name:'xiaomi airbuds',price:25000,color:'blue'},
    {id :6,name:'xiaomi tab',price:25000,color:'red'},
]

function productList(products,search){
    let matched=[];
    for(const product of products){
        if(product.color.includes(search)){
           
            matched.push(product); 
            
        }
       
    }
    console.log(matched);
    return matched;
}
productList(myProducts,'red');
