import { Schema, model, models } from 'mongoose';

export type Workout = {
  title: string;
  focusArea: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  durationMinutes: number;
  recommendedForGoal: string;
  exercises: string[];
};

const workoutSchema = new Schema<Workout>(
  {
    title: { type: String, required: true, trim: true },
    focusArea: { type: String, required: true, trim: true },
    difficulty: { type: String, required: true, enum: ['beginner', 'intermediate', 'advanced'] },
    durationMinutes: { type: Number, required: true, min: 0 },
    recommendedForGoal: { type: String, required: true, trim: true },
    exercises: { type: [String], required: true },
  },
  { timestamps: true, collection: 'workouts' },
);

export const WorkoutModel = models.Workout || model<Workout>('Workout', workoutSchema);