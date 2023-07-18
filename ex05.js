Soma = (n1, n2) => {
    Resultado = n1 + n2
    let ValorEmReais = `R$ ${Resultado.toFixed(2).toString().replace('.' ,',')}`
  
   
   console.log(ValorEmReais)
}

Soma(0.1, 0.2)

