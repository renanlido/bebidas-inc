import React from 'react';

import './index.css';

// import { Container } from './styles';

const Header: React.FC = () => (
  <header className="flex flex-1 justify-center h-6, border border-solid custom-header">
    <div className="flex flex-col">
      <h1>Bebidas</h1>
      <h2>Inc</h2>
    </div>
  </header>
);

export { Header };
