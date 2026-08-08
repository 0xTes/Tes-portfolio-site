import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PageShell from "../components/PageShell";
import Seo from "../components/Seo";
import { BLOG_CONTENT_STATUS, getBlogArticles } from "../lib/blog-content";

const displayDate = new Intl.DateTimeFormat("en", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

function formatPublicationDate(publishedAt) {
  const timestamp = Date.parse(publishedAt);
  return Number.isNaN(timestamp) ? null : displayDate.format(timestamp);
}

function BlogStatus({ status }) {
  const statusContent = {
    [BLOG_CONTENT_STATUS.EMPTY]: {
      heading: "No articles published yet",
      description:
        "Teslim Digital is preparing practical insight on websites, systems, AI, and automation. Please check back soon.",
    },
    [BLOG_CONTENT_STATUS.UNAVAILABLE]: {
      heading: "Articles are temporarily unavailable",
      description:
        "We could not load the latest articles right now. Please check back shortly.",
    },
    [BLOG_CONTENT_STATUS.INVALID]: {
      heading: "Articles are being prepared",
      description:
        "The latest published content is not ready to display here yet. Please check back soon.",
    },
  }[status];

  if (!statusContent) {
    return (
      <section
        aria-live="polite"
        aria-busy="true"
        className="glass-card mt-14 rounded-[28px] p-8 sm:p-10"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Loading articles
        </p>
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate-600">
          Finding the latest Teslim Digital insight.
        </p>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="blog-status-heading"
      aria-live="polite"
      className="glass-card mt-14 rounded-[28px] p-8 sm:p-10"
    >
      <h2
        id="blog-status-heading"
        className="text-2xl font-semibold text-slate-900"
      >
        {statusContent.heading}
      </h2>
      <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-slate-600">
        {statusContent.description}
      </p>
    </section>
  );
}

function ArticleCard({ article }) {
  const { identity, media, publication, taxonomy } = article;
  const formattedDate = formatPublicationDate(publication.publishedAt);
  const articlePath = `/blog/${encodeURIComponent(identity.slug)}`;

  return (
    <article className="glass-card min-w-0 overflow-hidden rounded-[28px]">
      {media.featuredImage && (
        <img
          src={media.featuredImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="h-52 w-full object-cover sm:h-60"
        />
      )}

      <div className="p-7 sm:p-8">
        {taxonomy.categories.length > 0 && (
          <ul className="flex flex-wrap gap-2" aria-label="Article categories">
            {taxonomy.categories.map((category) => (
              <li
                key={category}
                className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-teal-800"
              >
                {category}
              </li>
            ))}
          </ul>
        )}

        <h2 className="mt-5 text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">
          <Link
            to={articlePath}
            className="rounded-sm transition-colors hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-4"
          >
            {identity.title}
          </Link>
        </h2>
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate-600">
          {identity.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500">
          {formattedDate && (
            <time dateTime={publication.publishedAt}>{formattedDate}</time>
          )}
          {formattedDate && publication.readingTime !== null && (
            <span aria-hidden="true">&middot;</span>
          )}
          {publication.readingTime !== null && (
            <span>{publication.readingTime} min read</span>
          )}
        </div>

        <Link
          to={articlePath}
          className="mt-7 inline-flex rounded-sm font-semibold text-teal-700 transition-colors hover:text-teal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-4"
          aria-label={`Read ${identity.title}`}
        >
          Read article <span aria-hidden="true" className="ml-2">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}

export default function Blog() {
  const [content, setContent] = useState({ status: "loading", articles: [] });

  useEffect(() => {
    let active = true;

    getBlogArticles()
      .then((result) => {
        if (active) setContent(result);
      })
      .catch(() => {
        if (active) {
          setContent({ status: BLOG_CONTENT_STATUS.UNAVAILABLE, articles: [] });
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <Seo
        title="Insights | Teslim Digital"
        description="Practical insight on strategic websites, intelligent systems, AI, and automation for growing businesses."
        path="/blog"
      />
      <PageShell>
        <section aria-labelledby="blog-heading" className="section py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Insights
            </p>
            <h1
              id="blog-heading"
              className="mt-6 text-4xl font-semibold leading-tight text-slate-900 md:text-6xl"
            >
              Practical insight for a more capable digital business.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Clear thinking on the websites, systems, and technology decisions that
              help growing businesses remove friction and build momentum.
            </p>
          </div>

          {content.status === BLOG_CONTENT_STATUS.READY ? (
            <section aria-labelledby="articles-heading" className="mt-14">
              <h2 id="articles-heading" className="sr-only">
                Latest articles
              </h2>
              <div className="grid min-w-0 gap-6 lg:grid-cols-2">
                {content.articles.map((article) => (
                  <ArticleCard key={article.identity.id} article={article} />
                ))}
              </div>
            </section>
          ) : (
            <BlogStatus status={content.status} />
          )}
        </section>
      </PageShell>
    </>
  );
}
