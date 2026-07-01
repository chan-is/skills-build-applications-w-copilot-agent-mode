import { Schema, model, models } from 'mongoose';

export type Activity = {
  username: string;
  activityType: string;
  durationMinutes: number;
  caloriesBurned: number;
  activityDate: Date;
  notes: string;
};

const activitySchema = new Schema<Activity>(
  {
    username: { type: String, required: true, trim: true },
    activityType: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 0 },
    caloriesBurned: { type: Number, required: true, min: 0 },
    activityDate: { type: Date, required: true },
    notes: { type: String, required: true, trim: true },
  },
  { timestamps: true, collection: 'activities' },
);

export const ActivityModel = models.Activity || model<Activity>('Activity', activitySchema);