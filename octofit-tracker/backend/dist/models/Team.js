"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamModel = void 0;
const mongoose_1 = require("mongoose");
const teamSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    city: { type: String, required: true, trim: true },
    mascot: { type: String, required: true, trim: true },
    captain: { type: String, required: true, trim: true },
    memberCount: { type: Number, required: true, min: 0 },
    weeklyMinutes: { type: Number, required: true, min: 0 },
}, { timestamps: true, collection: 'teams' });
exports.TeamModel = mongoose_1.models.Team || (0, mongoose_1.model)('Team', teamSchema);
//# sourceMappingURL=Team.js.map