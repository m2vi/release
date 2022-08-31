const Tv = () => {
  return (
    <div className='art' id='tv'>
      <dl className='form-row'>
        <dt>
          <label htmlFor='stitle'>Serientitel</label>
        </dt>
        <dd>
          <input type='text' id='stitle' name='stitle' autoComplete='off' />
          <div className='form-row-explain'>Bitte gib den deutschen Serientitel an</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='sstaffel'>Staffel</label>
        </dt>
        <dd>
          <select name='sstaffel' id='sstaffel' className='expand'>
            <option value=''>--- Bitte wählen ---</option>
            <option value='S01'>Staffel 01</option>
            <option value='S02'>Staffel 02</option>
            <option value='S03'>Staffel 03</option>
            <option value='S04'>Staffel 04</option>
            <option value='S05'>Staffel 05</option>
            <option value='S06'>Staffel 06</option>
            <option value='S07'>Staffel 07</option>
            <option value='S08'>Staffel 08</option>
            <option value='S09'>Staffel 09</option>
            <option value='S10'>Staffel 10</option>
            <option value='S11'>Staffel 11</option>
            <option value='S12'>Staffel 12</option>
            <option value='S13'>Staffel 13</option>
            <option value='S14'>Staffel 14</option>
            <option value='S15'>Staffel 15</option>
            <option value='S16'>Staffel 16</option>
            <option value='S17'>Staffel 17</option>
            <option value='S18'>Staffel 18</option>
            <option value='S19'>Staffel 19</option>
            <option value='S20'>Staffel 20</option>
            <option value='S21'>Staffel 21</option>
            <option value='S22'>Staffel 22</option>
            <option value='S23'>Staffel 23</option>
            <option value='S24'>Staffel 24</option>
            <option value='S25'>Staffel 25</option>
            <option value='S26'>Staffel 26</option>
            <option value='S27'>Staffel 27</option>
            <option value='S28'>Staffel 28</option>
            <option value='S29'>Staffel 29</option>
            <option value='S30'>Staffel 30</option>
            <option value='S31'>Staffel 31</option>
            <option value='S32'>Staffel 32</option>
            <option value='S33'>Staffel 33</option>
            <option value='S34'>Staffel 34</option>
            <option value='S35'>Staffel 35</option>
            <option value='S36'>Staffel 36</option>
            <option value='S37'>Staffel 37</option>
            <option value='S38'>Staffel 38</option>
            <option value='S39'>Staffel 39</option>
            <option value='S40'>Staffel 40</option>
            <option value='S41'>Staffel 41</option>
            <option value='S42'>Staffel 42</option>
            <option value='S43'>Staffel 43</option>
            <option value='S44'>Staffel 44</option>
            <option value='S45'>Staffel 45</option>
            <option value='S46'>Staffel 46</option>
            <option value='S47'>Staffel 47</option>
            <option value='S48'>Staffel 48</option>
            <option value='S49'>Staffel 49</option>
            <option value='S50'>Staffel 50</option>
            <option value='S51'>Staffel 51</option>
            <option value='S52'>Staffel 52</option>
            <option value='S53'>Staffel 53</option>
            <option value='S54'>Staffel 54</option>
            <option value='S55'>Staffel 55</option>
            <option value='S56'>Staffel 56</option>
            <option value='S57'>Staffel 57</option>
            <option value='S58'>Staffel 58</option>
            <option value='S59'>Staffel 59</option>
            <option value='S60'>Staffel 60</option>
            <option value='S61'>Staffel 61</option>
            <option value='S62'>Staffel 62</option>
            <option value='S63'>Staffel 63</option>
            <option value='S64'>Staffel 64</option>
            <option value='S65'>Staffel 65</option>
            <option value='S66'>Staffel 66</option>
            <option value='S67'>Staffel 67</option>
            <option value='S68'>Staffel 68</option>
            <option value='S69'>Staffel 69</option>
            <option value='S70'>Staffel 70</option>
            <option value='S71'>Staffel 71</option>
            <option value='S72'>Staffel 72</option>
            <option value='S73'>Staffel 73</option>
            <option value='S74'>Staffel 74</option>
            <option value='S75'>Staffel 75</option>
            <option value='S76'>Staffel 76</option>
            <option value='S77'>Staffel 77</option>
            <option value='S78'>Staffel 78</option>
            <option value='S79'>Staffel 79</option>
            <option value='S80'>Staffel 80</option>
            <option value='S81'>Staffel 81</option>
            <option value='S82'>Staffel 82</option>
            <option value='S83'>Staffel 83</option>
            <option value='S84'>Staffel 84</option>
            <option value='S85'>Staffel 85</option>
            <option value='S86'>Staffel 86</option>
            <option value='S87'>Staffel 87</option>
            <option value='S88'>Staffel 88</option>
            <option value='S89'>Staffel 89</option>
            <option value='S90'>Staffel 90</option>
            <option value='S91'>Staffel 91</option>
            <option value='S92'>Staffel 92</option>
            <option value='S93'>Staffel 93</option>
            <option value='S94'>Staffel 94</option>
            <option value='S95'>Staffel 95</option>
            <option value='S96'>Staffel 96</option>
            <option value='S97'>Staffel 97</option>
            <option value='S98'>Staffel 98</option>
            <option value='S99'>Staffel 99</option>
            <option value='S100'>Staffel 100</option>{' '}
          </select>
          <div className='form-row-explain'>Wähle hier aus, um welche Staffel es sich handelt</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='scut'>Cut</label>
        </dt>
        <dd>
          <input type='text' id='scut' name='scut' autoComplete='off' />
          <div className='form-row-explain'>Optional: Trage hier, falls zutreffend, den Cut ein (z.B. DC, Extended o.ä,)</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='sgerman'>Deutsch</label>
        </dt>
        <dd>
          <select name='sgerman' id='sgerman' className='expand'>
            <option value=''>--- Bitte wählen ---</option>
            <option value='German'>Ja, deutsches Release</option>
            <option value='non-german'>Nein, fremdsprachiges Release</option>
          </select>
          <div className='form-row-explain'>Stelle bitte ein, ob es sich um ein deutsches Release handelt</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='sdubbed'>Dubbed</label>
        </dt>
        <dd>
          <select name='sdubbed' id='sdubbed' className='expand'>
            <option value=''>--- Bitte wählen ---</option>
            <option value='Dubbed'>Ja, dubbed</option>
            <option value='non-dubbed'>Nein, nicht dubbed</option>
          </select>
          <div className='form-row-explain'>Stelle bitte ein, ob dein Release &quot;Dubbed&quot; ist</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='sacodec'>Audiocodec</label>
        </dt>
        <dd>
          <select name='sacodec' id='sacodec' className='expand'>
            <option value=''>--- Bitte wählen ---</option>
            <option value='AAC'>AAC</option>
            <option value='AC3'>AC3</option>
            <option value='DTS'>DTS</option>
            <option value='DTSHD'>DTSHD</option>
            <option value='TrueHD'>TrueHD</option>
            <option value='TrueHD Atmos'>TrueHD Atmos</option>
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
          <label htmlFor='slanguage'>Anzahl der Sprachen</label>
        </dt>
        <dd>
          <select name='slanguage' id='slanguage' className='expand'>
            <option value=''>--- Bitte wählen ---</option>
            <option value='1'>1 Sprache</option>
            <option value='2'>2 Sprachen</option>
            <option value='3'>mehr als 2 Sprachen</option>
          </select>
          <div className='form-row-explain'>
            Gib hier an, wieviele verschiedene Tonspur-Sprachen dein Release enthält, z.B. Deutsch &amp; Englisch = 2
          </div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='sresolution'>Auflösung</label>
        </dt>
        <dd>
          <select name='sresolution' id='sresolution' className='expand'>
            <option value=''>--- Bitte wählen ---</option>
            <option value='480p'>480p</option>
            <option value='576p'>576p</option>
            <option value='720p'>720p</option>
            <option value='1080p'>1080p</option>
          </select>
          <div className='form-row-explain'>Bitte stelle die Auflösung des Releases ein</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='ssource'>Source / Art</label>
        </dt>
        <dd>
          <select name='ssource' id='ssource' className='expand'>
            <option value=''>--- Bitte wählen ---</option>
            <option value='BluRay'>BluRay (HD)</option>
            <option value='DVD'>DVD (SD)</option>
            <option value='DVDRip'>DVDRip (SD)</option>
            <option value='WebDL'>WebDL (SD / HD)</option>
            <option value='Webrip'>Webrip (SD / HD)</option>
            <option value='VHSRip'>VHSRip (SD)</option>
            <option value='UHD2BD'>UHD2BD (HD)</option>
            <option value='DVD2BD'>DVD2BD (HD)</option>
            <option value='MicroHD'>MicroHD (HD)</option>
            <option value='TVRip'>TVRip (SD / HD)</option>
            <option value='BDRip'>BDRip (SD)</option>
          </select>
          <div className='form-row-explain'>Bitte gib hier die Source / Art des Releases an</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='svcodec'>Videocodec</label>
        </dt>
        <dd>
          <select name='svcodec' id='svcodec' className='expand'>
            <option value=''>--- Bitte wählen ---</option>
            <option value='x264'>x264</option>
            <option value='AVC'>AVC</option>
            <option value='x265'>x265</option>
            <option value='HEVC'>HEVC</option>
          </select>
          <div className='form-row-explain'>Stelle hier den Videocodec (x264 / x265 = Encode / Rip, AVC / HEVC = Untouched / Remux)</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='sextras'>Zusätze</label>
        </dt>
        <dd>
          <select name='sextras' id='sextras' className='expand'>
            <option value=''>--- Bitte wählen ---</option>
            <option value='Remux'>Remux</option>
            <option value='Regraded'>Regraded</option>
            <option value='Upscale'>Upscale</option>
            <option value='OM'>Open Matte</option>
            <option value='OM Remux'>Open Matte Remux</option>
            <option value='OM Upscale'>Open Matte Upscale</option>
            <option value='OM Regrade'>Open Matte Regrade</option>
          </select>
          <div className='form-row-explain'>Stelle hier, falls zutreffend, die Zusätze ein</div>
        </dd>
      </dl>
      <dl className='form-row'>
        <dt>
          <label htmlFor='srlsgrp'>Releaser</label>
        </dt>
        <dd>
          <input type='text' id='srlsgrp' name='srlsgrp' />
          <div className='form-row-explain'>Optional: Gib hier die / deine Releasegruppe an</div>
        </dd>
      </dl>
      <dl className='form-row threadtitel' style={{ display: 'none' }}>
        <dd>
          <input type='text' id='sthreadtitel' name='sthreadtitel' onClick={(inp) => inp.currentTarget.select()} />
        </dd>
      </dl>
      <dl className='form-row last-row'>
        <dt></dt>
        <dd>
          <button className='generate' data-art='tv'>
            Threadtitel generieren
          </button>
        </dd>
      </dl>
      --&gt;
    </div>
  );
};

export default Tv;
