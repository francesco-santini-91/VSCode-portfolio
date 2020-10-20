import React, { useState } from 'react';
import { Menu, Badge } from 'antd';
import { createFromIconfontCN, CloseOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Terminal.css';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2076120_vsq9h8itswh.js',
  });

export default function Terminal(props) {
    const [terminalTab, setTerminalTab] = useState(0);

    const getContent = (_terminalTab) => {
        switch(_terminalTab) {
            case 0:
                return(
                    <div style={{textAlign: 'left', padding: '3px', fontSize: '13px', fontWeight: 'lighter'}}>
                        <pre><span style={{color: '#ffffff'}}>&#09; You can now view <span style={{fontWeight: 'bold'}}>my portfolio</span> in the browser. &nbsp; &nbsp; &nbsp;&nbsp;</span></pre>
                        <br />
                        <pre><span style={{color: '#ffffff'}}>&#09; &#09; &#09; &#09; <strong>Local</strong>: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;http://www.francesco-santini.it &nbsp; &nbsp; &nbsp;&nbsp;</span></pre>
                        <pre><span style={{color: '#ffffff'}}>&#09; &#09; &#09; &#09; <strong>On Your Network</strong>: &nbsp;http://www.francesco-santini.it &nbsp; &nbsp;&nbsp;</span></pre>
                        <br />
                        <pre><span style={{color: '#ffffff'}}>&#09; Note that the developer is not optimized.</span></pre>
                        <pre><span style={{color: '#ffffff'}}>&#09; To create a professional dev, use </span><span style={{color: '#00ffff'}}>yarn hire me</span><span style={{color: '#ffffff'}}>.</span> </pre>    
                    </div>       
                );
            case 1:
                return(
                    <div style={{textAlign: 'left', padding: '3px', fontSize: '13px', fontWeight: 'lighter'}}>
                         <pre><span style={{color: '#ffffff'}}>&#09; <IconFont type="iconcodebraces" /> Esperienza_Professionale.json</span></pre>
                         <pre><span style={{color: '#aaaaaa'}}>&#09; &#09; &#09; Value expected. [41, 33]</span></pre>
                    </div>
                );
            case 2:
                return(
                    <div style={{textAlign: 'left', padding: '3px', fontSize: '13px', fontWeight: 'lighter'}}>
                            <pre><span style={{color: '#ffffff'}}>&#09; |</span></pre>
                    </div>
                );
            case 3:
                return(
                    <div style={{textAlign: 'left', padding: '3px', fontSize: '13px', fontWeight: 'lighter', marginTop: '130px'}}>
                        <hr></hr>
                         <pre><span style={{color: '#ffffff'}}>&#09; &#62; </span><span style={{color: 'grey'}}>Please start a debug session to evaluate expressions</span></pre>
                    </div>
                );
            default:
                return(<div></div>);
        }
    }

    return(
        <div className="Terminal" style={{marginLeft: props.margin__left, display: props.state === false ? 'none' : ''}}>
            <Menu defaultSelectedKeys={'Bottom:1'} mode="horizontal" style={{height: '30px', padding: '3px'}}>
                <Menu.Item key="Bottom:1" onClick={() => setTerminalTab(0)} style={{fontSize: '12px'}}>TERMINAL</Menu.Item>
                <Menu.Item key="Bottom:2" onClick={() => setTerminalTab(1)} style={{fontSize: '12px'}}>PROBLEMS 
                    <Badge count={1} size="small" style={{backgroundColor: '#505050', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset',marginLeft: '3px', marginBottom: '3px', fontSize: '9px'}} />
                </Menu.Item>
                <Menu.Item key="Bottom:3" onClick={() => setTerminalTab(2)} style={{fontSize: '12px'}}>OUTPUT</Menu.Item>
                <Menu.Item key="Bottom:4" onClick={() => setTerminalTab(3)} style={{fontSize: '12px'}}>DEBUG CONSOLE</Menu.Item>
                <Menu.Item key="Bottom:5" onClick={() => props.manageTerminal(false)} style={{fontSize: '12px', float: 'right'}}><CloseOutlined /></Menu.Item>
            </Menu>
             {getContent(terminalTab)}
        </div>
    );
    
}