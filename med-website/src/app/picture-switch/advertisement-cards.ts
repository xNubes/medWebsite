export interface AdvertismentCard {
    imgUrl: string;
    header: string;
    contentText: string;
}

export const ADVERTISEMENTCARDS:AdvertismentCard[] = [
    {
        imgUrl: '/assets/aussenansicht.png', 
        header: 'Standort Schmalenbeck', 
        contentText: 'Wir arbeiten eng mit Ärzt:innen aus den Bereichen HNO, Orthopädie, Kinderheilkunde, Urologie, Dermatologie, Nervenheilkunde und Gynäkologie, sowie mit einer physiotherapeutischen Praxis und einer Apotheke zusammen.'
    },
    {
        imgUrl: '/assets/dr_juenemann_c.jpg',
        header: 'Standort Am Hagen',
        contentText: 'Unsere Zweigpraxis Am Hagen befindet sich im Dänenweg 2 in Ahrensburg. Hier bieten wir hausärztliche Versorgung, Labor und EKG an. Darüber hinausgehende technische Diagnostik findet in unserer Hauptpraxis statt. Bitte beachten Sie, dass auch die Praxis Am Hagen als Terminpraxis geführt wird.'        
    }
];