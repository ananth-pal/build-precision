import { createFileRoute } from "@tanstack/react-router";
import WhatWeMake from "@/pages/WhatWeMake";

export const Route = createFileRoute("/portfolio")({
  component: WhatWeMake,
});
