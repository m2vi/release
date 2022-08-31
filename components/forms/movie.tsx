import { useState } from 'react';
import { ReleaseInterface } from '../../types/main';
import release from '../../utils/release';

const Movie = () => {
  const [form, setForm] = useState<ReleaseInterface>({
    title: '',
    year: '',
    cut: '',
    german: '',
    dubbed: '',
    acodec: '',
    language: '',
    resolution: '',
    source: '',
    dv: '',
    hdr: '',
    vcodec: '',
    extras: '',
    releaseextras: '',
    rlsgrp: '',
  });
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    console.log(form);
  };

  return (
    <div className='art' id='movie'>
      <dl className='form-row'>
        <dt>
          <label htmlFor='mtitle'>Filmtitel</label>
        </dt>
        <dd>
          <input type='text' name='title' autoComplete='off' onChange={handleChange} />
          <div className='form-row-explain'>Bitte gib den deutschen Filmtitel an</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='year'>Produktionsjahr</label>
        </dt>
        <dd>
          <input type='text' name='year' onChange={handleChange} />
          <div className='form-row-explain'>Gib hier an, wann der Film produziert wurde</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='mcut'>Cut</label>
        </dt>
        <dd>
          <input type='text' name='cut' autoComplete='off' onChange={handleChange} />
          <div className='form-row-explain'>Optional: Trage hier, falls zutreffend, den Cut ein (z.B. DC, Extended o.ä,)</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='mgerman'>Deutsch</label>
        </dt>
        <dd>
          <select name='german' className='expand' onChange={handleChange}>
            <option value=''>--- Bitte wählen ---</option>
            <option value='German'>Ja, deutsches Release</option>
            <option value=''>Nein, fremdsprachiges Release</option>
          </select>
          <div className='form-row-explain'>Stelle bitte ein, ob es sich um ein deutsches Release handelt</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='dubbed'>Dubbed</label>
        </dt>
        <dd>
          <select name='dubbed' className='expand' onChange={handleChange}>
            <option value=''>--- Bitte wählen ---</option>
            <option value='Dubbed'>Ja, dubbed</option>
            <option value=''>Nein, nicht dubbed</option>
          </select>
          <div className='form-row-explain'>Stelle bitte ein, ob dein Release &quot;Dubbed&quot; ist</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='acodec'>Audiocodec</label>
        </dt>
        <dd>
          <select name='acodec' className='expand' onChange={handleChange}>
            <option value=''>--- Bitte wählen ---</option>
            <option value='AAC'>AAC</option>
            <option value='AC3'>AC3</option>
            <option value='EAC3'>DD+ / EAC3</option>
            <option value='DTS'>DTS</option>
            <option value='DTSHD'>DTSHD</option>
            <option value='DTSX'>DTS:X</option>
            <option value='TrueHD'>TrueHD</option>
            <option value='TrueHD.Atmos'>TrueHD Atmos</option>
            <option value='FLAC'>FLAC</option>
            <option value='MP3'>MP3</option>
            <option value='PCM'>PCM</option>
          </select>
          <div className='form-row-explain'>
            Wähle hier den Audiocoded der Haupt-Tonspur aus.
            <br />
            Bei einem deutschem Release bitte Audiocodec der deutschen Tonspur angeben!
          </div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='language'>Anzahl der Sprachen</label>
        </dt>
        <dd>
          <select name='language' className='expand' onChange={handleChange}>
            <option value=''>--- Bitte wählen ---</option>
            <option value=''>1 Sprache</option>
            <option value='DL'>2 Sprachen</option>
            <option value='ML'>mehr als 2 Sprachen</option>
          </select>
          <div className='form-row-explain'>
            Gib hier an, wieviele verschiedene Tonspur-Sprachen dein Release enthält, z.B. Deutsch &amp; Englisch = 2
          </div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='resolution'>Auflösung</label>
        </dt>
        <dd>
          <select name='resolution' className='expand' onChange={handleChange}>
            <option value=''>--- Bitte wählen ---</option>
            <option value='480p'>480p</option>
            <option value='576p'>576p</option>
            <option value='720p'>720p</option>
            <option value='1080p'>1080p</option>
            <option value='2160p'>2160p</option>
            <option value='UpsUHD'>Upscaled UHD</option>
          </select>
          <div className='form-row-explain'>Bitte stelle die Auflösung des Releases ein</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='source'>Source / Art</label>
        </dt>
        <dd>
          <select name='source' className='expand' onChange={handleChange}>
            <option value=''>--- Bitte wählen ---</option>
            <option value='UHD.BluRay'>UHD Bluray (UHD)</option>
            <option value='BluRay'>BluRay (HD)</option>
            <option value='DVD'>DVD (SD)</option>
            <option value='WEB'>Web-DL (SD / HD/ UHD)</option>
            <option value='WEBRip'>WEB-Rip (SD / HD/ UHD)</option>
            <option value='Hybrid'>Hybrid (SD / HD/ UHD)</option>
          </select>
          <div className='form-row-explain'>Bitte gib hier die Source / Art des Releases an</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='dv'>Dolby Vision</label>
        </dt>
        <dd>
          <select name='dv' className='expand' onChange={handleChange}>
            <option value=''>-</option>
            <option value='DV'>Dolby Vision</option>
          </select>
          <div className='form-row-explain'>Stelle bitte ein, ob das Release über Dolby Vision verfügt.</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='hdr'>HDR</label>
        </dt>
        <dd>
          <select name='hdr' className='expand' onChange={handleChange}>
            <option value=''>-</option>
            <option value='HDR'>HDR</option>
            <option value='HDR10Plus'>HDR10+</option>
            <option value='SDR'>- (SDR)</option>
          </select>
          <div className='form-row-explain'>Stelle bitte ein, ob das Release SDR oder HDR ist.</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='vcodec'>Videocodec</label>
        </dt>
        <dd>
          <select name='vcodec' className='expand' onChange={handleChange}>
            <option value=''>--- Bitte wählen ---</option>
            <option value='x264'>x264</option>
            <option value='AVC'>AVC</option>
            <option value='x265'>x265</option>
            <option value='HEVC'>HEVC</option>
            <option value='MPEG'>MPEG</option>
            <option value='VC1'>VC-1</option>
          </select>
          <div className='form-row-explain'>Stelle hier den Videocodec (x264 / x265 = Encode / Rip, AVC / HEVC = Untouched / Remux)</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='extras'>Zusätze</label>
        </dt>
        <dd>
          <select name='extras' id='extras' className='expand' onChange={handleChange}>
            <option value=''>-</option>
            <option value='Remux'>Remux</option>
            <option value='Untouched'>Untouched</option>
            <option value='Regraded'>Regraded</option>
            <option value='Upscale'>Upscale</option>
          </select>
          <div className='form-row-explain'>Stelle hier, falls zutreffend, die Zusätze ein</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='releaseextras'>Release Zusätze</label>
        </dt>
        <dd>
          <select name='releaseextras' className='expand' onChange={handleChange}>
            <option value=''>-</option>
            <option value='INTERNAL'>Internal</option>
            <option value='NUKED'>Nuked</option>
            <option value='PROPER'>Proper</option>
            <option value='REPACK'>Repack</option>
          </select>
          <div className='form-row-explain'>Stelle hier, falls zutreffend, die Zusätze ein</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='rlsgrp'>Releaser</label>
        </dt>
        <dd>
          <input type='text' name='rlsgrp' onChange={handleChange} />
          <div className='form-row-explain'>Optional: Gib hier die / deine Releasegruppe an</div>
        </dd>
      </dl>

      {result && (
        <dl className='form-row threadtitel'>
          <dd>
            <input type='text' readOnly value={result?.toString()} />
          </dd>
        </dl>
      )}

      <dl className='form-row last-row'>
        <dt></dt>
        <dd>
          <button className='generate' data-art='movie' onClick={() => setResult(release.create(form))}>
            Threadtitel generieren
          </button>
        </dd>
      </dl>
    </div>
  );
};

export default Movie;
