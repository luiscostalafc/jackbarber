/*export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});*/
var numeral = require('numeral');

export const {format: formatPrice} = numeral.register('locale', 'pt-BR', {
  delimiters: {
      thousands: '.',
      decimal: ','
  },

  currency: {
      symbol: 'R$'
  }
});
