import React from 'react'
import TopBtnSection from '../components/articlePage/TopBtnSection'
import Section2 from '../components/articlePage/Section2'
import ArticleGalleryMain from '../components/articlePage/ArticleGalleryMain'
import Section3 from '../components/articlePage/Section3'
import { useFetch } from '../hooks/useFetch'
import { gql, useQuery } from '@apollo/client';
import { graphqlLodash } from 'graphql-lodash';
import Spinner from '../components/Spinner'
import parse from 'html-react-parser';

import ArticleQL from '../functions/Articles.gql';

const ArticlePage = ({slug}) => {
    let { query, transform } = graphqlLodash(ArticleQL);
    var dataResult = useQuery(query, {
      variables: { slug }
    });
    dataResult = transform(dataResult);
    const { loading, error, data } = dataResult;
    if (loading) return (
        <Spinner />
    )
    if (error || data.articles.length < 1)
      return (<div>Error {error}</div>)
    const article = data.articles[0];
    return (
        <React.Fragment>
            <TopBtnSection />
            <Section2 column1={article.Headline} column2={article.Summary}
            slug={slug}/>
            <Section3 man={article.CreatedByUserID.username}
              body={parse(article.Body)}
              related={article.RelatedArticles}
              tags={article.tags}
              slug={slug}
              />
        </React.Fragment>
    )
}

export default ArticlePage
