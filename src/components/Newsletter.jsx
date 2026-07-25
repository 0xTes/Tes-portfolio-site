import { useId, useState } from "react";

const subscriptionAction = import.meta.env.VITE_NEWSLETTER_FORM_ACTION;

export default function Newsletter({ className = "" }) {
  const headingId = useId();
  const statusId = useId();
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    if (subscriptionAction) return;

    event.preventDefault();
    setStatus(
      "Newsletter subscriptions are being prepared. Please check back soon.",
    );
  }

  return (
    <section
      aria-labelledby={headingId}
      className={`section py-16 md:py-20 ${className}`}
    >
      <div className="glass-card overflow-hidden rounded-[36px] px-6 py-14 text-center sm:px-10 md:px-16 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Stay connected
        </p>
        <h2
          id={headingId}
          className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl md:text-5xl"
        >
          Get practical ideas for a more effective digital business.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-slate-600 md:text-lg">
          Occasional notes on websites, AI, automation, and the systems that
          help growing businesses create more room to do their best work.
        </p>

        <form
          action={subscriptionAction || undefined}
          method="post"
          onSubmit={handleSubmit}
          className="mx-auto mt-9 flex max-w-3xl flex-col gap-3 sm:flex-row"
        >
          <label className="sr-only" htmlFor={headingId + "-email"}>
            Email address
          </label>
          <input
            id={headingId + "-email"}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-describedby={status ? statusId : undefined}
            placeholder="Enter your email address"
            className="min-w-0 flex-1 rounded-full border border-slate-200 bg-white px-6 py-4 text-[1.0625rem] text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          />
          <button
            type="submit"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-teal-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            Subscribe
          </button>
        </form>
        <p
          id={statusId}
          aria-live="polite"
          className="mx-auto mt-4 min-h-6 max-w-xl text-sm leading-relaxed text-slate-500"
        >
          {status}
        </p>
      </div>
    </section>
  );
}
