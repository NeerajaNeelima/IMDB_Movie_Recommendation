const User = require('../Model/user');
const bcrypt = require('bcrypt');

const getUser= async (req, res) => {
    const { email, password } = req.body;
    try{
        console.log("Entered into Try");
        const user=await User.findOne({email:email});
        console.log(user);
        if (user){
            const passwordMatch = await bcrypt.compare(password.trim(), user.password.trim());
            

            if (password===user.password) {
               //Passwords match, you can proceed with whatever logic you need
              res.json({ message: 'sucess'});
            } 
            
            else {
               //Passwords do not match
               console.log('Entered Password:', password);
console.log('Stored Password:', user.password);
           res.json({ message: 'invalid password',
           enteredPassword:password,
           storedPassword:user.password });
            }
        }
        else{
            res.json({message:'user not found'})
        }
    }
    catch (e) {
        res.status(500).json({ message: 'internal server error' });
      }
  
};
const postUser =async(req,res)=>{
    const { email, password } = req.body;
    console.log("inside the post")
    try {
      const check = await User.findOne({ email: email });
  
      if (check) {
        res.json({message:'exist'});
      } else {
        const newUser = new User({ email: email, password: password });
        await newUser.save();
        res.json({message:'notexist'});
      }
    } catch (e) {
      res.json("notexist");
    }
}
const getAllUsers=async(req,res)=>{
    try {
        const users = await User.find();
        res.json(users);
      } catch (e) {
        res.status(500).json({ message: 'Internal server error' });
      }
}

module.exports = { getUser,postUser,getAllUsers };




