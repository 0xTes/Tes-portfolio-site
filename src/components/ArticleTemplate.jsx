import { BOOKING_URL } from "../lib/site";

function formatDate(date) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

function ExternalEmbed({ title, src, className = "" }) {
  if (!src) return null;

  return (
    <div className={"overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm " + className}>
      <iframe
        title={title}
        src={src}
        loading="lazy"
        className="min-h-[420px] w-full border-0"
      />
    </div>
  );
}

function TikTokEmbed({ tiktok }) {
  if (!tiktok?.url) return null;

  const videoId = tiktok.url.match(/video\/(\d+)/)?.[1];

  if (!videoId) {
    return (
      <p className="mt-12 rounded-2xl border border-teal-100 bg-teal-50 px-5 py-4 text-sm leading-relaxed text-slate-600">
        <a
          href={tiktok.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-teal-700 underline underline-offset-4 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
        >
          Watch the companion TikTok video
        </a>
      </p>
    );
  }

  return (
    <ExternalEmbed
      title={tiktok.title}
      src={`https://www.tiktok.com/embed/v2/${videoId}`}
      className="mt-12"
    />
  );
}

export default function ArticleTemplate({ article }) {
  return (
    <article className="section py-20 md:py-28">
      <header className="mx-auto min-w-0 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          {article.category}
        </p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
          {article.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          {article.description}
        </p>
        <p className="mt-6 text-sm font-medium text-slate-500">
          <time dateTime={article.publishedAt}>
            {formatDate(article.publishedAt)}
          </time>
          <span aria-hidden="true"> · </span>
          {article.readingTime}
        </p>
      </header>

      {article.featuredImage && (
        <figure className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[32px]">
          <img
            src={article.featuredImage}
            alt=""
            className="h-auto w-full"
            loading="eager"
            decoding="async"
          />
        </figure>
      )}

      <div className="article-copy mx-auto mt-16 max-w-[68ch] text-[1.0625rem] leading-8 text-slate-700 md:text-lg">
        {article.content.map((block, index) => {
          if (block.type === "heading") {
            return (
              <h2 key={`${block.text}-${index}`}>
                {block.text}
              </h2>
            );
          }

          if (block.type === "list") {
            return (
              <ul key={`${block.items[0]}-${index}`}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          }

          return <p key={`${block.text.slice(0, 30)}-${index}`}>{block.text}</p>;
        })}
      </div>

      <div className="mx-auto min-w-0 max-w-[68ch]">
        <ExternalEmbed
          title={article.substack.title}
          src={article.substack.embedUrl}
          className="mt-12"
        />
        <TikTokEmbed tiktok={article.tiktok} />

        <section
          aria-labelledby="checklist-heading"
          className="mt-16 rounded-[28px] border border-teal-100 bg-teal-50/70 p-7 sm:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Practical insight
          </p>
          <h2
            id="checklist-heading"
            className="mt-4 text-2xl font-semibold text-slate-900 md:text-3xl"
          >
            {article.checklist.title}
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate-600">
            {article.checklist.introduction}
          </p>
          <ul className="mt-6 space-y-4 text-[1.0625rem] leading-relaxed text-slate-700">
            {article.checklist.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-1 text-teal-700">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="article-cta-heading"
          className="glass-card mt-16 rounded-[28px] p-7 sm:p-10"
        >
          <h2
            id="article-cta-heading"
            className="text-2xl font-semibold text-slate-900 md:text-3xl"
          >
            {article.cta.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-slate-600">
            {article.cta.text}
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary mt-7"
          >
            {article.cta.label}
          </a>
        </section>
      </div>
    </article>
  );
}
