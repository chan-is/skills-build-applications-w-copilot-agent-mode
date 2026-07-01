export type LeaderboardEntry = {
    rank: number;
    username: string;
    teamName: string;
    totalPoints: number;
    totalMinutes: number;
};
export declare const LeaderboardModel: import("mongoose").Model<any, {}, {}, {}, any, any, any> | import("mongoose").Model<LeaderboardEntry, {}, {}, {}, import("mongoose").Document<unknown, {}, LeaderboardEntry, {}, import("mongoose").DefaultSchemaOptions> & LeaderboardEntry & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, LeaderboardEntry>;
//# sourceMappingURL=Leaderboard.d.ts.map