MontanteDaAplicacao1 = (CapitalInicial, TaxaDejuros, TempoDeAplicacao) => {
    JurosSimples = CapitalInicial + (CapitalInicial * TaxaDejuros * TempoDeAplicacao)
    Resultado = JurosSimples.toFixed(2).toString().replace(".",",")
    console.log(Resultado)
}

MontanteDaAplicacao1(1500, 8, 36)

MontanteDaAplicacao2 = (CapitalInicial, TaxaDejuros, TempoDeAplicacao) => {
    JurosCompostos = CapitalInicial * (1 + TaxaDejuros) ** TempoDeAplicacao
    Resultado = JurosCompostos.toFixed(2).toString().replace(".",",")
    console.log(Resultado)
}

MontanteDaAplicacao1(1500, 8/100, 36)
MontanteDaAplicacao2(1500, 8/100, 36)