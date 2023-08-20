const express = require("express");

const router = express.Router();

router.get('/admin',(req.res)={
  res.render('/admin/admin')
})
router.get("/signin", (req, res) => {
  res.render("admin/signin");
});
router.get("/signup", (req, res) => {
  //res.render("admin/signup");
  res.send("Admin signup yönlendirmesi başarılıs");
});
module.exports = router;
