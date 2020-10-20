import React from 'react';
import { Typography } from 'antd';
import './contents.css';

const { Title } = Typography;

export default function m5s3() {
    return(
        <div className="m5s3" style={{color: '#ffffff', paddingLeft: '10px', paddingRight: '20px', overflowY: 'scroll', marginTop: '30px', marginBottom: '768px', position: 'relative'}}>
            <br />
            <Title level={2} style={{color: '#ffffff'}}>M5S Piombino - Sito</Title>
            <br />
            <a href="https://m5s-piombino.herokuapp.com" target="_blank" rel="noopener noreferrer">Sito </a>
             - Sito provvisorio, in attesa di certificato SSL. <br />
             Il sito potrebbe impiegare qualche secondo durante il caricamento iniziale a causa del piano gratuito di Heroku.<br />
            <a href="https://github.com/francesco-santini-91/m5s-piombino" target="_blank" rel="noopener noreferrer">Codice </a>
             - Github<br />
        </div>
    );
}