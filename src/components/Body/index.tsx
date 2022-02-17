import React from 'react';
import Ripples from 'react-ripples';

import './styles.css';

// import { Container } from './styles';

const Body: React.FC = () => (
  <main className="flex flex-1 flex-row h-full w-full">
    <section className="flex flex-col p-20 w-[620px] max-w-full items-start gap-8 bg-[#fffff4] custom-section">
      <h1 className="text-[#383835] drop-shadow-sm font-bold text-8xl text-center">
        Apenas curta este sabor!
      </h1>
      <p className="text-justify mt-4">
        O café Barista é o nosso mais novo produto desenvolvido para você que é
        desenvolvedor. O foco deste produto está na qualidade da nossa lavoura,
        o que traz para você além de sabor, uma experiência extremamente
        satisfatória no que diz respeito à produtividade, pois, nosso produto,
        faz com que seu dia pareça ter 36 horas de duração.
      </p>

      <div className="flex w-full flex-col items-start gap-1 mt-10">
        <h2 className="font-bold w-full text-left text-4xl mt-5 text-[#383835]">
          Gostaria de uma degustação?
        </h2>
        <h3 className="w-full text-left">
          Cadastre seu email abaixo e receba em casa.
        </h3>
      </div>

      <div className="flex flex-col w-full items-start gap-8">
        <input
          type="text"
          placeholder="Digite seu nome"
          className="w-full p-5 rounded-2xl border-2 border-solid border-neutral-400 bg-transparent placeholder-neutral-400"
        />
        <input
          type="text"
          placeholder="Digite seu email"
          className="w-full p-5 rounded-2xl border-2 border-solid border-neutral-400 bg-transparent placeholder-neutral-400"
        />
        <Ripples className="w-full rounded-2xl shadow-lg">
          <button
            type="button"
            className="bg-[#09462e]  hover:bg-[#138656] text-white font-bold py-6 px-4 rounded-2xl w-full "
          >
            Receber em minha casa!
          </button>
        </Ripples>
      </div>
    </section>
    <section className="flex flex-1 custom-section-2 h-full bg-[url('/src/assets/images/imgMock.jpg')] bg-cover bg-clip-content bg-no-repeat bg-right" />
  </main>
);

export { Body };
