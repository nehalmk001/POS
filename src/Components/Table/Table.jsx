import React from 'react';

const Table = ({ headers, data, onRowClick }) => {
  return (
    <div className='table-container bg-white'>
      {/* Header */}
      <div className='header p-0 m-0' style={{ display: 'grid', gridTemplateColumns: headers.map(h => h.width).join(' ') }}>
        {headers.map((header, index) => (
          <div key={index} className='header-cell p-2'>
            {header.label}
          </div>
        ))}
      </div>

      {/* Table content */}
      <div className='table-content'>
        {data.map((row, rowIndex) => (
          <div
            className='table-row p-0 m-0'
            style={{ display: 'grid', gridTemplateColumns: headers.map(h => h.width).join(' ') }}
            key={rowIndex}
            onClick={() => onRowClick && onRowClick(row)} // Add row click only if onRowClick exists
          >
            {headers.map((header, cellIndex) => (
              <div key={cellIndex} className='cell p-2'>
                {/* If render function exists, use it, otherwise display data */}
                {header.render ? header.render(row[header.key], row) : row[header.key]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;

