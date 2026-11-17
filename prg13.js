// find the number is prime or not 
// 13


var count =0;
var num = 100000000000;

for (var i=1; i<= num; i++){
    if(num%i === 0){
        count = count+1;
    }
    console.log(i);
    
}
if(count === 2){
    console.log('the given number is prime');
    
}
else{
    
    console.log('the given number is not prime');
    }
