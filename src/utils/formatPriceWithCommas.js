const formatPriceWithCommas = amount => {
  const formattedPrice = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return formattedPrice + '원';
};

export default formatPriceWithCommas;
