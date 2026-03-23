
// import genToken from "../config/token.js"
// import User from "../models/usermodel.js"
// export const googleAuth = async (req,res) => {
//     try{
//         const {name , email} = req.body
//         let user = await User.findOne({email})
//         if(!user){
//             user = await User.create({
//                 name,
//                 email
//             }) 
//         }
//         let token = await genToken(user._id)
//         res.cookie("token", token , {
//             http:true,
//             secure:false,
//             sameSite:"strict",
//             maxAge:7 * 24 * 60 * 60 * 1000
//         })

//         return res.status(200).json(user)
//     }catch(error){
// return res.status(500).json({message:`Google auth error ${error}`})
//     }
// }



// export const logOut = async (req,res) => {
//     try{
//         await res.clearCookie("token")
//         return res.status(200).json({message:"LogOut Successfully"})
//     }catch (error){
//            return res.status(500).json({message:`LogOut error ${error}`})
//     }
// }


// import genToken from "../config/token.js"
// import User from "../models/user.models.js"

// export const googleAuth = async (req,res) => {
//     try{
//         const {name , email} = req.body

//         let user = await User.findOne({email})

//         if(!user){
//             user = await User.create({
//                 name,
//                 email
//             }) 
//         }

//         let token = await genToken(user._id)

//         res.cookie("token", token , {
//             httpOnly:true,
//             secure:false,
//             sameSite:"strict",
//             maxAge:7 * 24 * 60 * 60 * 1000
//         })

//         return res.status(200).json(user)

//     }catch(error){
//         return res.status(500).json({message:`Google auth error ${error}`})
//     }
// }

// export const logOut = async (req,res) => {
//     try{
//         res.clearCookie("token")
//         return res.status(200).json({message:"LogOut Successfully"})
//     }catch (error){
//         return res.status(500).json({message:`LogOut error ${error}`})
//     }
// }





// import genToken from "../config/token.js";
// import User from "../models/user.models.js";

// export const googleAuth = async (req, res) => {
//     try {
//         const { name, email } = req.body;

//         if (!name || !email) {
//             return res.status(400).json({ message: "Name and Email required" });
//         }

//         let user = await User.findOne({ email });

//         if (!user) {
//             user = await User.create({
//                 name,
//                 email
//             });
//         }

//         let token = await genToken(user._id);

//         res.cookie("token", token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === "production",
//             sameSite: "lax",
//             maxAge: 7 * 24 * 60 * 60 * 1000
//         });

//         return res.status(200).json(user);

//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// export const logOut = async (req, res) => {
//     try {
//         res.clearCookie("token", {
//             httpOnly: true,
//             sameSite: "lax",
//             secure: process.env.NODE_ENV === "production"
//         });

//         return res.status(200).json({ message: "Logout Successfully" });

//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Internal Server Error" });
//     }
// };





import genToken from "../config/token.js";
import User from "../models/user.models.js";

export const googleAuth = async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "Name and Email required" });
        }

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({
                name,
                email
            });
        }

        let token = await genToken(user._id);

        // ✅ FIXED COOKIE SETTINGS
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,              // ✅ always true for production
            sameSite: "None",          // ✅ IMPORTANT for cross-domain
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json(user);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const logOut = async (req, res) => {
    try {
        // ✅ FIXED COOKIE CLEAR
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "None"
        });

        return res.status(200).json({ message: "Logout Successfully" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};