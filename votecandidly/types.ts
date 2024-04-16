import { GetCommandOutput } from '@aws-sdk/lib-dynamodb';
import { users } from '@prisma/client';




// export type IUser = {
//   userId: string;
//   email: string;
//   createdAt: string;
//   plan: 'FREE' | 'PRO' | 'PREMIUM';
//   stripeCustomerId: string;
//   subscriptionStatus: "ACTIVE" | "CANCELLED"; 
//   currentCreditConsumption: number;
//   currentCredits: number;
//   extraCredits: number;
//   firstName: string,
//   lastName: string,
//   marketingEmail: string,

//   // userDetails: IUserDetails
// };


export type ISettings = {
	page: number
	index: number
	id: string
  consumed?: number
	user?: users
	// stripe?: IStripe
}

// export type IStripe = {
//   stripeCustomerId: string
//   PRO_CHECKOUT: string,
//   PREMIUM_CHECKOUT: string,
//   EXTRA_CHECKOUT: string,
//   customerPortalUrl: string,
//   user: IUser
// }


export type IPlan = {
  TIER: 'FREE' | 'PRO' | 'PREMIUM';
  PRODUCT_ID?: string;
  PLAN_ID?: string;
  features: string[];
  // icon: ReactElement;
  price: number;
};

export type IGetCommandOutput<T> = Omit<GetCommandOutput, 'Item'> & {
  Item?: T;
};


export interface GitHubRepo {
  allow_forking: boolean;
  archive_url: string;
  archived: boolean;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  clone_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  created_at: string; // ISO date string
  default_branch: string;
  deployments_url: string;
  description: string | null;
  disabled: boolean;
  downloads_url: string;
  events_url: string;
  fork: boolean;
  forks: number;
  forks_count: number;
  forks_url: string;
  full_name: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  has_discussions: boolean;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  homepage: string | null;
  hooks_url: string;
  html_url: string;
  id: number;
  is_template: boolean;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  language: string | null;
  languages_url: string;
  license: any; // Define a more specific type if you know the structure
  merges_url: string;
  milestones_url: string;
  mirror_url: string | null;
  name: string;
  node_id: string;
  notifications_url: string;
  open_issues: number;
  open_issues_count: number;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    // Add additional owner fields if needed
  };
  permissions: {
    admin: boolean;
    maintain: boolean;
    push: boolean;
    triage: boolean;
    pull: boolean;
  };
  private: boolean;
  pulls_url: string;
  pushed_at: string; // ISO date string
  releases_url: string;
  size: number;
  ssh_url: string;
  stargazers_count: number;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  svn_url: string;
  tags_url: string;
  teams_url: string;
  topics: string[]; // Assuming topics is an array of strings
  trees_url: string;
  updated_at: string; // ISO date string
  url: string;
  visibility: string;
  watchers: number;
  watchers_count: number;
  web_commit_signoff_required: boolean;
}
