// Memory data powering the camera LCD and side panel.
export type Memory = {
  id: string;
  src: string;
  takenAtISO: string;
  place: string;
  caption: string;
  mapSrc?: string;
  songSrc?: string;
};

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const withBasePath = (assetPath: string) => `${BASE_PATH}${assetPath}`;


export const memories: Memory[] = [
  {
    id: 'memory-1',
    src: withBasePath('/images/memories/1.jpg'),
    takenAtISO: '2025-02-18T09:20:00Z',
    place: 'Glasgow, UK',
    caption: 'One year ago today you said "yes" to putting up with me, \n"yes" to joining me on adventures, \n"yes" to getting lost together and \n"yes" to being my girl. \nAnd there\'s no one else I\'d rather have put up with me, no one else I\'d rather get lost with and no one else I\'d rather call my girl. <3',
    mapSrc: withBasePath('/images/locations/1.jpeg')
  },
  {
    id: 'memory-2',
    src: withBasePath('/images/memories/2.jpg'),
    takenAtISO: '2025-02-05T16:45:00Z',
    place: 'Glasgow, UK',
    caption: 'Quite easily the best week I had in 3rd year. \nI just got to see that pretty smile for the first time as my girlfriend officially, \nHad a lovely breakfast, \nGot all the bf \& gf paperwork done and \nOnly a few days later I got a call from TSB offering me the job over the summer. \nIt\'s been all uphill ever since. :) ',
    mapSrc: withBasePath('/images/locations/2.jpg')
  },
  {
    id: 'memory-3',
    src: withBasePath('/images/memories/3.jpeg'),
    takenAtISO: '2025-03-18T11:05:00Z',
    place: 'Glasgow, UK',
    caption: 'I\'d say by this point I started to get a good idea of who Viv is from Viv but \nI also had the chance to get to know you from your friends who all adore you, \nYou have some of the best people around you and \nEven when you don\'t you still see the best in everyone and I\'m still learning that from you. \nThis was a fun night, Vodka Wodka -> Union -> Bank Street -> Holiday Home. \nSt. Patrick\'s day. 🍀',
    mapSrc: withBasePath('/images/locations/3.jpg')
  },
  {
    id: 'memory-4',
    src: withBasePath('/images/memories/4.jpg'),
    takenAtISO: '2025-03-23T19:10:00Z',
    place: 'Ben Arthur, Arrochar',
    caption: 'First hike together! \nI remember sitting and eating sandwiches in the corner out of the wind, \nSeeing a Viv in the wild and losing my balance on the descent. \nThe dinner afterwards together was delicious as well, was it shrimp or sushi? \nEither way I remember smiling about it for days after. \nI\'m happy that you\'re outdoorsy because that\'s what one of the things I miss most about home, \nSharing that with you is special to me. 🥾',
    mapSrc: withBasePath('/images/locations/4.jpg')
  },
  {
    id: 'memory-5',
    src: withBasePath('/images/memories/5.jpg'),
    takenAtISO: '2025-04-05T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'By now the winds of change were blowing in full force, \nSemester near done, weather getting better, the world opening up again. \nI remember this day well, it was such a pleasant long run (14km to Pollock Park). \nThis was also round about where reality started knocking on our door, a goodbye wasn\'t too far away and we both knew it. 👨‍🦯‍➡️',
    mapSrc: withBasePath('/images/locations/5.jpg')
  },
  {
    id: 'memory-6',
    src: withBasePath('/images/memories/6.jpg'),
    takenAtISO: '2025-04-11T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'I love watching sunsets.\nI love that you love watching sunsets. \nThis was a beautiful sunset, and I thought of it religously whilst you were away. 🌅',
    mapSrc: withBasePath('/images/locations/6.jpg')
  },
  {
    id: 'memory-7',
    src: withBasePath('/images/memories/7.jpg'),
    takenAtISO: '2025-05-24T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'And just like that it was done, well it wasn\'t really just like that nor was it really done but it felt like that. \nAt first I was scared, scared that over the summer we\'d drift apart, scared the distance, the time, the space, scared that it\'d be all too much. \nThe truth was I was just scared of missing you and that\'s a fear I could take, it just made me realise just how much I was falling for you. \nUnion -> Old Digs -> Caird Drive -> Old Digs -> New Digs -> Civs. We said goodbye like we\'d see each other the next day. 👋',
    mapSrc: withBasePath('/images/locations/7.jpg')
  },
  {
    id: 'memory-8',
    src: withBasePath('/images/memories/8.jpg'),
    takenAtISO: '2025-07-09T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'I love writing letters to you, sometimes I\'ll write you a letter and just leave it in my notes, sometimes, when the occasion arises, it\'ll make its way to you. \nPosting this halfway accross the world was fun, hoping it\'d get to you on time. 💌',
    mapSrc: withBasePath('/images/locations/8.jpg')
  },
  {
    id: 'memory-9',
    src: withBasePath('/images/memories/9.jpg'),
    takenAtISO: '2025-07-17T08:15:00Z',
    place: 'Olympia, WA',
    caption: 'I\'d do lots and lots and lots of things just to get a smile from you <3, this was one of my favouites. x',
    mapSrc: withBasePath('/images/locations/9.jpg')
  },
  {
    id: 'memory-10',
    src: withBasePath('/images/memories/10.jpg'),
    takenAtISO: '2025-09-04T08:15:00Z',
    place: 'Trogir, HR',
    caption: 'And welcome to the next chapter of us. \nI was so happy to have my baby back in my arms. Not just in my arms but in my arms at the airport, in my arms on the plane on our first Euro holiday together. \nI\'d never done a holiday like that before but it was so easy and so special to have you with me. I loved exploring all the places, all the interactions, the food, the wine, getting to just have fun with you. \nI still think back to that trip and I miss it so much, I missed you so much. 🛫',
    mapSrc: withBasePath('/images/locations/10.jpg')
  },
  {
    id: 'memory-11',
    src: withBasePath('/images/memories/11.jpg'),
    takenAtISO: '2025-09-04T08:15:00Z',
    place: 'Split, HR',
    caption: 'I\'m smiling right now as I\'m looking at this picture. :))',
    mapSrc: withBasePath('/images/locations/11.jpg')
  },
  {
    id: 'memory-12',
    src: withBasePath('/images/memories/12.jpg'),
    takenAtISO: '2025-09-05T08:15:00Z',
    place: 'Klis, HR',
    caption: 'We\'ve had so many beautiful days together, this is among the top of them. 🏰',
    mapSrc: withBasePath('/images/locations/12.jpg')
  },
  {
    id: 'memory-13',
    src: withBasePath('/images/memories/13.jpg'),
    takenAtISO: '2025-09-07T08:15:00Z',
    place: 'Split, HR',
    caption: 'Now this is the most beautiful sunset I\'ve ever seen, and to have the most beautiful girl infront of the most beautiful background is simply mooi. \nI was so sad that our trip was coming to an end but this was the most perfect start to our new year together. That rooftop bar followed by dinner at the Kaba then drinks at that super cool bar was the best. \nLet\'s do it again??? 🇭🇷 \nAlso did she just say she loves me?!?!',
    mapSrc: withBasePath('/images/locations/13.jpg')
  },
  {
    id: 'memory-14',
    src: withBasePath('/images/memories/14.jpg'),
    takenAtISO: '2025-09-27T08:15:00Z',
    place: 'The Snub, Glen Cova',
    caption: 'I love this girl. <33',
    mapSrc: withBasePath('/images/locations/14.jpg')
  },
  {
    id: 'memory-15',
    src: withBasePath('/images/memories/15.jpg'),
    takenAtISO: '2025-10-11T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'Being myself aroung you is something I cherish so much, you get the whole Dylan everytime. \nI know I can be a bit much, a little silly, a little clumsy, a litte loud, a little too in your space and I don\'t apologise because that\'s me but beyond that, part of me is my family and my upbringing, and you\'ve been so receptive of both. \nYou feel so much like home yet not at the same time, it\'s really precious to me. \nHappy Mid-Autumn Festival, I hope you enjoyed the mooncake. 🥮',
    mapSrc: withBasePath('/images/locations/15.jpg')
  },
  {
    id: 'memory-16',
    src: withBasePath('/images/memories/161.jpg'),
    takenAtISO: '2025-11-16T08:15:00Z',
    place: 'Ben Vorlich, Arrochar',
    caption: 'Now this was a beautiful, beautiful, beautiful hike. \nI\'d never seen snow capped mountains before so that was a treat for me, let\'s not forget that relaxing sauna afterwards as well. \nSeeing Viv next to the bergs got me thinking, we\'ve got our very own Kopjetjie here. \nLet\'s not talk about the car keys... 🔑',
    mapSrc: withBasePath('/images/locations/16.jpg')
  },
  {
    id: 'memory-17',
    src: withBasePath('/images/memories/17.jpg'),
    takenAtISO: '2025-11-22T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'I feel so blessed to get to wake up to this view, such an efforlessly gorgeous girl. 🫦',
    mapSrc: withBasePath('/images/locations/17.jpg')
  },
  {
    id: 'memory-18',
    src: withBasePath('/images/memories/18.jpg'),
    takenAtISO: '2026-01-02T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'Do any other couples say Howzit and See You Soon as often as we do?? \nWe had opposite December holidays, I was back under the African sun and you were on the snow covered mountains of Pacific Northwest winter. \nOh, and goodbye again, I\'m roadtripping and you\'re flying again. \nWe\'re both very independent, I love my freedom and you do too but I don\'t smile when I wake up and you\'re not there. 🚙',
    mapSrc: withBasePath('/images/locations/18.jpg')
  },
  {
    id: 'memory-19',
    src: withBasePath('/images/memories/19.jpg'),
    takenAtISO: '2026-01-15T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'You\'ve been my favourite for a long time. 🩷',
    mapSrc: withBasePath('/images/locations/19.jpg')
  },
  {
    id: 'memory-20',
    src: withBasePath('/images/memories/20.jpg'),
    takenAtISO: '2026-02-06T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'We\'ve had plenty of date nights by now, tried all sorts of foods in all sorts of settings but I must say, no restaurant could top this view, nor this steak, nor this lady. \nYou\'re an absolute dream to be with, and don\'t get me startd on the all the delicous foods that you\'ve made and we\'ve shared together. 🍽️',
    mapSrc: withBasePath('/images/locations/20.jpg')
  },
  {
    id: 'memory-21',
    src: withBasePath('/images/memories/21.jpg'),
    takenAtISO: '2026-02-07T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'This is my happy place. 🥞',
    mapSrc: withBasePath('/images/locations/21.jpg')
  }, 
  {
    id: 'memory-22',
    src: withBasePath('/images/memories/22.jpg'),
    takenAtISO: '2026-02-14T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'You\'ve been a pleasure to love and be loved by, I can\'t and don\'t want to stop dreaming about our future together. \nAll the adventures we have coming our way, the easy days too, all the memories yet to make, the stories we\'ll tell, the food we\'ll eat, the places we\'ll see, the people we\'ll meet, all of it. \nLoving you is so easy beb and I love you so much Viv, thank you for being my person and I\'m excited for the next one! \nDylan Huang <3',
    mapSrc: withBasePath('/images/locations/22.jpg')
  },
];
