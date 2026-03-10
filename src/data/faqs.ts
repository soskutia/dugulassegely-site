export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'Mennyi idő alatt ér ki a szerelő?',
    answer:
      'Budapesten általában 60 percen belül kiérek, sürgős esetben ennél is gyorsabban. Vidékre előzetes egyeztetés alapján megyek.',
  },
  {
    question: 'Mennyibe kerül a duguláselhárítás?',
    answer:
      'A legtöbb tipikus dugulást fix áron vállalom, amelyet telefonon előre egyeztetünk. Nincsenek rejtett költségek vagy kiszállási díjak.',
  },
  {
    question: 'Kell-e falat bontani a munkához?',
    answer:
      'A speciális gépeinknek köszönhetően az esetek többségében falbontás nélkül tudok dolgozni. Ha mégis szükséges, azt minden esetben előre egyeztetem.'
  },
  {
    question: 'Mikor érdemes sürgősségi kiszállást kérni?',
    answer:
      'Ha a víz nem folyik le, visszajön a szennyvíz, vagy ázást tapasztal szomszédnál, mindenképpen sürgős beavatkozás javasolt – ilyenkor azonnal hívjon.',
  },
];

