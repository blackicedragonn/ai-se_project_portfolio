import type { Project } from "../types";
import meshAiImg from "../assets/projects/meshai.svg";
import workspaceHubImg from "../assets/projects/workspacehub.svg";
import flashcardsImg from "../assets/projects/flashcards.svg";

export const projects: Project[] = [
  {
    id: "meshai",
    name: "MeshAI",
    description: [
      "Full-stack RAG knowledge assistant: upload documents, chat with grounded answers, and manage a personal knowledge base.",
      "Deployed on AWS EC2 with Docker Compose and Caddy. Stack: React, Express, MongoDB, JWT, Nebius AI embeddings and chat.",
    ],
    image: meshAiImg,
    codeUrl: "https://github.com/blackicedragonn/Mesh-Ai",
    liveUrl: "http://54.90.197.159",
  },
  {
    id: "workspacehub",
    name: "WorkspaceHub",
    description: [
      "Multi-tenant project tracker with role-based access, bookings, and nested task comments.",
      "Express/Mongoose API and React/Vite client deployed as two Vercel projects with Atlas and serverless-safe DB connections.",
    ],
    image: workspaceHubImg,
    codeUrl: "https://github.com/blackicedragonn/ai-se_project_workspacehub",
    liveUrl:
      "https://workspacehub-client-git-workspacehub-part-2-workspace-hub.vercel.app",
  },
  {
    id: "flashcards",
    name: "Flashcards",
    description: [
      "Spaced-repetition style flashcard SPA built early in the AI Software Engineering track.",
      "Practiced React state, component composition, and shipping a polished single-page experience.",
    ],
    image: flashcardsImg,
    codeUrl: "https://github.com/blackicedragonn/ai-se_project_flashcards",
    liveUrl: "https://github.com/blackicedragonn/ai-se_project_flashcards",
  },
];
