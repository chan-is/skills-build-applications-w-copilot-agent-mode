export type Team = {
    name: string;
    city: string;
    mascot: string;
    captain: string;
    memberCount: number;
    weeklyMinutes: number;
};
export declare const TeamModel: import("mongoose").Model<any, {}, {}, {}, any, any, any> | import("mongoose").Model<Team, {}, {}, {}, import("mongoose").Document<unknown, {}, Team, {}, import("mongoose").DefaultSchemaOptions> & Team & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, Team>;
//# sourceMappingURL=Team.d.ts.map