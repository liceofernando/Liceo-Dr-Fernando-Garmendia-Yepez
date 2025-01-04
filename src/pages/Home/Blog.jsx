import React, { useState } from 'react'


const Blog = () => {
    const [data, setData] = useState([
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
      ]);
    
      const handleChange = (event, rowIndex, columnIndex) => {
        const newData = [...data]; // Crea una copia del estado actual
        newData[rowIndex][columnIndex] = event.target.value; // Actualiza el valor de la celda
        setData(newData); // Actualiza el estado con la nueva información
      };

  return(
        <div> 
            <table>
        <thead>
          <tr>
            <th>Hora</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((value, columnIndex) => (
                <td key={`${rowIndex}-${columnIndex}`}>
                  <input
                    type="text"
                    value={value}
                    onChange={(event) => handleChange(event, rowIndex, columnIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    )
}

export default Blog























