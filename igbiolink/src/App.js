import React from 'react';
import './styles/style.css';

import AnothayPix from './images/Anothay_Chansy.jpg';
import GitHubPix from './images/GitHub-Mark-removebg-preview.png';
import TwitterPix from './images/icon-twitter.png';
import FeatherPix from './images/feather2-removebg-preview.png';


function App() {
  return (
    <body>
      <div className="circle-shape">
        <img src={AnothayPix} className="profile-pic"
        />
        <div className="threepassion">
          <h3>passion web designer</h3>
          <h3>front-end developer</h3>
          <h3>coffee addict</h3>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 header p-2">
            <img classname="ml-2 img-fluid" src={FeatherPix} />
            <strong className="ml-3">Design website, one pixel at a time...</strong>
          </div>
        </div>
      </div>
      <div className="container">
        <h2><b>Anothay Chansy</b></h2>
        <a
          href="https://www.instagram.com/_ann.codes"
          target="_blank"
          class="ig-link">
        </a>
        <div className="link-list">
          <a
            href="anothayc.dev"
            target="_blank">
            <div className="link-list-item light">
              ABOUT ME
</div>
          </a>
          <a
            href="https://www.buymeacoffee.com/ann.codes"
            target="_blank">
            <div className="link-list-item bright">
              ☕ Buy me a coffee
</div>

          </a>
          <div className="link-list-item bright">
            📁  My Portfolio
</div>
          <a href="mailto:design@anothayc.dev">
            <div className="link-list-item light">
              💌 Contact me
</div>
          </a>
        </div>
        <div className="icon-list">
          <a
            href="https://github.com/aaiilee0715"
            target="_blank"

          >
            <img
              src={GitHubPix}
              alt="github link"
              class="icon-list-img"
            />
          </a>
          <a
            href="https://twitter.com/_aaiilee"
            target="_blank"

          >
            <img
              src={TwitterPix}
              alt="twitter link"
              class="icon-list-img"
            />
          </a>
        </div>
      </div>

    </body>
  );
}

export default App;
