import ArticleBox from '../components/ArticleBox';
import TopBanner from '../components/mainPage/TopBanner';
import OurBook from '../components/mainPage/OurBook';
import SubBanner from '../components/mainPage/SubBanner';
import MobilePost from '../components/mainPage/MobilePost';
import MobileProfile from '../components/mainPage/MobileProfile';
import BlogSection from '../components/mainPage/BlogSection';
import WhatsAppSection from '../components/mainPage/WhatsAppSection';
import BlogBgSection from '../components/mainPage/BlogBgSection';
import BlogBgSectionMobile from '../components/mainPage/BlogBgSectionMobile';
import AudioSection from '../components/mainPage/AudioSection';
import SubBanner2 from '../components/mainPage/SubBanner2';
import BlogBgSection1 from '../components/mainPage/BlogBgSection1';
import BlogBgSection1Mobile from '../components/mainPage/BlogBgSection1Mobile';
import PostBgSection from '../components/mainPage/PostBgSection';
import FormSection from '../components/mainPage/FormSection';
import VideoSection from '../components/mainPage/VideoSection';
import BlogSlider from '../components/mainPage/BlogSlider';

export default function HomePage() {
  const subtitle = 'المزيد '
  const titles = {
    audio: 'عرب  ',
  }
  return (
    <React.Fragment>
      <TopBanner />
      <OurBook />
      <SubBanner />
      <BlogSlider />
      <MobilePost />
      <MobilePost />
      <MobileProfile />
      <BlogSection />
      <WhatsAppSection />
      <BlogBgSection />
      <BlogBgSectionMobile />
      {/* SubBannerMobile */}
      <AudioSection title={titles.audio} subtitle={subtitle}/>
      <MobilePost />
      <MobilePost />
      <SubBanner2 />
      <BlogBgSection1 />
      <BlogBgSection1Mobile />
      <PostBgSection />
      <FormSection />
      <VideoSection />
    </React.Fragment>
  );
}