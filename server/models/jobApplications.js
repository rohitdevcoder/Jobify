import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    userId:{
        type:String,
        ref:'User',
        required : true
    },
    companyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required : true
    },
    jobId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required : true
    },
    status:{
        type:String,
        default:'pending'
    },
    date:{
        type:Number,
        required:true
    }
})

const JobApplication = mongoose.model('JobApplication',applicationSchema)

export default JobApplication