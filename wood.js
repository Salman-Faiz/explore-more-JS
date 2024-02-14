const chair =3;
const table =10;
const bed =50;
function woodRequired(item1,item2,item3){
    let chairRequired = item1 * chair;
    let tableRequired = item2 * table;
    let bedRequired = item3 * bed;

    console.log('wood requires for chair',chairRequired,'cft');
    console.log('wood requires for table',tableRequired,'cft');
    console.log('wood requires for bed',bedRequired,'cft');
}
woodRequired(10,2,2);