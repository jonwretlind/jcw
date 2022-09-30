import { connect, styled } from "frontity";
import Img from "@frontity/components/image";
import SectionContainer from "../styles/section-container";

const Social = ({ state, id, className }) => {
  return(
    <SocialIcons>
    <div className="sfsi_wicons shuffeldiv  css-zp8mvx-props-css">
      <div className="inerCnt">
        <a href="https://jonwretlind.com/feed/" target="_blank" className=" sficn css-54bvox-props-css" data-effect="" rel="noopener" id="sfsiid_rss_icon">
          <span className="css-1ahxlsp-Container e16qyzlb0">
            <Img alt="RSS" className="frontity-lazy-image sfcm sfsi_wicon  css-yaim6b-props-css" loading="lazy" src="https://jonwretlind.com/wp-content/plugins/ultimate-social-media-icons/images/icons_theme/default/default_rss.png" />
          </span>
        </a>
      </div>
    </div>
    <div className="sfsi_wicons shuffeldiv  css-zp8mvx-props-css">
      <div className="inerCnt">
<a href="https://api.follow.it/widgets/icon/OGdsdzRPSThhdkFlYTNaZEtZUHpNSkljL1J5ZEEwZlFNcTFNZmVHa09Oa1dPdkkxd2dpY2MvTGUxSVYzdksyS1U5VDMrVytFNllHQ2xDNEpTR2d3TXVSaEQrM1JFWVpvWDA0QWdyRUg0N3NUQmQvMGxnN0J2YjlzZEpuWU8vSll8L3dzeUlNcnBYaUNwT0ozNVQ4bFpvRkZ5NTJaN2RHSmpTYlFWK0dicnczYz0=/OA==/" target="_blank" className=" sficn css-54bvox-props-css" data-effect="" rel="noopener" id="sfsiid_email_icon"><span className="css-1ahxlsp-Container e16qyzlb0">
<Img alt="Follow by Email" className="frontity-lazy-image sfcm sfsi_wicon  css-yaim6b-props-css" loading="lazy" style="" src="https://jonwretlind.com/wp-content/plugins/ultimate-social-media-icons/images/icons_theme/default/default_email.png" /></span></a>
      </div>
    </div>
    <div className="sfsi_wicons shuffeldiv  css-zp8mvx-props-css">
      <div className="inerCnt">
<a href="https://www.facebook.com/JonCWretlindGraphics" target="_blank" className=" sficn css-54bvox-props-css" data-effect="" rel="noopener" id="sfsiid_facebook_icon">
<span className="css-1ahxlsp-Container e16qyzlb0">
<Img alt="Facebook" className="frontity-lazy-image sfcm sfsi_wicon  css-yaim6b-props-css" loading="lazy" style="" src="https://jonwretlind.com/wp-content/plugins/ultimate-social-media-icons/images/icons_theme/default/default_facebook.png" /></span></a>
      </div>
    </div>
    <div className="sfsi_wicons shuffeldiv  css-zp8mvx-props-css">
      <div className="inerCnt">
<a href="https://twitter.com/jcwretlind" target="_blank" className=" sficn css-54bvox-props-css" data-effect="" rel="noopener" id="sfsiid_twitter_icon">
<span className="css-1ahxlsp-Container e16qyzlb0">
<Img alt="Twitter" className="frontity-lazy-image sfcm sfsi_wicon  css-yaim6b-props-css" loading="lazy" style="" src="https://jonwretlind.com/wp-content/plugins/ultimate-social-media-icons/images/icons_theme/default/default_twitter.png" /></span></a>
      </div>
    </div>
    <div className="sfsi_wicons shuffeldiv  css-zp8mvx-props-css">
      <div className="inerCnt">
<a href="https://www.linkedin.com/in/joncwretlind/" target="_blank" className=" sficn css-54bvox-props-css" data-effect="" rel="noopener" id="sfsiid_linkedin_icon">
<span className="css-1ahxlsp-Container e16qyzlb0">
<Img alt="LinkedIn" className="frontity-lazy-image sfcm sfsi_wicon  css-yaim6b-props-css" loading="lazy" style="" src="https://jonwretlind.com/wp-content/plugins/ultimate-social-media-icons/images/icons_theme/default/default_linkedin.png" /></span></a>
      </div>
    </div>
    <div className="sfsi_wicons shuffeldiv  css-zp8mvx-props-css">
      <div className="inerCnt">
<a href="https://t.me/@jcwretlind?&amp;text=Thank%2520you%2520for%2520connecting%2520with%2520me%2520on%2520Telegram%2521" target="_blank" className=" sficn css-54bvox-props-css" data-effect="" rel="noopener" id="sfsiid_telegram_icon">
<span className="css-1ahxlsp-Container e16qyzlb0">
<Img alt="Telegram" className="frontity-lazy-image sfcm sfsi_wicon sfsi_telegram_wicon sfsi_click_wicon css-yaim6b-props-css" loading="lazy" style="" src="https://jonwretlind.com/wp-content/plugins/ultimate-social-media-icons/images/icons_theme/default/default_telegram.png" /></span></a>
      </div>
    </div>
    </SocialIcons>
  )
}
export default connect(Social);


const SocialIcons = styled.div`
  display: flex;
  margin-bottom: -10px;

  .sfsi_wicons {
    margin: 0 5px;
  }
  @media (max-width: 768px) {
    margin-left: -8%;
    .sfsi_wicons {
      margin: 0 2px;
      transform: scale(.95);
    }
  }

  span {
    width: 25px;
    height: auto;
    margin: 0 5px;
    img {
      height: 25px;
    }
  }
`;
