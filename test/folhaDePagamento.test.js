import { somaHorasExtras, calculaDescontos } from '../index';

describe('first', () => {
  test('A soma de 1000 com 500 deve ser 1500', () => {
    const retornado = somaHorasExtras(1000, 500);
    const esperado = 1500;

    expect(retornado).toBe(esperado);
  });
});

describe('second', () => {
  test('O desconto de 500 no salario de  1000 deve ser 500', () => {
    const retornado = calculaDescontos(1000, 500);
    const esperado = 500;

    expect(retornado).toBe(esperado);
  });
});
