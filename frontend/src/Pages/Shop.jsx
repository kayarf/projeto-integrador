import React from 'react'
import Main from '../Components/Main/Main';
import Popular from '../Components/Popular/Popular';
import Lancamentos from '../Components/Lançamentos/Lancamentos';
import { NewsLetter } from '../Components/NewLetters/NewsLetter';

const Shop = () => {
  return (
    <div>
      <Main></Main>
      <Popular></Popular>
      <Lancamentos></Lancamentos>
      <NewsLetter></NewsLetter>
    </div>
  )
}

export default Shop
