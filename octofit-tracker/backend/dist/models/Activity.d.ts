export type Activity = {
    username: string;
    activityType: string;
    durationMinutes: number;
    caloriesBurned: number;
    activityDate: Date;
    notes: string;
};
export declare const ActivityModel: import("mongoose").Model<any, {}, {}, {}, any, any, any> | import("mongoose").Model<Activity, {}, {}, {}, import("mongoose").Document<unknown, {}, Activity, {}, import("mongoose").DefaultSchemaOptions> & Activity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, Activity>;
//# sourceMappingURL=Activity.d.ts.map