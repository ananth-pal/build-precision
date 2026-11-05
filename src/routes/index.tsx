import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "preload",
        as: "image",
        href: "/__l5e/assets-v1/c80d4784-aca8-47de-a7a9-0dc684df3ac5/gear-hobber.jpg",
        fetchPriority: "high",
      },
    ],
  }),
  component: Index,
});
