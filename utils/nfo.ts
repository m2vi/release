import { humanFileSize } from '@m2vi/iva';
import { moment } from './moment';
import numeral from 'numeral';
import { NfoConfig, SimpleObject } from '../types/main';

class Nfo {
  async create({ release, imdb_id, source, r_mediainfo }: NfoConfig) {
    const mediainfo = r_mediainfo ? JSON.parse(r_mediainfo) : {};
    console.log(r_mediainfo);

    const imdb = await (await fetch(`/api/imdb/${imdb_id}`)).json();

    const general = mediainfo?.media?.track?.find((track: any) => track['@type'] === 'General')!;
    const video = mediainfo?.media?.track?.find((track: any) => track['@type'] === 'Video')!;
    const audio = mediainfo?.media?.track?.filter((track: any) => track['@type'] === 'Audio')!;
    const subs = mediainfo?.media?.track?.filter((track: any) => track['@type'] === 'Text')!;

    const result = {
      RELEASE: release,
      SOURCE: '', //  source.map(({ medium, releaser }) => `${medium} ${releaser ? `[${releaser}]` : ''}`).join(', ')

      SIZE: humanFileSize(parseInt(general.FileSize!), { si: false }),
      DURATION: moment.duration(parseFloat(general.Duration!), 'seconds').format('HH:mm:ss'),
      VIDEO: `${video.Format} ${video.Width}x${video.Height} @ ${video.FrameRate}fps [${humanFileSize(parseInt(video.BitRate!))}/s]`,
      AUDIO: audio.map((track: any) => track?.Title!).join(', '),
      SUBS: subs.map((track: any) => track?.Title!).join(', '),

      LINK: imdb.url,
      RATING: `${imdb.aggregateRating.ratingValue}/10 from ${numeral(imdb.aggregateRating.ratingCount).format()} users`,
      GENRE: imdb.genre.join(', '),
      PLOT: imdb.summary,
    };

    return this.toText(result);
  }

  private appendDots(key: string, length: number = 13) {
    key = `${key} `;

    while (key.length !== length && !(key.length > length)) {
      key += '.';
    }

    return key;
  }

  async toText(result: SimpleObject<string>) {
    const entries = Object.entries(result);

    return entries
      .map(([key, value], index) => {
        return `${this.appendDots(`${key}`)} ${value} ${[1, 6].includes(index) ? '\n' : ''}`;
      })
      .join('\n');
  }
}

export const nfo = new Nfo();
export default nfo;
