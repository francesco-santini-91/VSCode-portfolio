import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { InfoCircleTwoTone, UserOutlined, CopyOutlined, SolutionOutlined, FolderOpenOutlined } from '@ant-design/icons';
import './LEFTMenu.css';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2076120_vsq9h8itswh.js',
  });

const { SubMenu } = Menu;

export default function LEFTMenu(props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);


    return (
      <div className="LEFTMenu" style={{ width: 280, overflowY: 'auto' }}>
        <Button type="primary" icon={<CopyOutlined />} size="large" onClick={() => {setIsCollapsed(!isCollapsed); props.collapseLeft(!isCollapsed)}} style={{width: '80px'}}></Button>
        <Menu
          defaultSelectedKeys={['AboutMe:1']}
          defaultOpenKeys={['AboutMe', 'Curriculum', 'Portfolio']}
          mode="inline"
          theme="dark"
          inlineCollapsed={isCollapsed}
        >
          <SubMenu key="AboutMe" icon={<UserOutlined />} title="ABOUT ME">
            <Menu.Item icon={<InfoCircleTwoTone />} onClick={() => setSelectedTab(0)} key="AboutMe:1">README.md</Menu.Item>
          </SubMenu>
          <SubMenu key="Curriculum" icon={<SolutionOutlined />} title="CURRICULUM">
            <Menu.Item key="Curriculum:1" icon={<IconFont type="iconstar" />} onClick={() => setSelectedTab(1)}>favicon.ico</Menu.Item>
            <Menu.Item key="Curriculum:2" icon={<IconFont type="iconcode" />} onClick={() => setSelectedTab(2)}>Info_Personali.html</Menu.Item>
            <Menu.Item key="Curriculum:3" icon={<IconFont type="iconcodebraces" />} onClick={() => setSelectedTab(3)}>Esperienza_Professionale.json</Menu.Item>
            <Menu.Item key="Curriculum:4" icon={<IconFont type="iconhashtag" />} onClick={() => setSelectedTab(4)}>Skills.css</Menu.Item>
            <Menu.Item key="Curriculum:5" icon={<IconFont type="iconsocialjavascript" />} onClick={() => setSelectedTab(5)}>Altre_Info.js</Menu.Item>
          </SubMenu>
          <SubMenu key="Portfolio" icon={<FolderOpenOutlined />} title="PORTFOLIO">
            <SubMenu key="M5SPiombino" icon={<FolderOpenOutlined />} style={{color: '#ffffff'}} title="M5S PIOMBINO">
                <Menu.Item key="M5SPiombino:1" onClick={() => setSelectedTab(6)}>Descrizione</Menu.Item>
                <Menu.Item key="M5SPiombino:2" onClick={() => setSelectedTab(7)}>Specifiche</Menu.Item>
                <Menu.Item key="M5SPiombino:3" onClick={() => setSelectedTab(8)}>Link</Menu.Item>
            </SubMenu>
            <SubMenu key="AppSpaceX" icon={<FolderOpenOutlined />} style={{color: '#ffffff'}} title="APP SPACEX">
                <Menu.Item key="M5SPiombino:1" onClick={() => setSelectedTab(9)}>Descrizione</Menu.Item>
            </SubMenu>
            <SubMenu key="EcoDiBugliano" icon={<FolderOpenOutlined />} style={{color: '#ffffff'}} title="ECO DI BUGLIANO">
                <Menu.Item key="EcoDiBugliano:1" onClick={() => setSelectedTab(12)}>Descrizione</Menu.Item>
                <Menu.Item key="EcoDiBugliano:2" onClick={() => setSelectedTab(13)}>Specifiche</Menu.Item>
                <Menu.Item key="EcoDiBugliano:3" onClick={() => setSelectedTab(14)}>Link</Menu.Item>
            </SubMenu>
            <SubMenu key="Portfolio_" icon={<FolderOpenOutlined />} style={{color: '#ffffff'}} title="PORTFOLIO">
                <Menu.Item key="Portfolio_:1" onClick={() => setSelectedTab(15)}>Descrizione</Menu.Item>
                <Menu.Item key="Portfolio_:2" onClick={() => setSelectedTab(16)}>Specifiche</Menu.Item>
            </SubMenu>
          </SubMenu>
          <Menu.Item key="CVClassico" icon={<SolutionOutlined />} onClick={() => setSelectedTab(18)}>CURRICULUM CLASSICO</Menu.Item>
        </Menu>
        {props.onSelectTab(selectedTab)}
      </div>
    );
}