import { request } from "./api";

export interface WorkflowMetric {
  label: string;
}

export interface WorkflowSection {
  heading: string;
  body: string;
}

export interface WorkflowDetails {
  client?: string;
  industry?: string;
  useCase?: string;
  techStack?: string[];
}

export interface Workflow {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  thumbnail_url: string | null;
  video_url: string | null;
  metrics: WorkflowMetric[];
  details?: WorkflowDetails;
  sections: WorkflowSection[];
  tags: string[];
  created_at: string;
}

export interface WorkflowInput {
  title: string;
  slug?: string;
  tagline: string;
  description: string;
  thumbnail_url?: string | null;
  video_url?: string | null;
  metrics: WorkflowMetric[];
  details?: WorkflowDetails;
  sections: WorkflowSection[];
  tags: string[];
}

export function listWorkflows() {
  return request<Workflow[]>("/api/workflows");
}

export function getWorkflow(slug: string) {
  return request<Workflow>(`/api/workflows/${encodeURIComponent(slug)}`);
}

export function createWorkflow(input: WorkflowInput) {
  return request<Workflow>("/api/workflows", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function updateWorkflow(id: string, input: Partial<WorkflowInput>) {
  return request<Workflow>(`/api/workflows/${encodeURIComponent(id)}`, {
    method: "PATCH",
    body: JSON.stringify(input),
  });
}

export function deleteWorkflow(id: string) {
  return request<{ message: string }>(
    `/api/workflows/${encodeURIComponent(id)}`,
    { method: "DELETE" },
  );
}

export const mockWorkflows: Workflow[] = [
  {
    id: "wf_1",
    slug: "ai-voice-agents-b2b",
    title: "AI Voice Agents for B2B SaaS",
    tagline: "Scaling outbound sales powered by n8n, Twilio, and Vapi.",
    description:
      "An autonomous voice agent that calls leads, qualifies them in a real conversation, and books a meeting only when the prospect is warm.",
    thumbnail_url: null,
    video_url: null,
    metrics: [
      { label: "98% Cost Reduction" },
      { label: "74% Pick-Up Rate" },
      { label: "463 Total Calls" },
    ],
    details: {
      client: "Confidential B2B SaaS",
      industry: "SaaS",
      useCase: "Outbound Sales",
      techStack: ["n8n", "Twilio", "Vapi", "OpenAI"],
    },
    sections: [
      {
        heading: "Background",
        body: "The client was burning cash on outsourced SDR teams. Pickup rates were dropping every quarter. Hiring more humans was no longer fixing the funnel.",
      },
      {
        heading: "The Challenge",
        body: "We needed a system that could dial leads at scale, hold a real conversation, qualify against five criteria, and only hand off to a human when the prospect was clearly warm.",
      },
      {
        heading: "The Solution",
        body: "An n8n workflow orchestrating Twilio for telephony, Vapi for voice synthesis, and a custom prompt graph for qualification logic. Every call is transcribed, scored, and pushed to HubSpot in real time.",
      },
      {
        heading: "Impact",
        body: "Cost per qualified meeting dropped 98%. Daily call volume scaled from 40 to 463 with the same team — and pickup rates went up because the agent only calls during high-intent windows.",
      },
    ],
    tags: ["AI", "Sales", "Voice"],
    created_at: "2026-03-15T00:00:00Z",
  },
  {
    id: "wf_2",
    slug: "crm-agent-digital-agency",
    title: "CRM Agent for a Digital Agency",
    tagline: "Discover how n8n workflows let BDRs focus only on closing deals.",
    description:
      "A unified sales operations agent that replaces the morning juggle between HubSpot, Google Sheets, and three lead-gen tools.",
    thumbnail_url: null,
    video_url: null,
    metrics: [
      { label: "5+ Tools Unified" },
      { label: "80%+ Manual Tasks Eliminated" },
      { label: "24/7 Availability" },
    ],
    details: {
      client: "UPLIGHTLY Digital Agency",
      industry: "Digital Agency",
      useCase: "Sales Operations Automation",
      techStack: ["n8n", "HubSpot", "Slack", "Google Sheets", "OpenAI"],
    },
    sections: [
      {
        heading: "Background",
        body: "BDRs were spending the first two hours of every day reconciling lead lists across HubSpot, Sheets, and a half-dozen scraping tools. The actual selling started at 11am.",
      },
      {
        heading: "The Challenge",
        body: "Every tool had a different schema. Lead deduping was manual. Notes from one platform never made it into the CRM. The team wanted one conversational interface that knew everything they already knew.",
      },
      {
        heading: "The Solution",
        body: "We built Slack Sentinel — an n8n-powered agent connected to all five tools. BDRs ask it questions in Slack; it routes the request to the right sub-agent, runs the lookup, writes back the answer, and updates the CRM in seconds.",
      },
      {
        heading: "Impact",
        body: "Manual context-switching dropped to near zero. The team's selling time more than doubled. 80%+ of pre-call prep is now handled by the agent.",
      },
    ],
    tags: ["CRM", "Sales Ops", "Slack"],
    created_at: "2026-02-20T00:00:00Z",
  },
  {
    id: "wf_3",
    slug: "agentic-content-army",
    title: "n8n Agentic Content Army",
    tagline: "AI-powered research, creation, and distribution pipeline.",
    description:
      "A multi-agent content factory that researches a topic, drafts platform-specific copy, and ships it to every social channel — with a human in the loop for approvals.",
    thumbnail_url: null,
    video_url: null,
    metrics: [
      { label: "40-60% Manual Work Reduced" },
      { label: "5+ Platforms Integrated" },
      { label: "Human Oversight Built-In" },
    ],
    details: {
      client: "Internal",
      industry: "Marketing",
      useCase: "Content Distribution",
      techStack: ["n8n", "OpenAI", "Anthropic", "Buffer", "Notion"],
    },
    sections: [
      {
        heading: "Background",
        body: "Posting the same idea across LinkedIn, X, Instagram, and a blog meant rewriting the same content four times — and the rewrites were always rushed.",
      },
      {
        heading: "The Solution",
        body: "Three n8n sub-agents: a Research Agent that pulls sources, a Drafting Agent that produces platform-tailored copy, and a Distribution Agent that schedules everything. A Notion approval step keeps a human in the loop.",
      },
      {
        heading: "Impact",
        body: "Content output tripled. Editing time dropped 40-60%. Posting frequency stabilized for the first time in a year.",
      },
    ],
    tags: ["Content", "AI", "Marketing"],
    created_at: "2026-01-08T00:00:00Z",
  },
];
