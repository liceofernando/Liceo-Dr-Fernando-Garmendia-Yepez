import React, { useState } from 'react';

const OrgChartNode = ({ title, name, onTitleChange, onNameChange }) => (
  <div style={{ margin: '10px', textAlign: 'center' }}>
    <input
      type="text"
      value={title}
      onChange={(e) => onTitleChange(e.target.value)}
      placeholder="Título"
    />
    <br />
    <input
      type="text"
      value={name}
      onChange={(e) => onNameChange(e.target.value)}
      placeholder="Nombre"
    />
  </div>
);

const Organigrama = () => {
  const [director, setDirector] = useState({ title: 'DIRECTOR', name: 'Prof. ALEXANDER DUDAMEL' });
  const [subDirAdmin, setSubDirAdmin] = useState({ title: 'SUB DIRECCION ADMINISTRATIVA', name: 'Prof. Yoilmar Terán' });
  const [departamentoBienestar, setDepartamentoBienestar] = useState({ title: 'DEPARTAMENTO DE BIENESTAR ESTUDIANTIL', name: '' });
  const [biblioteca, setBiblioteca] = useState({ title: 'BIBLIOTECA', name: '' });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <OrgChartNode
        title={director.title}
        name={director.name}
        onTitleChange={(title) => setDirector({ ...director, title })}
        onNameChange={(name) => setDirector({ ...director, name })}
      />
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        <OrgChartNode
          title={subDirAdmin.title}
          name={subDirAdmin.name}
          onTitleChange={(title) => setSubDirAdmin({ ...subDirAdmin, title })}
          onNameChange={(name) => setSubDirAdmin({ ...subDirAdmin, name })}
        />
        <OrgChartNode
          title={departamentoBienestar.title}
          name={departamentoBienestar.name}
          onTitleChange={(title) => setDepartamentoBienestar({ ...departamentoBienestar, title })}
          onNameChange={(name) => setDepartamentoBienestar({ ...departamentoBienestar, name })}
        />
        <OrgChartNode
          title={biblioteca.title}
          name={biblioteca.name}
          onTitleChange={(title) => setBiblioteca({ ...biblioteca, title })}
          onNameChange={(name) => setBiblioteca({ ...biblioteca, name })}
        />
      </div>
    </div>
  );
};

export default Organigrama;
