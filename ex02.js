function CalculoTriangulo (a, b, c) {
    if (a === b && b === c) 
        console.log('Triangulo Equilátero')
           else if (a === b || b === c || c === a) 
             console.log("Triangulo Isósceles")
              else 
                console.log("Triângulo Escaleno")
            
}

/* CalculoTriangulo(1, 3, 0)
CalculoTriangulo(3.3, 4.3, 4.3)
CalculoTriangulo(3.3, 3.3, 3.3)

CalculoTriangulo =  (a, b, c) => {
    if (a === b && b === c) 
        console.log('Triangulo Equilátero')
           else if (a === b || b === c || c === a) 
             console.log("Triangulo Isósceles")
              else 
                console.log("Triângulo Escaleno")
            
}

CalculoTriangulo(1, 3, 0)
CalculoTriangulo(3.3, 4.3, 4.3)
CalculoTriangulo(3.3, 3.3, 3.3)
*/