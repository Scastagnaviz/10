function getRoot(req, res) {
    if (req.isAuthenticated()) {
        res.redirect('profile')
    }
    else {
        res.render('main')
    }
   
}

function getLogin(req, res) {
    if (req.isAuthenticated()) {
        res.redirect('profile')
    }
    else {
        res.render('login');
    }
}

function getSignup(req, res) {
    res.render('signup')

}

function postLogin(req, res) {
    if (req.isAuthenticated()) {
        res.redirect('profile')
    }
    else {
        res.render('login');
    }
}

function postSignup(req, res) {
   if (req.isAuthenticated()) {
        res.redirect('profile')
    }
   else {
        res.render('login');
    }
}

function getProfile (req, res) {
    if (req.isAuthenticated()) {
        let user = req.user;
        res.render('profileUser', { user: user, isUser:true })
    } else {
        res.redirect('login')
    }
}

function getFailLogin(req, res) {
    console.log('error de login');
    res.render('login-error', {})
}

function getFailSignup(req, res) {
    console.log('error de signup {aca?]');
    res.render('signup-error', {})
}

function getLogout(req, res) {
    req.logout((err) => {
        if (!err) {
            res.render('main')
        }
    });
}

function failRoute(req, res) {
    res.status(404).render('routing-error', {});
}

function checkAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/login");
    }
}

function getTwitterPage(req,res){
    res.render('twitterPage');
}

module.exports = {
    getRoot,
    getLogin,
    postLogin,
    getFailLogin,
    getLogout,
    failRoute,
    getSignup,
    postSignup,
    getFailSignup,
    checkAuthentication,
    getProfile,
    getTwitterPage
}
