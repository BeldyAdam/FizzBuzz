const lista = [1, 5, 15, 30, 178, 3128, 3];
function fizzBuzzListaval(lista){
    for (let index = 0; index < lista.length; index++) {
        if(lista[index] % 3 == 0 || lista[index] % 5 == 0){
            if(lista[index] % 15 == 0){
                lista[index] = "FizzBuzz"
            }else if(lista[index] % 3 == 0){
                lista[index] = "Fizz"
            }else{
                lista[index] = "Buzz"
            }
            
        }
        
    }
    return lista;
}
let ujlista = fizzBuzzListaval(lista);

function fizzBuzz(szam){
        if(szam % 3 == 0 || szam % 5 == 0){
            if(szam % 15 == 0){
                return "FizzBuzz";
            }else if(szam % 3 == 0){
                return "Fizz";
            }else{
                return "Buzz";
            }
        }else{
        return szam;
        }
}

fizzBuzz(5);