import { Schema, model, models } from 'mongoose';

export type Team = {
  name: string;
  city: string;
  mascot: string;
  captain: string;
  memberCount: number;
  weeklyMinutes: number;
};

const teamSchema = new Schema<Team>(
  {
    name: { type: String, required: true, unique: true, trim: true },
    city: { type: String, required: true, trim: true },
    mascot: { type: String, required: true, trim: true },
    captain: { type: String, required: true, trim: true },
    memberCount: { type: Number, required: true, min: 0 },
    weeklyMinutes: { type: Number, required: true, min: 0 },
  },
  { timestamps: true, collection: 'teams' },
);

export const TeamModel = models.Team || model<Team>('Team', teamSchema);