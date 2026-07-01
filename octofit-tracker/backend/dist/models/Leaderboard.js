"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderboardModel = void 0;
const mongoose_1 = require("mongoose");
const leaderboardSchema = new mongoose_1.Schema({
    rank: { type: Number, required: true, min: 1 },
    username: { type: String, required: true, trim: true },
    teamName: { type: String, required: true, trim: true },
    totalPoints: { type: Number, required: true, min: 0 },
    totalMinutes: { type: Number, required: true, min: 0 },
}, { timestamps: true, collection: 'leaderboard' });
exports.LeaderboardModel = mongoose_1.models.Leaderboard || (0, mongoose_1.model)('Leaderboard', leaderboardSchema);
//# sourceMappingURL=Leaderboard.js.map