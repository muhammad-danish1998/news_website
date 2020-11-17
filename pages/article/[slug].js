import PageWrapper from "../../containers/PageWrapper";
import ArticlePage from "../../containers/ArticlePage";
import { useQuery } from '@apollo/react-hooks'
import GAWrapper from '../../components/GAWrapper';

function Article({slug}) {
    return (
      <GAWrapper>
        <PageWrapper className="article-page">
            <ArticlePage slug={slug} />
        </PageWrapper>
      </GAWrapper>
    )
}

Article.getInitialProps = ({query}) => {
  const { slug } = query;
  return {
    slug
  };
};

export default Article
