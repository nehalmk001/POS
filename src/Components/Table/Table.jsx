import React from 'react';

const Table = ({ headers, data,onRowClick }) => {
  return (
    <div className='table-container bg-white'>
      {/* Header */}
      <div className='header p-0 m-0' style={{display: 'grid', gridTemplateColumns: headers.map(h => h.width).join(' ') }}>
        {headers.map((header, index) => (
          <div key={index} className='header-cell p-2'>
            {header.label}
          </div>
        ))}
      </div>

      {/* Table content */}
      <div className='table-content'>
        {data.map((row, rowIndex) => (
          <div className='row p-0 m-0' style={{ display: 'grid', gridTemplateColumns: headers.map(h => h.width).join(' ') }} key={rowIndex}  onClick={()=>onRowClick(row)}>
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className='cell p-2'>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
