import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './styles.css';

const Root = () => (
  <ReactFullpage
    licenseKey='OPEN-SOURCE-GPLV3-LICENSE'
    anchors={['firstPage', 'secondPage', 'thirdPage']}
    sectionsColor={['#6ed3cf', '#9068be', '#e62739']}
    paddingTop='0px'
    navigation={true}
    arrowNavigation={true}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <div className="section general-info">
            <div className="general-info-wrapper">
              <img className="avatar" src="avatar.png"></img>
              <span className="name">Avetik Harutyunyan</span>
              <span className="title">Frontend Developer</span>
            </div>
          </div>

          <div className="section">
            <p>Section 2</p>
          </div>

          <div className="section">
            <p>Section 2</p>
          </div>
        </div>
      );
    }}
  />
);

export default Root;
