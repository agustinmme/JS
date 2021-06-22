const MILES = {
    1: 'M',
    2: 'MM',
    3: 'MMM',
}
const CENTENAS = {
    1: 'C',
    2: 'CC',
    3: 'CCC',
    4: 'CD',
    5: 'D',
    6: 'DC',
    7: 'DCC',
    8: 'DCCC',
    9: 'CM',
}
const DECENAS = {
    1: 'X',
    2: 'XX',
    3: 'XXX',
    4: 'XL',
    5: 'L',
    6: 'LX',
    7: 'LXX',
    8: 'LXXX',
    9: 'XC',
}
const UNIDADES = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
}
const valor_default= '';


function convertToRoman(num) {
  let unidad = parseInt(num%10);
   num /=10;
  const uno = UNIDADES[unidad] || valor_default;

  let decena = parseInt(num%10);
   num /=10;
  const dos = DECENAS[decena] || valor_default;

  let centena = parseInt(num%10);
   num /=10;
  const tres = CENTENAS[centena] || valor_default;

  let mil = parseInt(num%10);
   num /=10;
  const cuatro = MILES[mil] || valor_default;

 return (cuatro.concat(tres).concat(dos).concat(uno));
}

convertToRoman(83);