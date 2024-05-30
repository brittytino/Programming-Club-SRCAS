// This file is maintained as a store which contains info of comp achievers details.
// To add new achievers details , just add new array in the same format !



import vergina from '../images/winners/vergina.png';
import pravin from '../images/winners/pravin.png';
import venkatesh from '../images/winners/venkatesh.png';

import kaariniya from '../images/winners/kaariniya.png'
import karuppasamy from '../images/winners/karuppasamy.png'

import socialw1Img from '../images/social-w1.jpg';
import socialw2Img from '../images/social-w2.jpg';
import socialw3Img from '../images/social-w3.jpg';

const WinnerCompDetails = [

    // Byte Battle 
    {
        title: 'Byte Battle S1',
        date: 'Sep 21, 2023',
        winners: [
            {
                name: 'Vergina Sharley MS',
                regNo: '22105065',
                department: 'BCA',
                year: 'II',
                img: vergina,
                socialImg: socialw1Img,
                prize: "I",
            },
            {
                name: 'Pravin B',
                regNo: '23127035',
                department: 'Bsc CS DA',
                year: 'I',
                img: pravin,
                socialImg: socialw2Img,
                prize : "II",
            },
            {
                name: 'Venkatesh B',
                regNo: '22106062',
                department: 'Bsc CS',
                year: 'II',
                img: venkatesh,
                socialImg: socialw3Img,
                prize : "III",
            },
        ],
    },


    // Web Wizard 

    {
        title: 'Web Wizard',
        date: 'Feb 21, 2023',
        winners: [
            {
                name: 'Kaariniya SA',
                regNo: '22127025',
                department: 'Bsc CS DA',
                year: 'II',
                img: kaariniya,
                prize : "I",
                // socialImg: socialw1Img
            },
            {
                name: 'Karuppasamy M',
                regNo: '22107096',
                department: 'Bsc IT',
                year: 'II',
                img: karuppasamy,
                prize:"II",
                // socialImg: socialw2Img
            },
        ],
    },
    
    // Add more competitions as needed
];

export default WinnerCompDetails;
