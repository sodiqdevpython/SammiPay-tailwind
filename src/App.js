import React from 'react';
import Navbar from './components/navbar';
import Home from './components/Home';
import Statistics from './components/Statistics';
import DoubleMenu from './components/DoubleMenu';
import Features from './components/Features';
import { billing, card } from './assets';
import Testominal from './components/Testominal';
import Card from './components/Card';

export default function App() {
  return (
    <div className='bg-primary w-full pb-52'>
      <Navbar />
      <Home />
      <Statistics />
      <DoubleMenu
        title={'Getting start within a few steps'}
        body={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores eligendi repellat autem sint odio enim. Illo modi tempore sed, velit tempora harum quia vel assumenda delectus eos cumque quibusdam id?'}
        image={billing}
      />
      <DoubleMenu
        title={'Manage all at once'}
        body={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores eligendi repellat autem sint odio enim. Illo modi tempore sed, velit tempora harum quia vel assumenda delectus eos cumque quibusdam id?'}
        image={card}
        direction={'flex-row-reverse relative'}
      />
      <Features />
      <Testominal />
      <Card title={'Lets try our services !'} body={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero beatae tenetur odit iure, provident, rem eaque fugit deleniti distinctio rerum qui eveniet officiis possimus aut tempore nam placeat quam quasi officia ab excepturi. Veniam, facilis! Dolor beatae, consectetur, voluptates quisquam odit ipsam itaque magni totam perspiciatis fuga, recusandae molestias suscipit.'} />
    </div>
  )
}
