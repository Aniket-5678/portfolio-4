import userModel from "../models/user.model.js"

 export  const sendEmailController = async(req, res) => {

  
try {
      
const {name, email, message} = req.body

// validation

if (!name || !email  || ! message) {
     return res.status(401).json({
        success: false,
        message: "ALL field Required for sending a message"
     })
}


const user = await new userModel({
    name,
    email,
    message
}).save()

return res.status(200).json({
    success: true,
    message: "your message send successfully",
    user
})

} catch (error) {
    console.log(error);
    res.status(500).json({
        success: false,
        message: "error while sending email"
    })
}

}