import React, { useState } from 'react';
import UPMenu from './components/UPMenu/UPMenu';
import LEFTMenu from './components/LEFTMenu/LEFTMENU';
import Terminal from './components/Terminal/Terminal';
import Content2 from './components/Content/Content';
import Readme from './components/Contents/readme';
import InfoPersonali from './components/Contents/infoPersonali';
import EsperienzaProfessionale from './components/Contents/esperienzaProfessionale';
import Skills from './components/Contents/skills';
import AltreInfo from './components/Contents/altreInfo';
import Favicon from './components/Contents/favicon';
import Eco1 from './components/Contents/eco1';
import Eco2 from './components/Contents/eco2';
import Eco3 from './components/Contents/eco3';
import M5S1 from './components/Contents/m5s1';
import M5S2 from './components/Contents/m5s2';
import M5S3 from './components/Contents/m5s3';
import SX1 from './components/Contents/sx1';
import Pf1 from './components/Contents/pf1';
import Pf2 from './components/Contents/pf2';

import CVClassico from './components/Contents/CVClassico';
import { Layout } from 'antd';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [content, setContent] = useState(0);
  const [collapseLeftMenu, setCollapseLeftMenu] = useState(false);
  const [terminalState, setTerminalState] = useState(true); // TRUE -> opened FALSE -> closed

  const manageTerminal = (state) => {
    setTerminalState(state);
  }

  const contentTab = (selected) => {
    setContent(selected);
    window.scrollTo(0,0);
  }

  const collapseLeft = (collapsed) => {
    setCollapseLeftMenu(collapsed);
  }

  const getContent = () => {
    switch(content) {
      case 0: 
        return(Readme());
      case 1:
        return(Favicon());
      case 2:
        return(InfoPersonali());
      case 3:
        return(EsperienzaProfessionale());
      case 4:
        return(Skills());
      case 5:
        return(AltreInfo());
      case 6:
        return(M5S1());
      case 7:
        return(M5S2());
      case 8:
        return(M5S3());
      case 9:
        return(SX1());
      case 12:
        return(Eco1());
      case 13:
        return(Eco2());
      case 14:
        return(Eco3());
      case 15:
        return(Pf1());
      case 16:
        return(Pf2());
      case 18:
        return(CVClassico());
      default:
        return(<div>default</div>);
    }
  }

  return (
    <div className="App">
        <Layout>
          <Header><UPMenu manageTerminal={manageTerminal} /></Header>
          <Layout>
            <Sider collapsed={collapseLeftMenu} collapsedWidth={0}><LEFTMenu onSelectTab={contentTab} collapseLeft={collapseLeft} /></Sider>
            <Layout>
              <Content><Content2 content={getContent} margin__left={collapseLeftMenu === true ? '80px' : '290px'} /></Content>
              <Footer><Terminal margin__left={collapseLeftMenu === true ? '0px' : '280px'} manageTerminal={manageTerminal} state={terminalState} /></Footer>
            </Layout>
          </Layout>
        </Layout>
    </div>
  );
}

export default App;
