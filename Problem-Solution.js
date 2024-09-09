

// Problem 1 Solution

function calculateMoney(ticketSale){
    if(ticketSale < 0 || typeof ticketSale !== 'number' ){
        return 'Ivalid Number'
    }
    const remainingAmount = ticketSale *120 - (500 + 8*50);
    return remainingAmount;

}
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));




// Problem 2 Solution



function cheakName(name){
    if( typeof name !== 'string'){
        return 'Invalid Name'
    }
    let lastLatter = name.slice(-1).toLocaleLowerCase;
    let cheakArry =['a', 'y', 'i', 'w', 'e', 'o', 'u'];
    let result =cheakArry.includes(lastLatter);
    return result ? 'Good Name' : 'Bad Name'
}

console.log(cheakName('Salman'));
console.log(cheakName('RAFEE'));
console.log(cheakName('jhankar'));
console.log(cheakName(1999));
console.log(cheakName(['Badal']));




// Problem 3 Solution

function deletIvalidation(array){
    if(!Array.isArray(array)){
        return 'Ivalid Array';
    }


    let namberArray=[]; 

    for(let elemant of array){
        if(typeof elemant === 'number' && isNaN (elemant) === false){
            namberArray.push(elemant);

        }
    }
    return namberArray;
}

console.log(deletIvalidation(['2', {num:2}, NaN]));
console.log(deletIvalidation([2, 4, 5]));
console.log(deletIvalidation({nam:[4,4,54,]}));





// Problem 4 Solution

function password (obj){
    if(obj.name ===undefined || obj.siteName === undefined || obj.birthYear === undefined || obj.birthYear.toString().lenght !== 4){
        return 'Invalid'
    }




    let capitalSiteName = obj.siteName[0].toUpperCase()+obj.siteName.slice(1);
    let passwordString = capitalSiteName+'#'+obj.name+'@'+obj.birthYear;
    return passwordString;
}
console.log(password({name:'badalhasan', birthYear:2004, siteName:'google'}))




// Problem 5 Solution

function monthlySaving(arr,livingCost){
    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        return 'Invalid Input'
    }

    // total icmone
    let totalIcome = 0;
    for ( let payment of arr){
        if(payment>=3000){
            let tax =payment*20/100
            totalIcome += payment -tax;
        }
        else{
            totalIcome += payment;
        }
    }
    let savings = totalIcome -livingCost
    // if(savings>=0){
    //     return savings;
    // }
    // else{
    //     return 'Earn More'
    // }
    return savings>=0 ? savings : 'earn more';

}

console.log(monthlySaving([1000, 2000, 3000,], 5400));
console.log(monthlySaving([1000, 2000, 2500,], 5000));