export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Axiom Trade - Token Discovery
        </h1>
        <p className="text-secondary mb-8">
          Real-time token tracking and trading platform
        </p>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <div className="bg-card border border-border p-6 rounded-lg hover:bg-hover transition-smooth">
            <h2 className="text-lg font-semibold mb-2">New Pairs</h2>
            <p className="text-tertiary text-sm">Recently launched tokens</p>
          </div>

          <div className="bg-card border border-border p-6 rounded-lg hover:bg-hover transition-smooth">
            <h2 className="text-lg font-semibold mb-2">Final Stretch</h2>
            <p className="text-tertiary text-sm">
              Tokens approaching migration
            </p>
          </div>

          <div className="bg-card border border-border p-6 rounded-lg hover:bg-hover transition-smooth">
            <h2 className="text-lg font-semibold mb-2">Migrated</h2>
            <p className="text-tertiary text-sm">
              Successfully migrated tokens
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-card border border-border rounded-lg">
          <h3 className="font-semibold mb-2">Theme Test</h3>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-primary text-primary-foreground rounded">
              Primary
            </span>
            <span className="px-3 py-1 bg-success text-white rounded">
              Success
            </span>
            <span className="px-3 py-1 bg-danger text-white rounded">
              Danger
            </span>
            <span className="px-3 py-1 bg-twitter text-white rounded">
              Twitter
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
