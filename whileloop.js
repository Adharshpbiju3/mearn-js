// reverse a number 937

reverse = 0;
num = 937;

while(num>0){
    var remainder = num%10; //7,
    reverse =(reverse*10)+remainder; //7, 73, 739
    num= Math.floor(num/10) //93, 9, 
}
console.log("reverse  of a ",num,"is",reverse);






// find whether the is paliandrom or not using while loop

//   3553


 var reverse = 0;
var num = 3553;
var tempnum = num;

while(num > 0){
     var remainder = num%10;   // 3 ,5 , 5 ,
     reverse= (reverse*10)+ remainder;  //3 ,35 355
 num= Math.floor(num/10)    //355 35 ,3 ,0

}

if(tempnum === reverse ){
    console.log(`${tempnum} is a paliandrom of tempnum`);
    
}
else {
    console.log(`${tempnum} is not a paliandrom of tempnum`);
    
}

