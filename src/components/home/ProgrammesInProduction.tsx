export default function ProgrammesInProduction() {
  return (
    <div>
      <h2 className="text-2xl lg:text-3xl font-bold mb-8">Programmes in production</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <article className="space-y-3">
          <h3 className="text-lg font-semibold">PTO gearboxes for global transmission brands</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Twenty-six years of development and supply. 75+ PTO variants — cable-operated, pneumatic, hydraulic, and hot-shift — built to run with Allison, Eaton, Hino, Isuzu, Mack, Mitsubishi, Volvo and ZF transmissions. Jigs and fixtures, housing machining, gear cutting, assembly, testing, and engineering change management handled inside one operation.
          </p>
        </article>
        <article className="space-y-3">
          <h3 className="text-lg font-semibold">Engine balancer assemblies for an Indian OEM engine manufacturer</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Mid-engine balancer assemblies developed and supplied in repeat production for [XX] years. [Programme volume / component count / balancing class to be confirmed]. [One concrete technical feature — to be confirmed].
          </p>
        </article>
      </div>
    </div>
  );
}
