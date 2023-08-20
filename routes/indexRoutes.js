const express = require("express");

const router = express.Router();

const postData = [
  {
    title: "Deneme Yazısı",
    subTitle: "Deniyoruz bakalım umarım çalışır",
    image:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1789&q=80",
  },
  {
    title: "Deneme Yazısı",
    subTitle: "Deniyoruz bakalım umarım çalışır",
    image:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1789&q=80",
  },
  {
    title: "Deneme Yazısı",
    subTitle: "Deniyoruz bakalım umarım çalışır",
    image:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1789&q=80",
  },
];

router.get("/", (req, res) => {
  res.render("home", { data: postData });
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.get("/post", (req, res) => {
  res.render("post");
});
router.get("/resume", (req, res) => {
  res.render("resume");
});
router.get("/signin", (req, res) => {
  res.render("signin");
});
module.exports = router;
