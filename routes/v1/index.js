const router = require("express").Router();
const productRoute = require("./product.route");

router.use("/product", productRoute);
module.exports = router;
