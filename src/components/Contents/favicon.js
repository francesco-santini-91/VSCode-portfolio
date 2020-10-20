import React from 'react';
import { SolutionOutlined } from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';
import { Avatar } from 'antd';
import pic from './pic.jpg';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2076120_vsq9h8itswh.js',
  });

export default function favicon() {
    return(
            <div className="Readme" style={{overflowY: 'scroll', marginTop: '30px', marginBottom: '200px', position: 'relative'}}>
            <p><span style={{color: '#aaaaaa', position: 'fixed', backgroundColor: '#242323', width: '100%'}}> home &#62; <SolutionOutlined /> curriculum &#62; <IconFont type="iconstar" /> Altre_Info.js</span></p>
                <div style={{padding: '1px'}}>
                <br />
                <div className="favicon" style={{textAlign: 'center'}}>
                    <Avatar style={{marginTop: '35px'}} size={250} src={pic} />
                </div>
            </div>
        </div>
    );
}