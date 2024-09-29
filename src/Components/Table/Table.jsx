
import React from 'react';

const Table = ({ headers, data }) => {
  return (
    <div className='table-container'>
      <div className='header d-flex w-100'>
        {headers.map((header,index)=>(
          <div key={index} className='header-row p-2' style={{width:header.width}}>
            {header.label}
            </div>
        ))}
      </div>
      <div className='table-content'>
        {data.map((row,rowIndex)=>(
          <div className='row d-flex w-100' key={rowIndex}>
            {row.map((cell,cellIndex)=>(
              <div key={cellIndex} className='col p-2' 
              style={{width:headers[cellIndex].width}}>{cell}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table