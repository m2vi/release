const Complete = () => {
  return (
    <div className='art' id='complete'>
      <dl className='form-row'>
        <dt>
          <label htmlFor='ctitle'>Filmtitel</label>
        </dt>
        <dd>
          <input type='text' id='ctitle' name='ctitle' autoComplete='off' />
          <div className='form-row-explain'>Bitte gib den deutschen Filmtitel an</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='cyear'>Produktionsjahr</label>
        </dt>
        <dd>
          <input type='text' id='cyear' name='cyear' />
          <div className='form-row-explain'>Gib hier an, wann der Film produziert wurde</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='ccut'>Cut</label>
        </dt>
        <dd>
          <input type='text' id='ccut' name='ccut' autoComplete='off' />
          <div className='form-row-explain'>Optional: Trage hier, falls zutreffend, den Cut ein (z.B. DC, Extended o.ä,)</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='clanguage'>Anzahl der Sprachen</label>
        </dt>
        <dd>
          <select name='clanguage' id='clanguage' className='expand'>
            <option value=''>--- Bitte wählen ---</option>
            <option value='German'>1 Sprache (Nur Deutsch)</option>
            <option value='Non'>1 Sprache (Non German)</option>
            <option value='Dual'>2 Sprachen</option>
            <option value='Multi'>mehr als 2 Sprachen</option>
          </select>
          <div className='form-row-explain'>
            Gib hier an, wieviele verschiedene Tonspur-Sprachen dein Release enthält, z.B. Deutsch &amp; Englisch = 2
          </div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='cart'>Complete / Custom</label>
        </dt>
        <dd>
          <select name='cart' id='cart' className='expand'>
            <option value=''>--- Bitte wählen ---</option>
            <option value='Complete'>Complete, Disc ist untouched</option>
            <option value='Custom'>Custom, Disc wurde selber erstellt</option>
          </select>
          <div className='form-row-explain'>Gib hier an, ob es sich um eine Complete oder Custom-Disc handelt</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='cmedium'>Medium</label>
        </dt>
        <dd>
          <select name='cmedium' id='cmedium' className='expand'>
            <option value=''>--- Bitte wählen ---</option>
            <option value='BluRay'>Blu-ray</option>
            <option value='PAL DVD'>PAL DVD</option>
            <option value='NTSC DVD'>NTSC DVD</option>
          </select>
          <div className='form-row-explain'>Gib an, ob es sich um eine DVD oder Blu-ray handelt</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='crlsgrp'>Releaser</label>
        </dt>
        <dd>
          <input type='text' id='crlsgrp' name='crlsgrp' />
          <div className='form-row-explain'>Optional: Gib hier die / deine Releasegruppe an</div>
        </dd>
      </dl>
      <dl className='form-row threadtitel' style={{ display: 'none' }}>
        <dd>
          <input type='text' id='cthreadtitel' name='cthreadtitel' onClick={(inp) => inp.currentTarget.select()} />
        </dd>
      </dl>

      <dl className='form-row last-row'>
        <dt></dt>
        <dd>
          <button className='generate' data-art='complete'>
            Threadtitel generieren
          </button>
        </dd>
      </dl>
    </div>
  );
};

export default Complete;
