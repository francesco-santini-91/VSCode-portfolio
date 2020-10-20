import React from 'react';
import { Typography, Carousel } from 'antd';
import './contents.css';
import img1 from './sx1.png';
import img2 from './sx2.png';
import img3 from './sx3.png';
import img4 from './sx4.png';
import img5 from './sx5.png';

const { Title } = Typography;

export default function sx1() {
    return(
        <div className="sx1" style={{color: '#ffffff', paddingLeft: '10px', paddingRight: '20px', overflowY: 'scroll', marginTop: '30px', marginBottom: '200px', position: 'relative'}}>
            <br />
            <Title level={2} style={{color: '#ffffff'}}>Programma spaziale SpaceX - Descrizione</Title>
            <br />
            <p style={{textAlign: 'justify'}}>
                La mobile App "Programma Spaziale SpaceX", consente la consultazione di tutte le informazioni relative ai lanci, sia passati che futuri, dell'azienda "SpaceX" di Elon Musk.<br />
                Nella Home dell' App, è possibile selezionare la card contenente le informazioni sul prossimo lancio o scegliere di visualizzare le liste dei lanci già effettuati e di quelli in programma.
                Le informazioni contenute, comprensive di immagini, sono recuperati tramite le API fornite da github.com/r-spacex/SpaceX-API.
                <br />
                <br />
                L'applicazione, nonostante sia stata svilippata in React Native e quindi compatibile con sistemi sia Android che Apple, è disponibile momentaneamente solo su Google Play Store.<br />
                <a href="https://github.com/francesco-santini-91/programma-spaziale-spacex" target="_blank" rel="noopener noreferrer">Codice </a>
             - Github<br />
            </p>
            <Carousel autoplay dotPosition='right' style={{textAlign: '-webkit-center', zIndex: 0}}>
                <div>
                    <img src={img1} alt="" style={{height: '380px'}} />
                </div>
                <div>
                    <img src={img2} alt="" style={{height: '380px'}} />
                </div>
                <div>
                    <img src={img3} alt="" style={{height: '380px'}} />
                </div>
                <div>
                    <img src={img4} alt="" style={{height: '380px'}} />
                </div>
                <div>
                    <img src={img5} alt="" style={{height: '380px'}} />
                </div>
            </Carousel>
        </div>
    );
}