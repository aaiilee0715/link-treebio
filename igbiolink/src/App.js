import React from 'react';
import './styles/style.css';

import AnothayPix from './images/Anothay_Chansy.jpg';
import AdobeXd from './images/adobe-xd.png';
import FeatherPix from './images/feather2-removebg-preview.png';
import CanvaPix from './images/canva.png';
import FigmaPix from './images/figmaLogo.png';
import CodestackPix from './images/codestack.jpg';



function App() {
  return (

    <body>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 header p-2">
            <img classname="ml-2 img-fluid" src={FeatherPix} />
            <strong className="ml-3">Designs with you in mind, one pixel at a time...</strong>
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
            📁  My Portfolio
        </div>
          <a
            href="https://github.com/aaiilee0715">
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
        <div className="link-list-item bright">
            COMING SOON
        </div>
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
          <img
            src={CanvaPix}
            alt="canva logo"
            class="icon-list-img"
          />
          <img
            src={FigmaPix}
            alt="figma logo"
            class="icon-list-img"
          />
        </div>
      </div>

    </body>
  );
}

export default App;
