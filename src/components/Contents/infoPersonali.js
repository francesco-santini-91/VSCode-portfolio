import React from 'react';
import { SolutionOutlined } from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';
import './contents.css';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2076120_vsq9h8itswh.js',
  });

export default function infoPersonali() {
    return(
    <div className="InfoPersonali" style={{overflowY: 'scroll', marginTop: '30px', marginBottom: '200px', position: 'relative'}}>
        <p><span style={{color: '#aaaaaa', position: 'fixed', backgroundColor: '#242323', width: '100%'}}> home &#62; <SolutionOutlined /> curriculum &#62; <IconFont type="iconcode" /> Info_Personali.html</span></p>
        <div style={{padding: '1px'}}>
        <br />
        <pre>
            <span style={{color: '#aaaaaa'}}> 1 &#09; </span>
            <span style={{color: '#ffffff'}}>&#60;!</span>
            <span style={{color: '#ff0080'}}>DOCTYPE </span>
            <span style={{color: '#00ff00'}}>html</span>
            <span style={{color: '#ffffff'}}>&#62;</span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}> 2 &#09; </span>
            <span style={{color: '#ffffff'}}>&#60;</span>
            <span style={{color: '#ff0080'}}>html </span>
            <span style={{color: '#00ff00'}}>lang</span>
            <span style={{color: '#ffffff'}}>=</span>
            <span style={{color: '#ffff00'}}>&#34;it&#34;</span>
            <span style={{color: '#ffffff'}}>&#62;</span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}> 3 &#09; &#09; &#09;</span>
            <span style={{color: '#ffffff'}}>&#60;</span>
            <span style={{color: '#ff0080'}}>head</span>
            <span style={{color: '#ffffff'}}>&#62;</span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}> 4 &#09; &#09; &#09; &#09; &#09;</span>
            <span style={{color: '#ffffff'}}>&#60;</span>
            <span style={{color: '#ff0080'}}>nome</span>
            <span style={{color: '#ffffff'}}>&#62; Francesco &#60;/</span>
            <span style={{color: '#ff0080'}}>nome</span>
            <span style={{color: '#ffffff'}}>&#62;</span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}> 5 &#09; &#09; &#09; &#09; &#09;</span>
            <span style={{color: '#ffffff'}}>&#60;</span>
            <span style={{color: '#ff0080'}}>cognome</span>
            <span style={{color: '#ffffff'}}>&#62; Santini &#60;/</span>
            <span style={{color: '#ff0080'}}>cognome</span>
            <span style={{color: '#ffffff'}}>&#62;</span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}> 6 &#09; &#09; &#09; &#09; &#09;</span>
            <span style={{color: '#ffffff'}}>&#60;</span>
            <span style={{color: '#ff0080'}}>dataDiNascita</span>
            <span style={{color: '#ffffff'}}>&#62; 14/08/1991 &#60;/</span>
            <span style={{color: '#ff0080'}}>dataDiNascita</span>
            <span style={{color: '#ffffff'}}>&#62;</span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}> 7 &#09; &#09; &#09;</span>
            <span style={{color: '#ffffff'}}>&#60;/</span>
            <span style={{color: '#ff0080'}}>head</span>
            <span style={{color: '#ffffff'}}>&#62;</span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}> 8 &#09; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}> 9 &#09; &#09; &#09;</span>
            <span style={{color: '#ffffff'}}>&#60;</span>
            <span style={{color: '#ff0080'}}>body</span>
            <span style={{color: '#ffffff'}}>&#62;</span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>10 &#09; &#09; &#09; &#09; &#09;</span>
            <span style={{color: '#ffffff'}}>&#60;</span>
            <span style={{color: '#ff0080'}}>indirizzo</span>
            <span style={{color: '#ffffff'}}>&#62; via G. Pascoli, 6 &#60;/</span>
            <span style={{color: '#ff0080'}}>indirizzo</span>
            <span style={{color: '#ffffff'}}>&#62;</span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>11 &#09; &#09; &#09; &#09; &#09;</span>
            <span style={{color: '#ffffff'}}>&#60;</span>
            <span style={{color: '#ff0080'}}>citta</span>
            <span style={{color: '#ffffff'}}>&#62; Piombino &#60;/</span>
            <span style={{color: '#ff0080'}}>citta</span>
            <span style={{color: '#ffffff'}}>&#62;</span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>12 &#09; &#09; &#09; &#09; &#09;</span>
            <span style={{color: '#ffffff'}}>&#60;</span>
            <span style={{color: '#ff0080'}}>prov</span>
            <span style={{color: '#ffffff'}}>&#62; LI &#60;/</span>
            <span style={{color: '#ff0080'}}>prov</span>
            <span style={{color: '#ffffff'}}>&#62;</span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>13 &#09; &#09; &#09; &#09; &#09;</span>
            <span style={{color: '#ffffff'}}>&#60;</span>
            <span style={{color: '#ff0080'}}>CAP</span>
            <span style={{color: '#ffffff'}}>&#62; 57025 &#60;/</span>
            <span style={{color: '#ff0080'}}>CAP</span>
            <span style={{color: '#ffffff'}}>&#62;</span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>14 &#09; &#09; &#09; &#09; &#09;</span>
            <span style={{color: '#ffffff'}}>&#60;</span>
            <span style={{color: '#ff0080'}}>email</span>
            <span style={{color: '#ffffff'}}>&#62; francesco-santini@live.it &#60;/</span>
            <span style={{color: '#ff0080'}}>email</span>
            <span style={{color: '#ffffff'}}>&#62;</span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>15 &#09; &#09; &#09;</span>
            <span style={{color: '#ffffff'}}>&#60;/</span>
            <span style={{color: '#ff0080'}}>body</span>
            <span style={{color: '#ffffff'}}>&#62;</span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>16 &#09; </span>
            <span style={{color: '#ffffff'}}>&#60;/</span>
            <span style={{color: '#ff0080'}}>html</span>
            <span style={{color: '#ffffff'}}>&#62;</span>
        </pre>
        <pre><span style={{color: '#aaaaaa'}}>17 &#09; </span></pre>
        <pre><span style={{color: '#aaaaaa'}}>18 &#09; </span></pre>
        </div>
    </div>);
}