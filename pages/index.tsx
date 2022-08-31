import type { NextPage } from 'next';
import { useState } from 'react';
import Container from '../components/Container';
import Movie from '../components/forms/movie';

const Home: NextPage = () => {
  const [selected, setSelected] = useState('movie');

  return (
    <Container>
      <dl className='form-row'>
        <dt>
          <label htmlFor='title'>Art des Releases</label>
        </dt>
        <dd>
          <select
            id='selector'
            name='art'
            className='expand'
            onChange={(e) => {
              console.log(setSelected(e.currentTarget.value), e.currentTarget.value);
            }}
            defaultValue={selected}
          >
            <option value=''>--- Bitte wählen ---</option>
            <option value='movie'>Film</option>
            <option value='tv'>Serie</option>
            <option value='complete'>Complete / Custom (DVD / Blu-ray)</option>
          </select>
          <div className='form-row-explain'>Bitte wähle aus, um was es sich bei deinem Release handelt</div>
        </dd>
      </dl>

      {selected === 'movie' && <Movie />}
    </Container>
  );
};

export default Home;
