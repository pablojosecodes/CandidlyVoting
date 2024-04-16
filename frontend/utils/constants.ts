import { IPlan } from "../types";
import { Icons } from "../components/ui/icons";

export const PLANS: IPlan[] = [

    {
        TIER: "FREE",
        features: [
            "Basic Dashboard Access",
            "Limited Data Analysis (5 credits / month)",
            "Access to standard features",
            "Single concurrent generation job"
        ],
        price: 0
    },
    {
        TIER: "PRO",
        PRODUCT_ID: process.env.PRO_PROD_ID,
        PLAN_ID: process.env.PRO_PRICE_ID,
        features: [
            "Superior Comment Analysis (25 credits / month)",
            "Dashboard Access",
            "Access to beta features (integrations, etc.)",
            "Optional credit top ups",
            "3 concurrent generation jobs"
        ],
        price: 9.99
    },
    {
        TIER: "PREMIUM",
        PRODUCT_ID: process.env.PREMIUM_PROD_ID,
        PLAN_ID: process.env.PREMIUM_PRICE_ID,
        features: [
            "Extreme Comment Analysis (50 credits / month)",
            "Dashboard Access",
            "Access to beta and alpha features (integrations, etc.)",
            "Credit top ups",
            "Unlimited concurrent generation jobs"
        ],
        price: 19.99,
    },
];

