const router = require("express").Router();
const Controller = require("./user.controller");

router.post("/", (req, res, next) => {
    try{
        const result = Controller.create(req.body);
        res.json({data: result, msg:"Success"});
    } catch(e) {
        next(e);
    }
});

router.post("/login", async (req,res, next) => {
    try{
        const {email, password} = req.body;
        if (!email || !password) throw new Error("Email or password missing");
        const result = await Controller.login(email, password);
        res.json({data: result, msg:"Success"});
    } catch(e) {
        next(e);
    }
});

module.exports = router;