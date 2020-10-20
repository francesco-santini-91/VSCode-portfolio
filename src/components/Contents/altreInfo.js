import React from 'react';
import { SolutionOutlined } from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';
import './contents.css';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2076120_vsq9h8itswh.js',
  });

export default function AltreInfo() {
    return(
        <div className="Readme" style={{overflowY: 'scroll', marginTop: '30px', marginBottom: '200px', position: 'relative'}}>
        <p><span style={{color: '#aaaaaa', position: 'fixed', backgroundColor: '#242323', width: '100%'}}> home &#62; <SolutionOutlined /> curriculum &#62; <IconFont type="iconsocialjavascript" /> Altre_Info.js</span></p>
        <div style={{padding: '1px'}}>
        <br />
        <pre>
            <span style={{color: '#aaaaaa'}}> 1 &#09; </span>
            <span style={{color: '#ff0080'}}>import </span>
            <span style={{color: '#ffffff'}}>React </span>
            <span style={{color: '#ff0080'}}>from </span>
            <span style={{color: '#ffed16'}}>'react'</span>
            <span style={{color: '#ffffff'}}>; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}> 2 &#09; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}> 3 &#09; </span>
            <span style={{color: '#ff0080'}}>export default </span>
            <span style={{color: '#00ffff', fontStyle: 'italic'}}>function </span>
            <span style={{color: '#00ff00'}}>getOtherInfos</span>
            <span style={{color: '#ffffff'}}>() &#123;</span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}> 4 &#09; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}> 5 &#09; &#09; &#09;</span>
            <span style={{color: '#00ffff', fontStyle: 'italic'}}>const </span>
            <span style={{color: '#ffffff'}}>Istruzione </span>
            <span style={{color: '#ff0080'}}>= </span>
            <span style={{color: '#ffed16'}}> &#34;I.T.I.S. Galileo Galilei, Livorno&#34;</span>
            <span style={{color: '#ffffff'}}>; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}> 6 &#09; &#09; &#09;</span>
            <span style={{color: '#00ffff', fontStyle: 'italic'}}>const </span>
            <span style={{color: '#ffffff'}}>Lingue </span>
            <span style={{color: '#ff0080'}}>= </span>
            <span style={{color: '#ffffff'}}>&#91; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}> 7 &#09; &#09; &#09; &#09; &#09;</span>
            <span style={{color: '#ffffff'}}>&#123; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}> 8 &#09; &#09; &#09; &#09; &#09; &#09; &#09;</span>
            <span style={{color: '#dddddd'}}>Lingua: </span>
            <span style={{color: '#ffed16'}}>"Italiano"</span>
            <span style={{color: '#ffffff'}}>, </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}> 9 &#09; &#09; &#09; &#09; &#09; &#09; &#09;</span>
            <span style={{color: '#dddddd'}}>Scritto: </span>
            <span style={{color: '#ffed16'}}>"Ottimo"</span>
            <span style={{color: '#ffffff'}}>, </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>10 &#09; &#09; &#09; &#09; &#09; &#09; &#09;</span>
            <span style={{color: '#dddddd'}}>Parlato: </span>
            <span style={{color: '#ffed16'}}>"Ottimo"</span>
            <span style={{color: '#ffffff'}}>, </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>11 &#09; &#09; &#09; &#09; &#09;</span>
            <span style={{color: '#ffffff'}}>&#125;, </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>12 &#09; &#09; &#09; &#09; &#09;</span>
            <span style={{color: '#ffffff'}}>&#123; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>13 &#09; &#09; &#09; &#09; &#09; &#09; &#09;</span>
            <span style={{color: '#dddddd'}}>Lingua: </span>
            <span style={{color: '#ffed16'}}>"Inglese"</span>
            <span style={{color: '#ffffff'}}>, </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>14 &#09; &#09; &#09; &#09; &#09; &#09; &#09;</span>
            <span style={{color: '#dddddd'}}>Scritto: </span>
            <span style={{color: '#ffed16'}}>"Buono"</span>
            <span style={{color: '#ffffff'}}>, </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>15 &#09; &#09; &#09; &#09; &#09; &#09; &#09;</span>
            <span style={{color: '#dddddd'}}>Parlato: </span>
            <span style={{color: '#ffed16'}}>"Buono"</span>
            <span style={{color: '#ffffff'}}>, </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>16 &#09; &#09; &#09; &#09; &#09;</span>
            <span style={{color: '#ffffff'}}>&#123; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>17 &#09; &#09; &#09;</span>
            <span style={{color: '#ffffff'}}>&#93;; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>18 &#09; &#09; &#09;</span>
            <span style={{color: '#00ffff', fontStyle: 'italic'}}>let </span>
            <span style={{color: '#ffffff'}}>GitHub </span>
            <span style={{color: '#ff0080'}}>= </span>
            <span style={{color: '#ffed16'}}> &#34;github.com/francesco-santini-91&#34;</span>
            <span style={{color: '#ffffff'}}>; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>19 &#09; &#09; &#09;</span>
            <span style={{color: '#00ffff', fontStyle: 'italic'}}>let </span>
            <span style={{color: '#ffffff'}}>Telefono </span>
            <span style={{color: '#ff0080'}}>= </span>
            <span style={{color: '#C45AEC'}}>3889560793</span>
            <span style={{color: '#ffffff'}}>; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>20 &#09; &#09; &#09;</span>
            <span style={{color: '#00ffff', fontStyle: 'italic'}}>let </span>
            <span style={{color: '#ffffff'}}>Hobby </span>
            <span style={{color: '#ff0080'}}>= </span>
            <span style={{color: '#ffffff'}}>&#91;</span>
            <span style={{color: '#ffed16'}}>&#34;Running&#34;</span>
            <span style={{color: '#ffffff'}}>, </span>
            <span style={{color: '#ffed16'}}> &#34;Fotografia&#34;</span>
            <span style={{color: '#ffffff'}}>, </span>
            <span style={{color: '#ffed16'}}> &#34;Viaggi&#34;</span>
            <span style={{color: '#ffffff'}}>&#93;</span>
            <span style={{color: '#ffffff'}}>; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>21 &#09; &#09; &#09;</span>
            <span style={{color: '#00ffff', fontStyle: 'italic'}}>const </span>
            <span style={{color: '#ffffff'}}>Patente </span>
            <span style={{color: '#ff0080'}}>= </span>
            <span style={{color: '#ffed16'}}> &#34;B&#34;</span>
            <span style={{color: '#ffffff'}}>; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>22 &#09; &#09; &#09;</span>
            <span style={{color: '#00ffff', fontStyle: 'italic'}}>const </span>
            <span style={{color: '#ffffff'}}>Automunito </span>
            <span style={{color: '#ff0080'}}>= </span>
            <span style={{color: '#C45AEC'}}>true</span>
            <span style={{color: '#ffffff'}}>; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>23 &#09; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>24 &#09; &#09; &#09;</span>
            <span style={{color: '#ff0080'}}>return</span>
            <span style={{color: '#ffffff'}}>; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>25 &#09; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>26 &#09; </span>
            <span style={{color: '#ffffff'}}>&#125; </span>
        </pre>
        <pre>
            <span style={{color: '#aaaaaa'}}>27 &#09; </span>
        </pre>
        </div>
    </div>);
}