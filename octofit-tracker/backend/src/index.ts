import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import { mongoUri } from './config/database';
import { ActivityModel } from './models/Activity';
import { LeaderboardModel } from './models/Leaderboard';
import { TeamModel } from './models/Team';
import { UserModel } from './models/User';
import { WorkoutModel } from './models/Workout';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

type ApiResource = {
  resource: string;
  endpoint: string;
  description: string;
};

const resources: ApiResource[] = [
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

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'octofit-tracker-backend',
    port,
    baseUrl,
    mongodb: mongoUri,
  });
});

app.get('/api/users/', async (_req, res) => {
  const data = await UserModel.find().sort({ fullName: 1 }).lean();
  res.json({ resource: 'users', data });
});

app.get('/api/teams/', async (_req, res) => {
  const data = await TeamModel.find().sort({ name: 1 }).lean();
  res.json({ resource: 'teams', data });
});

app.get('/api/activities/', async (_req, res) => {
  const data = await ActivityModel.find().sort({ activityDate: -1 }).lean();
  res.json({ resource: 'activities', data });
});

app.get('/api/leaderboard/', async (_req, res) => {
  const data = await LeaderboardModel.find().sort({ rank: 1 }).lean();
  res.json({ resource: 'leaderboard', data });
});

app.get('/api/workouts/', async (_req, res) => {
  const data = await WorkoutModel.find().sort({ title: 1 }).lean();
  res.json({ resource: 'workouts', data });
});

app.get('/api/', (_req, res) => {
  res.json({ baseUrl, resources });
});

async function startServer(): Promise<void> {
  try {
    await mongoose.connect(mongoUri);
    console.log(`MongoDB connected: ${mongoUri}`);

    app.listen(port, () => {
      console.log(`Backend API listening on ${baseUrl}`);
    });
  } catch (error) {
    console.error('Failed to start backend service:', error);
    process.exit(1);
  }
}

void startServer();