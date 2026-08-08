import { Link, useParams } from "react-router-dom";

import ArticleTemplate from "../components/ArticleTemplate";
import Newsletter from "../components/Newsletter";
import PageShell from "../components/PageShell";
import Seo from "../components/Seo";
import { articles } from "../content/articles";

export default function BlogArticle() {
  const { slug } = useParams();
  const article = articles.find((candidate) => candidate.slug === slug);

  if (!article) {
    return (
      <>
        <Seo
          title="Article | Teslim Digital"
          description="Read practical insight from Teslim Digital."
          path={`/blog/${slug}`}
        />
        <PageShell>
          <section
            className="section py-20 md:py-28"
            aria-labelledby="article-unavailable-heading"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Insights
            </p>
            <h1
              id="article-unavailable-heading"
              className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-slate-900 md:text-6xl"
            >
              This article is being prepared for the site.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Please return to the latest articles while we finish the native
              reading experience.
            </p>
            <Link to="/blog" className="button-primary mt-8">
              View all articles
            </Link>
          </section>
        </PageShell>
      </>
    );
  }

  return (
    <>
      <Seo
        title={`${article.title} | Teslim Digital`}
        description={article.description}
        path={`/blog/${article.slug}`}
        type="article"
      />
      <PageShell>
        <ArticleTemplate article={article} />
        <Newsletter />
      </PageShell>
    </>
  );
}
