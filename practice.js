

// Calculate the total cost of the products in a shopping cart

const product =[
   {name:'Shampo', Price:34, Quantity:5},
   {name:'Shirt', Price:560, Quantity:3},
   {name:'Pant', Price:660, Quantity:6},
   {name:'Shoes', Price:689, Quantity:4},
]


function getShoppingTotal(products){
   let total = 0;
   for( const product of products){
      const totalCost =product.Price * product.Quantity
      total = total + totalCost;
   }
   return total;

}

const total = getShoppingTotal(product);
console.log(total);