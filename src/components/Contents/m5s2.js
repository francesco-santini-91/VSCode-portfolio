import React from 'react';
import { Typography } from 'antd';
import './contents.css';

const { Title } = Typography;

export default function m5s2() {
    return(
        <div className="eco1" style={{color: '#ffffff', paddingLeft: '10px', paddingRight: '20px', overflowY: 'scroll', marginTop: '30px', marginBottom: '200px', position: 'relative'}}>
            <br />
            <Title level={2} style={{color: '#ffffff'}}>M5S Piombino - Specifiche</Title>
            <br />
            <p>
                <span style={{fontWeight: 'bold'}}>BACKEND</span><br /><br />
                <ul>
                    <li>Linguaggio: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>Node.js</span><br /></li>
                    <li>Framework: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>Express.js</span><br /></li>
                    <li>Database: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>MongoDB</span><br /></li>
                    <li>Libreria database: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>mongoose</span><br /></li>
                    <li>Storage immagini: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>Amazon S3 Server</span><br /></li>
                    <li>Crittografia password: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>bcrypt.js</span><br /></li>
                    <li>Gestione autenticazione: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>jwt.io</span><br /></li>
                    <li>Invio mail di conferma: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>Nodemailer</span><br /></li>
                    <li>Gestione upload immagini: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>AWS SDK</span><br /><br /></li>
                </ul>
                <span style={{fontWeight: 'bold'}}>FRONTEND</span><br /><br />
                <ul>
                    <li>Framework: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>React.js</span><br /></li>
                    <li>API: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>Axios</span><br /></li>
                    <li>Design: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>Material UI</span><br /></li>
                    <li>Icone: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>Material UI Icons</span><br /></li>
                    <li>Formattazione testi e commenti: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>Draft.js</span><br /><br /></li>
                </ul>
                <span style={{fontWeight: 'bold'}}>ALTRO</span><br /><br />
                <ul>
                    <li>Hosting: &#09; &#09; <span style={{fontStyle: 'italic', color: '#ffec0e'}}>Heroku</span><br /></li>
                </ul>
            </p>
        </div>
    );
}