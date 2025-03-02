const products = require("../src/data/products.json");

exports.handler = async () => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow CORS
      "Content-Type": "application/json",
    },
    body: JSON.stringify(products),
  };
};
