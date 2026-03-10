export interface Service {
  id: string;
  title: string;
  description: string;
  url?: string;
}

export const services: Service[] = [
  {
    id: 'wc-dugulaselharitas',
    title: 'WC és lefolyó duguláselhárítás',
    description:
      'Gyors, szakszerű duguláselhárítás WC-ben, mosdóban és zuhanyzóban, falbontás nélkül, fix áron.',
    url: '/wc-dugulas',
  },
  {
    id: 'mosogato-dugulas',
    title: 'Mosogató duguláselhárítás',
    description:
      'Zsíros, szappanos lerakódások eltávolítása konyhai lefolyóból, tiszta, gépesített megoldásokkal.',
    url: '/mosogato-dugulas',
  },
  {
    id: 'csatorna-ellenorzes',
    title: 'Csatornaellenőrzés és karbantartás',
    description:
      'Csatornák rendszeres tisztítása és ellenőrzése, hogy elkerülje a váratlan dugulásokat.',
  },
];

