const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const api = require("./api");

const app = new Koa();
const router = new Router();

// router
router.use("/api", api.routes());

// middleware
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

// server
app.listen(4000, () => {
  console.log("Listening to port 4000");
});
