import { createFileRoute } from "@tanstack/react-router";
import GearCutting from "@/pages/CapGearCutting";

export const Route = createFileRoute("/capabilities/gear-cutting")({
  component: GearCutting,
});
