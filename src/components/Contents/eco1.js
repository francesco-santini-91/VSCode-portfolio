import React from 'react';
import { Typography, Carousel } from 'antd';
import img1 from './eco1.png';
import img2 from './eco2.png';
import img3 from './eco3.png';
import img4 from './eco4.png';
import img5 from './eco5.png';
import './contents.css';

const { Title } = Typography;

export default function eco1() {
    return(
        <div className="eco1" style={{color: '#ffffff', paddingLeft: '10px', paddingRight: '20px', overflowY: 'scroll', marginTop: '30px', marginBottom: '200px', position: 'relative'}}>
            <br />
            <Title level={2} style={{color: '#ffffff'}}>Eco di Bugliano - Descrizione</Title>
            <br />
            <p style={{textAlign: 'justify'}}>
                L' Eco di Bugliano è una testata giornalistica fittizia, creata per la pagina Facebook satirica "Comune di Bugliano".
                Il Comune di Bugliano, infatti, è inesistente, esattamente come le notizie riportate dal sito del giornale.
                <br />
                La struttura del sito è composta da una barra superiore, contenente il menù (a scomparsa nei mobile device), nella quale 
                sono presenti le varie categorie.
                Di default, il sito propone la sezione "Ultime notizie", la quale contiene le ultime notizie pubblicate, a prescindere dalla categoria appartenente.
                <br />
                Le notizie possono essere pubblicate esclusivamente dagli Admin, dopo essersi autenticati tramite le loro credenziali.
                Ogni articolo è formato da un titolo (obbligatorio, in quanto verrà utilizzato per la creazione dell'URL), un sottotitolo, 
                una immagine, una categoria di appartenenza, la data di pubblicazione e naturalmente un contenuto. Il nome dell'autore, immutabile, è recuperato dalle credenziali utente.
                Una volta pubblicata la notizia, essa sarà editabile o removibile esclusivamente dall'autore o da un utente Super User.
                <br />
                Gli utenti, anche non autenticati, potranno cliccare il tasto "Mi Piace", aggiornandone così il contatore relativo.
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