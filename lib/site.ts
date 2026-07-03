/**
 * Single source of truth for site-wide copy and contact details.
 * Update values here rather than hunting through components.
 */
export const site = {
  name: "EngX",
  tagline: "Your Partner for Intelligent Transformation",
  motto: "Human-Centric. AI-Powered. Outcome-Driven.",
  // TODO: replace with the firm's real inbox once provisioned.
  email: "hello@engx.co.za",
  // The advisory assistant (chatbot is a roadmap item — docs/ARCHITECTURE.md).
  assistant: "Pietie die AI",
  linkedin: "https://www.linkedin.com/company/engx",
  year: 2026,
} as const;
