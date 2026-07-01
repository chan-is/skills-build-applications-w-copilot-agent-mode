"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const Activity_1 = require("./models/Activity");
const Leaderboard_1 = require("./models/Leaderboard");
const Team_1 = require("./models/Team");
const User_1 = require("./models/User");
const Workout_1 = require("./models/Workout");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${port}`;
const resources = [
    {
        resource: 'users',
        endpoint: `${baseUrl}/api/users/`,
        description: 'User authentication profiles and account metadata',
    },
    {
        resource: 'teams',
        endpoint: `${baseUrl}/api/teams/`,
        description: 'Team creation and membership management',
    },
    {
        resource: 'activities',
        endpoint: `${baseUrl}/api/activities/`,
        description: 'Activity logging and fitness tracking entries',
    },
    {
        resource: 'leaderboard',
        endpoint: `${baseUrl}/api/leaderboard/`,
        description: 'Competitive ranking data across users and teams',
    },
    {
        resource: 'workouts',
        endpoint: `${baseUrl}/api/workouts/`,
        description: 'Personalized workout suggestions',
    },
];
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/api/health', (_req, res) => {
    res.json({
        status: 'ok',
        service: 'octofit-tracker-backend',
        port,
        baseUrl,
        mongodb: database_1.mongoUri,
    });
});
app.get('/api/users/', async (_req, res) => {
    const data = await User_1.UserModel.find().sort({ fullName: 1 }).lean();
    res.json({ resource: 'users', data });
});
app.get('/api/teams/', async (_req, res) => {
    const data = await Team_1.TeamModel.find().sort({ name: 1 }).lean();
    res.json({ resource: 'teams', data });
});
app.get('/api/activities/', async (_req, res) => {
    const data = await Activity_1.ActivityModel.find().sort({ activityDate: -1 }).lean();
    res.json({ resource: 'activities', data });
});
app.get('/api/leaderboard/', async (_req, res) => {
    const data = await Leaderboard_1.LeaderboardModel.find().sort({ rank: 1 }).lean();
    res.json({ resource: 'leaderboard', data });
});
app.get('/api/workouts/', async (_req, res) => {
    const data = await Workout_1.WorkoutModel.find().sort({ title: 1 }).lean();
    res.json({ resource: 'workouts', data });
});
app.get('/api/', (_req, res) => {
    res.json({ baseUrl, resources });
});
async function startServer() {
    try {
        await (0, database_1.connectToDatabase)();
        console.log(`MongoDB connected: ${database_1.mongoUri}`);
        app.listen(port, () => {
            console.log(`Backend API listening on ${baseUrl}`);
        });
    }
    catch (error) {
        console.error('Failed to start backend service:', error);
        process.exit(1);
    }
}
void startServer();
//# sourceMappingURL=index.js.map