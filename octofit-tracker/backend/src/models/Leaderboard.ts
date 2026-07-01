import { Schema, model, models } from 'mongoose';

export type LeaderboardEntry = {
  rank: number;
  username: string;
  teamName: string;
  totalPoints: number;
  totalMinutes: number;
};

const leaderboardSchema = new Schema<LeaderboardEntry>(
  {
    rank: { type: Number, required: true, min: 1 },
    username: { type: String, required: true, trim: true },
    teamName: { type: String, required: true, trim: true },
    totalPoints: { type: Number, required: true, min: 0 },
    totalMinutes: { type: Number, required: true, min: 0 },
  },
  { timestamps: true, collection: 'leaderboard' },
);

export const LeaderboardModel = models.Leaderboard || model<LeaderboardEntry>('Leaderboard', leaderboardSchema);