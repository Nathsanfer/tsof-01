import { somar, subtrair } from "../src/calculadora.js"

describe("Calculadora", () => {

    test("Deve somar dois números corretamente", () => {
        // AAA
        // Arrange (Preparar)
        const a = 2;
        const b = 3;

        // Act (Executar)
        const resultado = somar(a, b);
        
        // Assert (Verificar)
        expect(resultado).toBe(5);
    }),

    test("Deve subtrair dois números corretamente", () => {
        // AAA
        // Arrange (Preparar)
        const a = 13;
        const b = 3;

        // Act (Executar)
        const resultado = subtrair(a, b);
        
        // Assert (Verificar)
        expect(resultado).toBe(10);
    })

})
