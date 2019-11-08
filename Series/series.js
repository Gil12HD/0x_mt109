const serie = "49142"
const number = 3

let digits = (serie, number) => {
    if (serie.length < number) {
        return console.log("El número es mayor a los dígitos")
    }
    for (let i = 0; i <= serie.length; i++) {
        let digit = serie.substr(i, number)
        if (digit.length >= number){
            console.log(digit)
        }else{
            return
        }
    }
}