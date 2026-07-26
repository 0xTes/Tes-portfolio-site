import { useParams } from "react-router-dom";

import ArticleTemplate from "../components/ArticleTemplate";
import Newsletter from "../components/Newsletter";
import PageShell from "../components/PageShell";
import Seo from "../components/Seo";
import { findArticle } from "../content/articles";

export default function Blog() {
  const { slug } = useParams();
  const article = findArticle(slug);
  const path = slug ? `/blog/${article.slug}` : "/blog";

  return (
    <>
      <Seo
        title={`${article.title} | Teslim Digital`}
        description={article.description}
        path={path}
        type="article"
      />
      <PageShell>
        <ArticleTemplate article={article} />
        <Newsletter />
      </PageShell>
    </>
  );
}
