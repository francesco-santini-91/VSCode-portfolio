import React from 'react';
import { PDFReader } from 'reactjs-pdf-reader';
import CV from './CV.pdf';
import './contents.css';

export default function CVClassico() {
    return(
        <div className="CVClassico" style={{overflowY: 'scroll', marginTop: '30px', marginBottom: '200px', position: 'relative'}}>
            <PDFReader url={CV} />
        </div>
    );
}