
const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => { res.sendFile("index.html") });

router.get("/farmer-account", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/farmerRegister.html"));
});
router.get("/shopper-account", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/shopperRegister.html"));
});
router.get("/customer-account", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/customerRegister.html"));
});

router.get("/farmer-product", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/farmerProduct.html"));
});
module.exports = router;
