import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
const moment = require('moment');

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
