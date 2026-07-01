"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("../config/database");
const Activity_1 = require("../models/Activity");
const Leaderboard_1 = require("../models/Leaderboard");
const Team_1 = require("../models/Team");
const User_1 = require("../models/User");
const Workout_1 = require("../models/Workout");
dotenv_1.default.config();
async function seedDatabase() {
    console.log('Seed the octofit_db database with test data');
    await (0, database_1.connectToDatabase)();
    await Promise.all([
        User_1.UserModel.deleteMany({}),
        Team_1.TeamModel.deleteMany({}),
        Activity_1.ActivityModel.deleteMany({}),
        Leaderboard_1.LeaderboardModel.deleteMany({}),
        Workout_1.WorkoutModel.deleteMany({}),
    ]);
    await User_1.UserModel.insertMany([
        {
            username: 'maya-rivera',
            email: 'maya.rivera@example.com',
            fullName: 'Maya Rivera',
            role: 'captain',
            teamName: 'Trail Blazers',
            fitnessGoal: 'Build endurance for a spring half marathon',
            weeklyTargetMinutes: 240,
        },
        {
            username: 'owen-chen',
            email: 'owen.chen@example.com',
            fullName: 'Owen Chen',
            role: 'member',
            teamName: 'Trail Blazers',
            fitnessGoal: 'Improve strength and mobility',
            weeklyTargetMinutes: 180,
        },
        {
            username: 'nia-patel',
            email: 'nia.patel@example.com',
            fullName: 'Nia Patel',
            role: 'coach',
            teamName: 'Core Crushers',
            fitnessGoal: 'Create balanced weekly training plans',
            weeklyTargetMinutes: 210,
        },
    ]);
    await Team_1.TeamModel.insertMany([
        {
            name: 'Trail Blazers',
            city: 'Seattle',
            mascot: 'Summit Fox',
            captain: 'maya-rivera',
            memberCount: 12,
            weeklyMinutes: 2840,
        },
        {
            name: 'Core Crushers',
            city: 'Austin',
            mascot: 'Kettlebell Comet',
            captain: 'nia-patel',
            memberCount: 9,
            weeklyMinutes: 2315,
        },
    ]);
    await Activity_1.ActivityModel.insertMany([
        {
            username: 'maya-rivera',
            activityType: 'Run',
            durationMinutes: 52,
            caloriesBurned: 510,
            activityDate: new Date('2026-06-28T07:30:00.000Z'),
            notes: 'Tempo run with steady negative splits.',
        },
        {
            username: 'owen-chen',
            activityType: 'Strength Training',
            durationMinutes: 45,
            caloriesBurned: 360,
            activityDate: new Date('2026-06-29T18:15:00.000Z'),
            notes: 'Upper body circuit with mobility cooldown.',
        },
        {
            username: 'nia-patel',
            activityType: 'Cycling',
            durationMinutes: 60,
            caloriesBurned: 475,
            activityDate: new Date('2026-06-30T12:00:00.000Z'),
            notes: 'Zone 2 ride between client sessions.',
        },
    ]);
    await Leaderboard_1.LeaderboardModel.insertMany([
        { rank: 1, username: 'maya-rivera', teamName: 'Trail Blazers', totalPoints: 1420, totalMinutes: 312 },
        { rank: 2, username: 'nia-patel', teamName: 'Core Crushers', totalPoints: 1285, totalMinutes: 286 },
        { rank: 3, username: 'owen-chen', teamName: 'Trail Blazers', totalPoints: 1090, totalMinutes: 245 },
    ]);
    await Workout_1.WorkoutModel.insertMany([
        {
            title: 'Endurance Builder 5K Progression',
            focusArea: 'Cardio',
            difficulty: 'intermediate',
            durationMinutes: 42,
            recommendedForGoal: 'Build endurance for a spring half marathon',
            exercises: ['10-minute warmup jog', '4 x 5-minute tempo blocks', 'Easy cooldown'],
        },
        {
            title: 'Functional Strength Foundation',
            focusArea: 'Strength',
            difficulty: 'beginner',
            durationMinutes: 35,
            recommendedForGoal: 'Improve strength and mobility',
            exercises: ['Goblet squats', 'Incline pushups', 'Single-arm rows', 'Hip airplanes'],
        },
        {
            title: 'Coach Recovery Flow',
            focusArea: 'Mobility',
            difficulty: 'beginner',
            durationMinutes: 25,
            recommendedForGoal: 'Create balanced weekly training plans',
            exercises: ['World greatest stretch', 'Thoracic rotations', 'Hamstring flossing', 'Box breathing'],
        },
    ]);
    console.log('Seed complete: users, teams, activities, leaderboard, and workouts populated.');
    await (0, database_1.disconnectFromDatabase)();
}
seedDatabase().catch(async (error) => {
    console.error('Seed failed:', error);
    await (0, database_1.disconnectFromDatabase)();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map