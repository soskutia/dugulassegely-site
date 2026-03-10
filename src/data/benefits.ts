export interface Benefit {
  id: string;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    id: 'gyors-kiszallas',
    title: 'Gyors kiszállás',
    description:
      'Budapesten a legtöbb címre 60 percen belüli indulással, éjjel-nappali ügyelettel.',
  },
  {
    id: 'gepesitett-megoldasok',
    title: 'Gépesített megoldások',
    description:
      'Modern csatornatisztító és kamerás diagnosztikai eszközökkel dolgozom, falbontás nélkül.',
  },
  {
    id: 'tiszta-munkavegzes',
    title: 'Tiszta munkavégzés',
    description:
      'Munkaterületet letakarom, fertőtlenítem, és úgy adom át, hogy Önnek minél kevesebb dolga legyen.',
  },
  {
    id: 'atlathato-arazas',
    title: 'Átlátható árazás',
    description:
      'Fix árak előre egyeztetve, kiszállási díj nélkül – minden tétel érthetően szerepel az ajánlatban.',
  },
];

