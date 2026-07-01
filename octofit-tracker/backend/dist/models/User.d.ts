export type User = {
    username: string;
    email: string;
    fullName: string;
    role: 'member' | 'coach' | 'captain';
    teamName: string;
    fitnessGoal: string;
    weeklyTargetMinutes: number;
};
export declare const UserModel: import("mongoose").Model<any, {}, {}, {}, any, any, any> | import("mongoose").Model<User, {}, {}, {}, import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, User>;
//# sourceMappingURL=User.d.ts.map