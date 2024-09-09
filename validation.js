
// Number validation function

function multiply(number1, number2){
    if(typeof number1 !== 'number' || typeof number2 !== 'number'){
        return 'Please Provied the Number'
    }
    const total=number1*number2;
    return total;
}

const multi = multiply(3,4)
console.log(multi);


// string validation function

function fullName(first,secend){
    if(typeof first !== 'string' || typeof secend !== 'string' ){
        return 'Please provied the only string'
    }
    const full =first+ '' +secend;
    return full;

}

const name = fullName('Badal', 'Hasan');
console.log(name);



// product price validation

function getPrice(product){
    if(typeof product !== 'object'){
        return 'Please Provied the object'
    }
    const price = product.price
    return price;
}

const products = getPrice({name:'shirt', price: 43, color: 'blue'});
console.log(products);



// typeof arry validation 

function getArry(arry){
    if(Array.isArray(arry) === false){
        return 'Please provied the arry'
    }
    const arr = arry[2];
    return arr;
}

const nmbr =getArry([3, 4, 5, 6, 7]);
console.log(nmbr);