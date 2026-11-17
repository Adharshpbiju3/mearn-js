
var day = "";
var today = new Date().getDay();
console.log(today);

switch (today) {
    case 0:
        day = "sun";
        break;

    case 1:
        day = "mon";
        break;

    case 3:
        day = "tue";
        break;
    case 4:
        day = "wed";
        break;
    case 5:
        day = "thu";
        break;
    case 6:
        day = "fri";
        break;
    case 7:
        day = "sat";
        break;

    default:
        break;

}
console.log("today is ", day);



console.log("99999999999999999999999999999999999999999999999999999");

var userinput = "ijk"
switch (userinput) {
    case "apple":
        console.log(`${userinput} is a fruit`);
        break;

    case "pea":
        console.log(`${userinput} is a vegetable`);
        break;

    default:
        console.log(`${userinput} not veg nor fruits`);



}

