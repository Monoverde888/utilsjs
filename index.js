exports.randomNumber = function(min, max) {
    if(!min) throw new TypeError("No has puesto el minimo de numeros!")
    if(!max) throw new TypeError("No has puesto el maximo de numeros!")
    return Math.floor(Math.random() * (max - min) + min) 
  }
  