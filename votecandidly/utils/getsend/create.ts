import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface ProjectData {
    userId: string;
    projectName: string;
    isProduction: boolean;
}