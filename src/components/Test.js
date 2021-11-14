import React from 'react'
import ExportOne from './ExportOne';
import ExportTwo from './ExportTwo';

export default function Test() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 6fr)' }}>
            <ExportOne />
            <ExportTwo />
        </div>
    )
}
