import designs from "../constants/designs";
import cennetModern from '../assets/images/cennet_koyu_modern_house.png';
import swissBeachRoom from '../assets/images/swissotel_bodrum_beach_room.png';
import oxaGunHouses from '../assets/images/oxa_gundogan_house.png';
import cennetStone from '../assets/images/cennet_koyu_stone_house.png';

const slides = [
    {
        place:'Cennet Koyu',
        title:'Modern House',
        year:'2018',
        design: designs.EXTERIOR,
        image: () => cennetModern,
    },
    {
        place:'SwissOtel' ,
        title:'Bodrum Beach Room',
        year:'2015',
        design:designs.INTERIOR,
        image: () => swissBeachRoom,
    },
    {
        place:'OXA',
        title:'Gündoğan Houses',
        year:'2017',
        design:designs.INTANDEX,
        image: () => oxaGunHouses,
    },
    {
        place:'Cennet Koyu',
        title:'Stone House',
        year:'2018',
        design:designs.EXTERIOR,
        image: () => cennetStone,
    }
]

export default slides;