const ticketType1 = 100;
const ticketType2 = 90;
const ticketType3 = 70;
function discountTicket(tickets){
    let ticketPrice=1;
    let ticketPrice1=1;
    let ticketPrice2=1;
    let ticketPrice3=0;

    if(tickets>=1 && tickets <=100){
        ticketPrice=tickets * ticketType1;
        console.log(ticketPrice);
    }
    else if(tickets>100 && tickets<=200){
        ticketPrice1= 100 *ticketType1;
       let restTickets=tickets-100;
       let restTicketsPrice=restTickets *90;
        ticketPrice2=restTickets* ticketType2;
        ticketPrice3=ticketPrice1 + ticketPrice2;
        console.log(ticketPrice3);
    }
    else if(tickets>200 && tickets<=1000){
        ticketPrice1= 100 *ticketType1;
        ticketPrice2= 100 *ticketType2;
       let restTickets=tickets-200;
       
       let restTicketsPrice= restTickets * ticketType3;
       let finalPrice=restTicketsPrice+ticketPrice1+ticketPrice2;
       
        console.log(finalPrice);
}}
discountTicket(220);