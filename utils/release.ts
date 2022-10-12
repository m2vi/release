import { ReleaseInterface, ReleaseInterfaceDubbed } from '../types/main';

class Release {
  removeDot(str: string) {
    if (str.endsWith('.')) {
      return str.slice(0, -1);
    }
    return str;
  }

  titleToRT(title: string) {
    return title
      .replace(/ä/g, 'ae')
      .replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue')
      .replace(/ß/g, 'ss')
      .replace(/\s/g, '.')
      .replace(/\.+/g, '.')
      .replace(/-/g, '')
      .trim();
  }

  formatResult(result: string, rlsgrp: string) {
    return `${this.removeDot(result.replace(/\.$/, '').trim())}${rlsgrp ? `-${rlsgrp}` : ''}`.replace(/\s/g, '.').replace(/\.+/g, '.');
  }

  sceneFormat(text: string) {
    return text.replace(/I/g, 'i');
  }

  create({
    title,
    year,
    cut,
    german,
    dubbed,
    acodec,
    language,
    resolution,
    source,
    dv,
    hdr,
    vcodec,
    extras,
    releaseextras,
    rlsgrp,
  }: ReleaseInterface) {
    return this.formatResult(
      `${this.titleToRT(title)}.${this.sceneFormat(
        `${year}.${cut}.${german}.${
          dubbed === 'Dubbed' ? (acodec.endsWith('D') || acodec.includes('.') ? `Dubbed.${acodec}` : `${acodec}D`) : acodec
        }.${language}.${resolution}.${extras === 'Hybrid' ? extras : ''}.${source}.${dv}.${
          hdr === '' && dv === '' ? (['2160p', 'UpsUHD'].includes(resolution) ? 'SDR' : '') : hdr
        } .${['WEB', 'Hybrid.WEB'].includes(source) ? (vcodec === 'HEVC' ? 'H265' : 'H264') : vcodec}.${
          extras !== 'Hybrid' ? extras : ''
        }.${releaseextras}`
      )}`,
      rlsgrp
    );
  }
}

export const release = new Release();
export default release;
