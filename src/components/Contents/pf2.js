import React from 'react';
import { Typography } from 'antd';
import './contents.css';

const { Title } = Typography;

export default function pf2() {
    return(
        <div className="eco1" style={{color: '#ffffff', paddingLeft: '10px', paddingRight: '20px', overflowY: 'scroll', marginTop: '30px', marginBottom: '200px', position: 'relative'}}>
            <br />
            <Title level={2} style={{color: '#ffffff'}}>Portfolio - Specifiche</Title>
            <br />
            <p>
                <span style={{fontWeight: 'bold'}}>FRONTEND</span><br /><br />
                <ul>
                    <li>Framework: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>React.js</span><br /></li>
                    <li>Design: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>Ant Design</span><br /></li>
                    <li>Icone: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>iconfont.cn</span><br /></li>
                </ul>
                <span style={{fontWeight: 'bold'}}>ALTRO</span><br /><br />
                <ul>
                    <li>Hosting: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>Netlify</span><br /></li>
                </ul>
            </p>
        </div>
    );
}