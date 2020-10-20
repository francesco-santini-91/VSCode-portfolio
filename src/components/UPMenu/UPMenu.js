import React from 'react';
import { Menu } from 'antd';
import './UPMenu.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const { SubMenu } = Menu;

export default function UPMenu(props) {
    return(
        <div className="UPMenu">
            <Menu selectedKeys={'File'} mode="horizontal" style={{height: '30px', padding: '2px'}}>
                <SubMenu key="File" style={{color: '#ffffff'}} title="File">
                <Menu.Item key="File:1" style={{color: '#ffffff'}}>New File</Menu.Item>
                <Menu.Item key="File:2" style={{color: '#ffffff'}}>New Window</Menu.Item>
                <Menu.Item key="File:3" style={{color: '#ffffff'}}>Open File</Menu.Item>
                <Menu.Item key="File:4" style={{color: '#ffffff'}}>Open Folder</Menu.Item>
                <Menu.Item key="File:5" style={{color: '#ffffff'}}>Open Workspace</Menu.Item>
                <Menu.Item key="File:6" style={{color: '#ffffff'}}>Open Recent</Menu.Item>
                <Menu.Item key="File:7" style={{color: '#ffffff'}}>Save</Menu.Item>
                <Menu.Item key="File:8" style={{color: '#ffffff'}}>Save As...</Menu.Item>
                <Menu.Item key="File:9" style={{color: '#ffffff'}}>Save All</Menu.Item>
                <Menu.Item key="File:10" style={{color: '#ffffff'}}>Exit</Menu.Item>
                </SubMenu>
                <SubMenu key="Edit" style={{color: '#ffffff'}} title="Edit">
                <Menu.Item key="Edit:1" style={{color: '#ffffff'}}>Undo</Menu.Item>
                <Menu.Item key="Edit:2">Redo</Menu.Item>
                <Menu.Item key="Edit:3" style={{color: '#ffffff'}}>Cut</Menu.Item>
                <Menu.Item key="Edit:4" style={{color: '#ffffff'}}>Copy</Menu.Item>
                <Menu.Item key="Edit:5">Paste</Menu.Item>
                <Menu.Item key="Edit:6" style={{color: '#ffffff'}}>Find</Menu.Item>
                <Menu.Item key="Edit:7" style={{color: '#ffffff'}}>Replace</Menu.Item>
                </SubMenu>
                <SubMenu key="Selection" style={{color: '#ffffff'}} title="Selection">
                <Menu.Item key="Selection:1" style={{color: '#ffffff'}}>Select All</Menu.Item>
                <Menu.Item key="Selection:2">Expand Selection</Menu.Item>
                <Menu.Item key="Selection:3" style={{color: '#ffffff'}}>Shrink Selection</Menu.Item>
                <Menu.Item key="Selection:4" style={{color: '#ffffff'}}>Copy Line Up</Menu.Item>
                <Menu.Item key="Selection:5" style={{color: '#ffffff'}}>Copy Line Down</Menu.Item>
                <Menu.Item key="Selection:6">Move Line Up</Menu.Item>
                <Menu.Item key="Selection:7">Move Line Down</Menu.Item>
                <Menu.Item key="Selection:8">Duplicate Selection</Menu.Item>
                </SubMenu>
                <SubMenu key="View" style={{color: '#ffffff'}} title="View">
                <Menu.Item key="View:1" style={{color: '#ffffff'}}>Command Palette...</Menu.Item>
                <Menu.Item key="View:2" style={{color: '#ffffff'}}>Open View</Menu.Item>
                <Menu.Item key="View:3" style={{color: '#ffffff'}}>Appearence</Menu.Item>
                <Menu.Item key="View:4" style={{color: '#ffffff'}}>Editor Layout</Menu.Item>
                <Menu.Item key="View:5" style={{color: '#ffffff'}}>Output</Menu.Item>
                <Menu.Item key="View:6" style={{color: '#ffffff'}}>Debug Console</Menu.Item>
                <Menu.Item key="View:7" style={{color: '#ffffff'}}>Terminal</Menu.Item>
                <Menu.Item key="View:8" style={{color: '#ffffff'}}>Problems</Menu.Item>
                </SubMenu>
                <SubMenu key="Go" style={{color: '#ffffff'}} title="Go">
                <Menu.Item key="Go:1" style={{color: '#ffffff'}}>Back</Menu.Item>
                <Menu.Item key="Go:2">Forward</Menu.Item>
                <Menu.Item key="Go:3" style={{color: '#ffffff'}}>Last Edit Location</Menu.Item>
                <Menu.Item key="Go:4" style={{color: '#ffffff'}}>Go To File...</Menu.Item>
                <Menu.Item key="Go:5" style={{color: '#ffffff'}}>Go To Line/Column</Menu.Item>
                <Menu.Item key="Go:6" style={{color: '#ffffff'}}>Go To Bracket</Menu.Item>
                <Menu.Item key="Go:7">Next Change</Menu.Item>
                <Menu.Item key="Go:8" style={{color: '#ffffff'}}>Previous Change</Menu.Item>
                </SubMenu>
                <SubMenu key="Run" style={{color: '#ffffff'}} title="Run">
                <Menu.Item key="Run:1" style={{color: '#ffffff'}}>Start Debugging</Menu.Item>
                <Menu.Item key="Run:2" style={{color: '#ffffff'}}>Run Without Debugging</Menu.Item>
                <Menu.Item key="Run:3">Stop Debugging</Menu.Item>
                <Menu.Item key="Run:4" style={{color: '#ffffff'}}>Restart Debugging</Menu.Item>
                <Menu.Item key="Run:5" style={{color: '#ffffff'}}>Open Configurations</Menu.Item>
                <Menu.Item key="Run:6" style={{color: '#ffffff'}}>Add Configuration...</Menu.Item>
                <Menu.Item key="Run:7" style={{color: '#ffffff'}}>Toggle Breakpoint</Menu.Item>
                <Menu.Item key="Run:8" style={{color: '#ffffff'}}>New Breakpoint</Menu.Item>
                </SubMenu>
                <SubMenu key="Terminal" style={{color: '#ffffff'}} title="Terminal">
                <Menu.Item key="Terminal:1" style={{color: '#ffffff'}} onClick={() => props.manageTerminal(true)}>New Terminal</Menu.Item>
                <Menu.Item key="Terminal:2" style={{color: '#ffffff'}}>Split Terminal</Menu.Item>
                <Menu.Item key="Terminal:3" style={{color: '#ffffff'}}>Run Task...</Menu.Item>
                <Menu.Item key="Terminal:4" style={{color: '#ffffff'}}>Run Build Task...</Menu.Item>
                <Menu.Item key="Terminal:5" style={{color: '#ffffff'}}>Run Active File</Menu.Item>
                <Menu.Item key="Terminal:6" style={{color: '#ffffff'}}>Run Selected Text</Menu.Item>
                </SubMenu>
                <SubMenu key="Help" style={{color: '#ffffff'}} title="Help">
                <Menu.Item key="Help:1" style={{color: '#ffffff'}}>Welcome</Menu.Item>
                <Menu.Item key="Help:2" style={{color: '#ffffff'}}>Interactive Playground</Menu.Item>
                <Menu.Item key="Help:3" style={{color: '#ffffff'}}>Documentation</Menu.Item>
                <Menu.Item key="Help:4" style={{color: '#ffffff'}}>Release Notes</Menu.Item>
                <Menu.Item key="Help:5" style={{color: '#ffffff'}}>View License</Menu.Item>
                <Menu.Item key="Help:6" style={{color: '#ffffff'}}>Privacy Statement</Menu.Item>
                <Menu.Item key="Help:7" style={{color: '#ffffff'}}>About</Menu.Item>
                </SubMenu>
                <Menu.Item key="title" selectable={false} style={{color: '#ffffff', fontSize: '13px'}}>
                FrancescoSantini.js - Visual Studio Code
                </Menu.Item>
            </Menu>
        </div>
    );
}