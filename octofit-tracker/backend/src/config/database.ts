import mongoose from 'mongoose';

export const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

export async function connectToDatabase(): Promise<typeof mongoose> {
	return mongoose.connect(mongoUri);
}

export async function disconnectFromDatabase(): Promise<void> {
	await mongoose.disconnect();
}