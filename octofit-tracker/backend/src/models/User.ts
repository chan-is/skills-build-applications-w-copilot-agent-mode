import { Schema, model, models } from 'mongoose';

export type User = {
  username: string;
  email: string;
  fullName: string;
  role: 'member' | 'coach' | 'captain';
  teamName: string;
  fitnessGoal: string;
  weeklyTargetMinutes: number;
};

const userSchema = new Schema<User>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    fullName: { type: String, required: true, trim: true },
    role: { type: String, required: true, enum: ['member', 'coach', 'captain'] },
    teamName: { type: String, required: true, trim: true },
    fitnessGoal: { type: String, required: true, trim: true },
    weeklyTargetMinutes: { type: Number, required: true, min: 0 },
  },
  { timestamps: true, collection: 'users' },
);

export const UserModel = models.User || model<User>('User', userSchema);