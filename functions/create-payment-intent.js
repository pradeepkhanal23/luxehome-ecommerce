// Change from ESM to CommonJS syntax
// module.exports = async function (event, context) {
exports.handler = async function (event, context) {
  const parsedEvent = JSON.parse(event.body);
  console.log(parsedEvent);

  return {
    statusCode: 200,
    body: "payment-intent",
  };
};
