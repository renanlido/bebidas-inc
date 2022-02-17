import React from 'react';

import './styles.css';

// import { Container } from './styles';

const Header: React.FC = () => (
  <header className="custom-header flex flex-1 justify-start items-center  border-[#eee8d2] border-b border-solid">
    <div className="flex flex-col p-8 mb-[-6px] font-['Monoton'] text-5xl text-[#5c584c]">
      B.INC
    </div>
    <h1 className="pl-12 text-5xl p-8 font-['Manrope'] border-[#eee8d2] border-l border-solid text-[#5c584c] drop-shadow-sm underline">
      Bebidas Inc
    </h1>
  </header>
);

export { Header };
