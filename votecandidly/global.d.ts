import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}



type BillingPlan = "basic" | "free trial";

interface BillingDetails {
    planId: BillingPlan;
    totalCredits: number;

    monthlyPrice: number; // You might want to use a more specific type for currency
    renewalDate: Date | null; // Use null for plans without renewal, like a free trial
    endDate: Date | null; // Use null for ongoing plans
    billingPeriod: string; // Format could be "monthly", "annually", etc.
}

interface UserBillingInfo {
    creditsLeft: number;
    cancelling: boolean;
    extraCredits?: number;
    active: boolean;
    billingPlanDetails: BillingDetails;
}