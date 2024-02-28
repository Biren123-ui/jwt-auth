const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/smoothies", (req, res) => {
  res.render("smoothies");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/set-cookies",(req,res)=>
{
  // res.setHeader("set-cookie","newuser=true")
  res.cookie("username",true,{maxAge:1000*60*60*24,secure:true,httpOnly:true})
  res.cookie("email",true,{httpOnly:true})
  res.send("yu got the cookies")
})
router.get("/read-cookies",(req,res)=>
{  
  const cookies=req.cookies
  console.log(cookies);
  res.json({cookies})
})

module.exports = router;
