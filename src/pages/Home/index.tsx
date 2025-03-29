import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/Contact"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = ({ t }: { t: TFunction }) => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={t(IntroContent.title)}
        content={t(IntroContent.text)}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={t(MiddleBlockContent.title)}
        content={t(MiddleBlockContent.text)}
        button={t(MiddleBlockContent.button)}
      />
      <ContentBlock
        direction="left"
        title={t(AboutContent.title)}
        content={t(AboutContent.text)}
        section={AboutContent.section.map((item) => ({
          ...item,
          title: t(item.title),
          content: t(item.content),
        }))}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={t(MissionContent.title)}
        content={t(MissionContent.text)}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={t(ProductContent.title)}
        content={t(ProductContent.text)}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={t(ContactContent.title)}
        content={t(ContactContent.text)}
        id="contact"
      />
    </Container>
  );
};

export default withTranslation()(Home);
