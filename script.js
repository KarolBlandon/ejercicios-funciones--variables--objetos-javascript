function perimetro(radio) {
return 2 * Math.PI*radio;
}
console.log(perimetro(6));



(function(radio){
    var area=Math.PI*radio*radio;
    console.log(area);
})(8);


(function perimetro(lado) {
    var perimetro=4 * lado
    console.log(perimetro);
})(4);

(function(lado){
    var area= lado*lado;
    console.log(area);
})(5);


console.log(Math.hypot(15, 5));
