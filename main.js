const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  createProxyMiddleware({
    target: "https://api.openai.com/",
    changeOrigin: true,
  })
);

app.listen(4040, () => console.log("Server is running on port 4040"));
