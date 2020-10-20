import React from 'react';
import { Typography } from 'antd';
import './contents.css';

const { Title } = Typography;

export default function eco3() {
    return(
        <div className="eco1" style={{color: '#ffffff', paddingLeft: '10px', paddingRight: '20px', overflowY: 'scroll', marginTop: '30px', marginBottom: '768px', position: 'relative'}}>
            <br />
            <Title level={2} style={{color: '#ffffff'}}>Eco di Bugliano - Sito</Title>
            <br />
            <a href="http://www.ecodibugliano.it" target="_blank" rel="noopener noreferrer">Sito </a>
             - Il sito potrebbe impiegare qualche secondo durante il caricamento iniziale a causa del piano gratuito di Heroku.<br />
            <a href="https://github.com/francesco-santini-91/eco-di-bugliano" target="_blank" rel="noopener noreferrer">Codice </a>
             - Github<br />
        </div>
    );
}