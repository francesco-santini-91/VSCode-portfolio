import React from 'react';
import { Typography, Carousel } from 'antd';
import './contents.css';
import img1 from './m5s1.png';
import img2 from './m5s2.png';
import img3 from './m5s3.png';
import img4 from './m5s4.png';
import img5 from './m5s5.png';

const { Title } = Typography;

export default function m5s1() {
    return(
        <div className="eco1" style={{color: '#ffffff', paddingLeft: '10px', paddingRight: '20px', overflowY: 'scroll', marginTop: '30px', marginBottom: '200px', position: 'relative'}}>
            <br />
            <Title level={2} style={{color: '#ffffff'}}>M5S Piombino - Descrizione</Title>
            <br />
            <p style={{textAlign: 'justify'}}>
                La web app, realizzata per la sezione del Movimento 5 Stelle di Piombino, consente ai cittadini di rimanere aggiornati riguardo l'attività consiliare.
                Tramite il sito, infatti, è possibile leggere i comunicati e visualizzare gli eventi in programma. Gli utenti che decidono di registrarsi al sito, oltre che 
                commentare i comunicati potranno anche partecipare ai sondaggi, esprimendo la propria preferenza.<br />
                Per procedere alla registrazione, l'utente, oltre ad inserire le proprie generalità, dovrà scegliere uno username ed inserire la propria email: 
                se nessuna di queste ultime due informazioni sono già state utilizzate, l'utente riceverà, all'indirizzo di posta elettronica indicato, una mail 
                contenente un link, il quale servirà a completare la registrazione.
                Il link allegato alla mail, è di fatto un token con validità limitata a 60 minuti, la cui necessità risiede nel voler limitare l'iscrizione ad account fasulli.<br />
                Fino a che l'account non verrà confermato, l'utente non avrà la possibilità né di commentare, né di votare i sondaggi.<br />
                Gli utenti ADMIN, hanno facoltà di creare contenuti quali comunicati, eventi e sondaggi. Potranno anche editarli ed eliminarli, a patto che siano stati creati da loro 
                stessi e non da altri utenti ADMIN.
                Gli utenti SUPER USER, invece, hanno facoltà di editare ed eliminare qualsiasi contenuto, oltre che a poter modificare i diritti di tutti gli altri utenti.
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