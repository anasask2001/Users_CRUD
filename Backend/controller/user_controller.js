import { User } from "../models/user_schema.js";
// user creation
export const createuser = async (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    return res
      .status(400)
      .json({ status: "failed", message: "Fileds are required" });
  }

  const existinguser = await User.findOne({ email });
  if (existinguser) {
    return res
      .status(400)
      .json({ status: "failed", message: "Email must be unique" });
  }
  const user = new User({
    name,
    email,
    age,
  });
  await user.save();
  res
    .status(201)
    .json({
      status: "success",
      message: "User Created Sucessfully",
      user: user,
    });
};
// getting users
export const getuser = async (req, res) => {
  const { id } = req.query;
  let user;

  if (!id) {
    user = await User.find({isDelete:true}).lean();
  } else {
    user = await User.findById(id,{isDelete:true}).lean();
  }

  if (!user) {
    return res.status(404).json({
      status: "failed",
      message: "User not found",
    });
  }

  return res.status(200).json({
    status: "success",
    message: "User fetched successfully",
    data: user,
  });
};


// updating users
export const updateuser = async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
  
    if (!id) {
      return res.status(400).json({
        status: "failed",
        message: "User ID is required to update",
      });
    }
    if (!name && !email && !age) {
      return res.status(400).json({
        status: "failed",
        message: "At least one field (name, email, age) is required to update",
      });
    }
      const user = await User.findById(id);
  
      if (!user) {
        return res.status(404).json({
          status: "failed",
          message: "User not found",
        });
      }
  
      if (name) user.name = name;
      if (email) user.email = email;
      if (age) user.age = age;

      await user.save();
  
      return res.status(200).json({
        status: "success",
        message: "User updated successfully",
        data: user,
      });
  
  };

// deleting users
  export const deleteuser = async(req,res)=>{
    const { id } = req.params;
    const userDelete=await User.findByIdAndUpdate(id,{isDelete:false},{new:true})
    if(!userDelete){
        return res.status(404).json({
            status:'failed',
            message:"user Not fond"
        })
    }
    return res.status(200).json({
        status:'success',
        message:'user delete successfull'
    })
  }