import type { Project } from "../types";
import meshAiImg from "../assets/projects/meshai.png";
import workspaceHubImg from "../assets/projects/workspacehub.png";
import flashcardsImg from "../assets/projects/flashcards.png";

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
      "Flashcard study app with color-coded decks, a card carousel with flip animations, and deck creation and deletion.",
      "Built with semantic HTML, responsive CSS, and vanilla JavaScript ES modules. Deployed as a static site on Vercel.",
    ],
    image: flashcardsImg,
    codeUrl: "https://github.com/blackicedragonn/ai-se_project_flashcards",
    liveUrl: "https://ai-se-project-flashcards.vercel.app",
  },
];
