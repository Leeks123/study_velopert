require("dotenv").config();
const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const mongoose = require("mongoose");

// import Koa from "koa";
// import Router from "koa-router";
// import bodyParser from "koa-bodyparser";
// import mongoose from "mongoose";

const api = require("./api");
const createFakeData = require("./createFakeData");

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error(e);
  });

const app = new Koa();
const router = new Router();

// router
router.use("/api", api.routes());

// middleware
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

// server
const port = PORT || 4000;
app.listen(port, () => {
  console.log("Listening to port %d", port);
});
