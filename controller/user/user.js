const { user } = require("../../model/");

// 로그인 페이지 렌더
exports.getSignin = function(req,res) {
    res.render("user/signIn");
}
exports.postSigninFlag = async function(req,res) {
    let result = await user.findAll({where:{user_id:req.body.user_id}});
    if (result.length>0) res.send(true)
    else res.send(false);
}

// 회원가입 페이지 렌더
exports.getSignup = function(req,res) {
    res.render("user/signUp");
}

// 아이디 중복 확인
exports.postIdCheck = async function(req,res) {
    // let data = {user_id: req.body.user_id};
    let result = await user.findAll({where:{user_id: req.body.user_id}});
    if (result.length>0) res.send(false)
    else res.send(true);
}

// 회원가입 완료
exports.postSignupFlag = async function(req,res) {
    if (req.body.false) res.send("none")
    else if (req.body.user_id) {
        let result = await user.findAll({where:{user_id: req.body.user_id}});
        let data = {
            user_id: req.body.user_id,
            user_pw: req.body.user_pw,
            user_name: req.body.user_name,
            user_phone: req.body.user_phone
        }
        if (result.length>0) {
            res.send(false);
        } else {
            await user.create(data);
            res.send(true);
        }
    }
}