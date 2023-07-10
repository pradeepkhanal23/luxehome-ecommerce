export const formatPrice = (number) => {
  const formattedNumber = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(number / 100);
  return formattedNumber;
};
