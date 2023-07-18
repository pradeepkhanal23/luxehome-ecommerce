export const formatPrice = (number) => {
  const formattedNumber = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(number / 100);
  return formattedNumber;
};

export const getUniqueValue = (data, type) => {
  let unique = data.map((item) => item[type]);

  if (type === "colors") {
    unique = unique.flat();
  }

  return ["all", ...new Set(unique)];
};
