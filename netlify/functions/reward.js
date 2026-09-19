exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }
  const userId = event.queryStringParameters?.userId || "guest";
  return {
    statusCode: 200,
    headers: {...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ ok: true, reward: 0.05, userId: userId })
  };
};
