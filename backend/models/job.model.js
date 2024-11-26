import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    requirements:{
        type: [String],
    },
    description: {
        type: String,
        required: true
    },
    position:{
        type: Number,
        required: true
    },
    experienceLevel: {
        type: Number,
        required: true
    },
    created_by: {   
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    applications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application',
    }],
    // status: {
    //     type: String,
    //     enum: ['active', 'closed'],
    //     default: 'active'
    // }
},{timestamps:true});

export const Job = mongoose.model('Job', jobSchema);