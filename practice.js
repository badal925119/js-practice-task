

// Calculate the total cost of the products in a shopping cart

const product =[
   {name:'Shampo', Price:34},
   {name:'Shirt', Price:560},
   {name:'Pant', Price:660},
   {name:'Shoes', Price:689},
]


function getShoppingTotal(products){
   let total = 0;
   for( const product of products){
      total = total + product.Price
   }
   return total;

}

const total = getShoppingTotal(product);
console.log(total);