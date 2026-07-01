export default function Shop() {
  return (
    <main className="min-h-screen bg-[#FFF4EC] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-semibold text-slate-900">
          Digital Resources Shop
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Templates, guides, and digital resources designed to help
          businesses scale smarter.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="glass-card rounded-[28px] p-8">
            <h3 className="text-xl font-semibold">Website Starter Kit</h3>
            <p className="mt-3 text-slate-600">
              Launch faster with prebuilt website resources.
            </p>
          </div>

          <div className="glass-card rounded-[28px] p-8">
            <h3 className="text-xl font-semibold">PM Toolkit</h3>
            <p className="mt-3 text-slate-600">
              Templates for managing projects efficiently.
            </p>
          </div>

          <div className="glass-card rounded-[28px] p-8">
            <h3 className="text-xl font-semibold">Marketing Bundle</h3>
            <p className="mt-3 text-slate-600">
              Growth templates and campaign planning sheets.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}