import React from 'react';
import './styles/style.css';

import AnothayPix from './images/Anothay_Chansy.jpg';
import AdobeXd from './images/adobe-xd.png';
import FeatherPix from './images/feather2-removebg-preview.png';
import CanvaPix from './images/canva.png';
import FigmaPix from './images/figmaLogo.png';
import CodestackPix from './images/codestack.jpg';
import ReactLogo from './images/react.png';
import AngularLogo from './images/angularjs.png';
import JavascriptLogo from './images/javascript.png';


function App() {
  return (

    <body>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 header p-2">
            <img classname="ml-2 img-fluid" src={FeatherPix} />
            <strong className="ml-3">Design with you in mind, one pixel at a time...</strong>
          </div>
        </div>
      </div>
      <div className="container">
        <h2><b>Anothay Chansy</b></h2>
        <a
          href="https://www.instagram.com/anothayc.design/"
          target="_blank"
          class="ig-link">
          <div className="circle-shape">
            <img src={AnothayPix} className="profile-pic" />
            <div className="threepassion">
              <h3>Passion Web Designer</h3>
              <h3>Front-end Developer</h3>
              <h3>Coffee Addict</h3>
            </div>
          </div>
        </a>
        {/* project section */}
        <div className="link-list">
          <h3 className="title">Projects</h3>
          <div className="link-list-item bright">
            📁  My Portfolio (UNDER CONSTRUCTION)
        </div>
          <a
            href="https://github.com/aaiilee0715"
            target="_blank">
            <div className="link-list-item bright">
              <img src="https://github.githubassets.com/images/icons/emoji/octocat.png" width="20" height="20" align="absmiddle" />   GitHub
          </div>
          </a>
          {/* resources section */}
          <h3 className="title">My Resources</h3>
          <a
            href="https://codestackacademy.org/home">
            <div className="link-list-item bright">
              <img src={CodestackPix} width="20" height="20" align="absmiddle" />   CodeStack Academy
          </div>
          </a>
          <a
            href="https://www.notion.so/How-to-create-a-new-React-App-be9a58b59a3f47379e3d53711f78fcdf"
            target="_blank">
            <div className="link-list-item bright">
              <img src="https://img.icons8.com/ultraviolet/2x/react.png" width="20" height="20" align="absmiddle" />   How To Create-React-App
          </div>
          </a>
          <a
            href="https://www.notion.so/Angular-Setting-up-the-local-environment-and-workspace-76b9c7f55d88462c8f0fa55b37b4adac"
            target="_blank">
            <div className="link-list-item bright">
              <img src="//img.icons8.com/color/2x/angularjs.png" width="20" height="20" align="absmiddle" />   How To Install Angular CLI
          </div>
          </a>
          <a
            href="https://www.notion.so/Emoji-Cheat-Sheet-For-HTML-02292dde397d401b912eab7edc6f8fb1"
            target="_blank">
            <div className="link-list-item bright">
              <img src="https://img.icons8.com/plasticine/2x/happy.png" width="20" height="20" align="absmiddle" />   Emoji-Cheat-Sheet For HTML
          </div>
          </a>
          {/* support section */}
          <h3 className="title">Support Me</h3>
          <a
            href="https://www.buymeacoffee.com/ann.codes"
            target="_blank">
            <div className="link-list-item bright">
              ☕ Buy me a coffee
        </div>
          </a>
          {/* Social Media section */}
          <h3 className="title">Social</h3>
          <a
            href="https://www.instagram.com/anothayc.design/">
            <div className="link-list-item bright">
              <img src="https://img.icons8.com/fluent/2x/instagram-new.png" width="20" height="20" align="absmiddle" />   Instagram
          </div>
          </a>
          <a
            href="https://twitter.com/_aaiilee">
            <div className="link-list-item bright">
              <img src="https://img.icons8.com/fluent/2x/twitter.png" width="20" height="20" align="absmiddle" />   Twitter
          </div>
          </a>
          <a
            href="https://www.linkedin.com/in/anothay-chansy-71400520a/">
            <div className="link-list-item bright">
              <img src="https://img.icons8.com/fluent/2x/linkedin.png" width="20" height="20" align="absmiddle" />   LinkedIn
          </div>
          </a>
          <a href="mailto:design@anothayc.dev">
            <div className="link-list-item light">
              💌 Contact me
        </div>
          </a>
        </div>
        <div className="icon-list">
          <h3 className="designText">What I use to make the magic happen ✨</h3>
          <img
            src={AdobeXd}
            alt="adobe xd"
            class="icon-list-img"
          />
          {/* <img
            src={CanvaPix}
            alt="canva logo"
            class="icon-list-img"
          /> */}
          <img
            src={FigmaPix}
            alt="figma logo"
            class="icon-list-img"
          />
             {/* <img
            src={JavascriptLogo}
            alt="javascript logo"
            class="icon-list-img"
          /> */}
          <img
            src={ReactLogo}
            alt="react logo"
            class="icon-list-img"
          />
           <img
            src={AngularLogo}
            alt="angular logo"
            class="icon-list-img"
          />
        </div>
      </div>

    </body>
  );
}

export default App;
