import Contact from "../models/contactModel.js";
const createContact=async(req,res)=>{
    const {name,email,inquiry} = req.body
    try {
        const contact = new Contact({
            name,
            email,
            inquiry
        })
        await contact.save()
        res.status(201).json({success:true,message:'Inquiry sent successfully!',data:contact})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"something went wrong!"})
    }
}

const getContact = async(req,res)=>{
    try {
        const contacts =await Contact.find({})
        if(!contacts){
            return res.status(400).json({success:false,message:"No Inquiry contacts yet"})
        }
        res.status(200).json({success:true,message:'Contacts fetched successfully!',data:contacts})
    } catch (error) {
      console.log(error) 
      res.status(500).json({success:false, message:'Server error'})
    }
}

export {getContact,createContact}