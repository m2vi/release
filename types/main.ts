export type ReleaseInterfaceGerman = 'German' | '';
export type ReleaseInterfaceDubbed = 'Dubbed' | '';

export interface SimpleObject<T> {
  [key: string]: T;
}

export interface NfoConfig {
  release: string;
  source: NfoSourceEnum[];
  imdb_id: string; // IMDB ID
  r_mediainfo: string; // JSON string
}

export interface NfoSourceEnum {
  medium: string;
  releaser: string | null;
}

export enum AudioCodec {
  AAC = 'AAC',
  AC3 = 'AC3',
  EAC3 = 'EAC3',
  DTS = 'DTS',
  DTSHD = 'DTS-HD',
  TrueHD = 'TrueHD',
  'TrueHD.Atmos' = 'TrueHD Atmos',
  FLAC = 'FLAC',
  MP3 = 'MP3',
  PCM = 'PCM',
}

export interface ReleaseInterface {
  title: string;
  year: string | number;
  cut: string;
  german: ReleaseInterfaceGerman;
  dubbed: ReleaseInterfaceDubbed;
  acodec: string;
  language: string;
  resolution: string;
  source: string;
  dv: string;
  hdr: string;
  vcodec: string;
  extras: string;
  releaseextras: string;
  rlsgrp: string;
}
