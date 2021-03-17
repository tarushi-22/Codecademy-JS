const Kelvin=prompt(" Type Weather in Kelvin");
//asking the temp to the user
let celsius=Kelvin-273;
//converting temp in celsius
let Faren= ((celsius*9)/5)+32;
//converting temp in farenheit

Faren= Math.floor(Faren);
//outputs
console.log(`temp in kelvin ${Kelvin}`);
console.log(`temp in celsius ${celsius}`);
console.log(`temp in farenheit ${Faren}`);
