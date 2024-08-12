function customMap(array, callback){
    const result = [];
    for (let i=0;i<array.length; i++){
        result.push(callback(array[i],i,array));
    }
    return result;
}
//usage example
const numbers=[1,2,3,4,5];
const doubled=customMap(number ,num=>num *2);
console.log(double);