import React from 'react';
import { Typography } from 'antd';
import './contents.css';

const { Title } = Typography;

export default function pf1() {
    return(
        <div className="eco1" style={{color: '#ffffff', paddingLeft: '10px', paddingRight: '20px', overflowY: 'scroll', marginTop: '30px', marginBottom: '200px', position: 'relative'}}>
            <br />
            <Title level={2} style={{color: '#ffffff'}}>Portfolio - Descrizione</Title>
            <br />
            <p style={{textAlign: 'justify'}}>
                Ho deciso di rendere originale il mio portfolio ricreando la schermata di Microsoft Visual Studio Code.<br />
                Selezionando un "file" dal menù a sinistra è possibile consultare le mie informazioni, sia personali che professionali. Naturalmente è presente una sezione denominata 
                "Curriculum classico" nella quale è possibile visualizzare il mio curriculum in formato standard.<br />
                Seppur conoscendo le tecniche relative al responsive design, questo sito, proprio a causa dell'idea di ricreare VS Code, è ottimizzato per la visualizzazione desktop.<br /><br />

            </p>
        </div>
    );
}