import HODimg from '../images/Co-Ordinators/sumathi.png'
import AssociateProf from '../images/Co-Ordinators/praneesh.png'
import AssociateProf2 from '../images/Co-Ordinators/manoj.png'

//office bearers :
import chairman from '../images/Co-Ordinators/gowtham.jpg';
import viceChairman from '../images/Co-Ordinators/nithesh.jpg';
import secretary from '../images/Co-Ordinators/tinobretty.jpg';
import jointSecretary from '../images/Co-Ordinators/john samuel.jpg';

import sampleImg from '../images/logo-removebg-preview (1).png'








export const staffCoordinators = [
    { name: 'Dr.N.Sumathi', img: HODimg, dept :"Bsc IT" , intro: 'Head of the Department' },
    { name: 'Dr.M.Pranesh', img: AssociateProf,dept:"Bsc CS", intro: 'Associate Profesor' },
    { name: 'Dr.S.Mohan', img: AssociateProf2,dept:"Bsc CS CS", intro: 'Associate Profesor' }
];

export const officeBearers = [
    { role: 'Chairman', name: 'Gowtham', img: chairman, dept:'Bsc CS CS', },
    { role: 'Vice-chairman', name: 'Nitheesh', img: viceChairman, dept:'BCA', },
    { role: 'Secretary', name: 'Tino Britty J', img: secretary, dept: 'Bsc CS',  },
    { role: 'Joint-secretary', name: 'John Samuel', img: jointSecretary, dept: 'Bsc IT',  }
];