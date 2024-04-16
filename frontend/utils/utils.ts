import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Define the Channel interface
interface Channel {
  channelType: string;
  channelID: string;
  channelHealth: number;
  recentFeedback: string;
  pendingTasks: string;
}

// Create a sample Channel object
export const sampleChannel: Channel = {
  channelType: "youtube",
  channelID: "CH12345",
  channelHealth: 8.5,
  recentFeedback: "You should live a longer life",
  pendingTasks: "You are missing things. I think you should do this and that "
};


