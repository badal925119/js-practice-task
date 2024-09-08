 
// How to get High Price Phone an Arry

const phones =[
   {Name:'Samsung', Price:20000, Camera:'20mp', Color:'Black'},
   {Name:'Xaomi', Price:12000, Camera:'20mp', Color:'Black'},
   {Name:'Oppo', Price:22000, Camera:'20mp', Color:'Black'},
   {Name:'I Phone', Price:220000, Camera:'20mp', Color:'Black'},
   {Name:'Vivo', Price:12000, Camera:'20mp', Color:'Black'},
   {Name:'Walton', Price:8000, Camera:'20mp', Color:'Black'},
   {Name:'Honor', Price:26000, Camera:'20mp', Color:'Black'},
]



function getCheapPhone(phones){
   let max =phones[0];
   for(phone of phones){
   if(phone.Price > max.Price){
        max = phone
   }
   }
   return max;
}

const cheap = getCheapPhone(phones);
console.log(cheap);