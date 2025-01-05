const shopping=["bread","milk","cheese","human","noodles"];

console.log(shopping.length)
console.log(shopping[2])
shopping[0]="karahi";
console.log(shopping);
//
const arr=Array.from({length:5},(_, i)=>i*2)
console.log(arr);
//slicing
const arr1=[10,20,30,40,50];
const slice = arr1.slice(1,4)
console.log(slice)
//splicing
const arr2=[1,2,3,4,5]
const spliced=arr2.splice(2,2,3,3,4,5)
console.log(spliced)
console.log(arr2)
//Mapping
const arr3 =[1,2,3]
const mapped =arr3.map(x=>x*3);
console.log(mapped)
//Filtering
const arr4 = [4,5,6,7,45,46,47];
const filtered = arr.filter(x=>x>20);
console.log(filtered);
