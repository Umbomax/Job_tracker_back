import mongoose, { Schema, Document } from 'mongoose';

interface IJob extends Document {
    company: string;
    position: string;
    salaryRange: string;
    status: string;
    notes: string;
}

const JobSchema: Schema = new Schema({
    company: { type: String, required: true },
    position: { type: String, required: true },
    salaryRange: { type: String },
    status: { type: String, required: true, enum: ['Pending', 'Accepted', 'Rejected'] },
    notes: { type: String },
}, { timestamps: true });

export default mongoose.model<IJob>('Job', JobSchema);
