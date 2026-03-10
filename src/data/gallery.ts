export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  district?: string;
  context?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'furdokad-dugulaselharitas',
    title: 'Fürdőkád duguláselhárítás bontás nélkül',
    description:
      'Fürdőkád lefolyójának gyors elhárítása gépi tisztítással, bontás és felesleges koszolás nélkül.',
    district: 'Budapest',
    context: 'fürdőszoba',
    imageSrc: '/images/work/dugulassegely-furdokad-dugulaselharitas.webp',
    imageAlt: 'Kád csaptelep és duguláselhárító felszerelés fürdőszobai munkánál.',
  },
  {
    id: 'csovizsgalo-kamera-monitor',
    title: 'Csővizsgáló kamera használata kézmosónál',
    description:
      'Kamerás állapotfelmérés mosdólefolyónál, a dugulás vagy szűkület pontos helyének meghatározására.',
    district: 'Budapest',
    context: 'mosdó / kézmosó',
    imageSrc: '/images/work/dugulassegely-csovizsgalo-kamera-monitor.webp',
    imageAlt: 'Csővizsgáló kamera monitora kézmosó mellett.',
  },
  {
    id: 'lefolyo-csotisztitas-geppel',
    title: 'Lefolyótisztítás géppel szekrény alól',
    description:
      'Mosogató alatti lefolyórendszer tisztítása Rothenberger géppel.',
    district: 'Budapest',
    context: 'konyha / mosogató',
    imageSrc: '/images/work/dugulassegely-csotisztitas-lefolyo-geppel.webp',
    imageAlt: 'Rothenberger csőtisztító gép mosogató alatti szekrénynél.',
  },
  {
    id: 'konyhai-dugulas-kameras-vizsgalat',
    title: 'Konyhai dugulás kamerás vizsgálata',
    description:
      'Konyhai lefolyó ellenőrzése kamerával, lerakódások feltárására.',
    district: 'Budapest',
    context: 'konyha',
    imageSrc: '/images/work/dugulassegely-konyhai-dugulas-kameras-vizsgalat.webp',
    imageAlt: 'Kamerás csővizsgálat konyhai mosogatónál.',
  },
  {
    id: 'mosogato-alatti-kameras-csovizsgalat',
    title: 'Mosogató alatti kamerás csővizsgálat',
    description:
      'Szekrény alól végzett kamerás csőellenőrzés a probléma feltárására.',
    district: 'Budapest',
    context: 'konyha / alsó bekötés',
    imageSrc: '/images/work/dugulassegely-kameras-csovizsgalat-mosogato-alatt.webp',
    imageAlt: 'Kamerás csővizsgálat mosogató alatti bekötésnél.',
  },
  {
    id: 'rothenberger-r600-csotisztito-gep',
    title: 'Professzionális csőtisztítás Rothenberger R600 géppel',
    description:
      'Erős gépi csőtisztítás makacs dugulásokhoz.',
    district: 'Budapest és környéke',
    context: 'wc / lefolyó / csatorna',
    imageSrc: '/images/work/dugulassegely-csotisztito-gep-rothenberger-r600.webp',
    imageAlt: 'Rothenberger R600 csőtisztító gép.',
  },
];