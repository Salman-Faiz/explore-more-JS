const shoppinglist=[
    { name:"shirt", price:1000, color:'black',quantity:4},
    { name:"pent" ,price:600, color:'black',quantity:6},
    { name:"shoes" ,price:2500, color:'black',quantity:3},
    { name:"belt" ,price:800, color:'black',quantity:5}

]
function shoppingCart(products){
    let sum=0;
    for(let i=0; i<products.length; i++){
        const totalProduct=products[i];
        let PriceOfEachProduct=totalProduct.price *totalProduct.quantity;
        sum=sum + PriceOfEachProduct;

    }
    console.log(sum);
    return sum;
}
shoppingCart(shoppinglist);