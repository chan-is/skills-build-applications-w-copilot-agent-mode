"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    fullName: { type: String, required: true, trim: true },
    role: { type: String, required: true, enum: ['member', 'coach', 'captain'] },
    teamName: { type: String, required: true, trim: true },
    fitnessGoal: { type: String, required: true, trim: true },
    weeklyTargetMinutes: { type: Number, required: true, min: 0 },
}, { timestamps: true, collection: 'users' });
exports.UserModel = mongoose_1.models.User || (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=User.js.map