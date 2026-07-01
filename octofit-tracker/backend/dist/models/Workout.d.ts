export type Workout = {
    title: string;
    focusArea: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    durationMinutes: number;
    recommendedForGoal: string;
    exercises: string[];
};
export declare const WorkoutModel: import("mongoose").Model<any, {}, {}, {}, any, any, any> | import("mongoose").Model<Workout, {}, {}, {}, import("mongoose").Document<unknown, {}, Workout, {}, import("mongoose").DefaultSchemaOptions> & Workout & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, Workout>;
//# sourceMappingURL=Workout.d.ts.map