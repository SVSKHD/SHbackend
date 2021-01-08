const express = require('express');
const router = express.Router();
const { 
    signup, 
    signin, 
    signout, 
    requireSignin , 
    forgotPassword , 
    resetPassword ,
    preSignup
} = require('../controllers/auth');

// validators
const { runValidation } = require('../validators');
const { 
    userSignupValidator, 
    userSigninValidator,
    forgotPasswordValidator,
    resetPasswordValidator  
} = require('../validators/auth');

router.post("/pre-signup" , userSigninValidator , runValidation , preSignup )
router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', userSigninValidator, runValidation, signin);
router.get('/signout', signout);
router.put("/forgot-password" , forgotPasswordValidator , runValidation , forgotPassword) 

module.exports = router;