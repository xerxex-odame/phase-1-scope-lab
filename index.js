var customerName = 'lordia';
const leastFavoriteCustomer = 'lordina';


function upperCaseCustomerName(){

  return customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not lordia';
  
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe lordia';
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'cindy';
}

console.log(changeLeastFavoriteCustomer());
