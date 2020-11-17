import '../styles/globals.css';
import '../styles/home_page.css';
import '../styles/bootstrap.css';
import '../styles/article-box.css';
import '../styles/style.css';
import '../styles/Article_Page.css';
import '../styles/News_Live.css';
import '../styles/login.css';
import '../styles/akhbar-files.css';
import '../styles/7-Category-Akhbar.css';
import '@brainhubeu/react-carousel/lib/style.css';
import '../styles/Podcast_Listing_Page.css';
import '../styles/advertise-with-us.css';
import '../styles/about-us.css';
import '../styles/akhbar_video.css';
import '../styles/contact-us.css';
import '../styles/Privacy_Policy.css';
import '../styles/subscribe.css';
import '../styles/supplements_page.css';
import '../styles/tags.css';
import '../styles/Video_Listing_Page.css';
import '../styles/Write_Your_Own_Article.css';
import 'swiper/swiper.scss';

import withApollo from 'next-with-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

function AlAkhbarPages({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: 'https://akhbar.thewickfirm.com/graphql',
    cache: new InMemoryCache().restore(initialState || {})
  });
})(AlAkhbarPages)
