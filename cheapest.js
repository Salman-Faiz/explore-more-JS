const phonesList=[
    {name:'Xiaomi', camera: 50, battery: 5000, charger:'type c',color:'sky Blue',price:24000},
    {name:'samsung', camera: 80, battery: 4000, charger:'type c',color:'sky Blue',price:44000},
    {name:'iphone', camera: 100, battery: 3000, charger:'type c',color:'sky Blue',price:54000},
    {name:'vivo', camera: 40, battery: 5500, charger:'type c',color:'sky Blue',price:20000},
    {name:'oppo', camera: 45, battery: 4500, charger:'type c',color:'sky Blue',price:18000},
    {name:'motorola', camera: 45, battery: 6000, charger:'type c',color:'sky Blue',price:22000},
    {name:'Htc', camera: 45, battery: 4500, charger:'type c',color:'sky Blue',price:22000},
    {name:'LG', camera: 45, battery: 6500, charger:'type c',color:'black',price:32000}
]
function cheapestPhone(phones){
    var cheapestPrice=phones[0];
    for(let i=0; i<phones.length; i++){
        const phone =phones[i]

        if(phone.price<cheapestPrice.price){
            cheapestPrice = phone;
        }

    }
    console.log(cheapestPrice.price,'is cheapest price','details about this phone',cheapestPrice);
    return cheapestPrice;

}
cheapestPhone(phonesList);

// battery check

function batteryPower(phones){
    let highPower =phones[0];
    for(let i=0; i<phones.length; i++){
         let phone=phones[i];

         if(phone.battery>highPower.battery){
            highPower=phone;
            
         }
    }
    console.log(highPower.battery,'mah this is powerful battery','details about this phone',highPower);
    return highPower;
}
batteryPower(phonesList);

