import carImage from "../assets/Mini-cooper-2020.jpg";

export interface Car {
    id: number;
    name: string;
    nextReservation: string;
    status: string;
    image: any;
}


const carData: Car[] = [
    { id: 1, name: 'Mini Cooper 2020', nextReservation: '11/07', status: '★★★★★', image: carImage },
    { id: 2, name: 'Mini Cooper 2020', nextReservation: '11/07', status: '★★★★★', image: carImage },
    { id: 3, name: 'Mini Cooper 2020', nextReservation: '11/07', status: '★★★★★', image: carImage },
    { id: 4, name: 'Mini Cooper 2020', nextReservation: '11/07', status: '★★★★★', image: carImage },
    { id: 5, name: 'Mini Cooper 2020', nextReservation: '11/07', status: '★★★★★', image: carImage },
    { id: 6, name: 'Mini Cooper 2020', nextReservation: '11/07', status: '★★★★★', image: carImage }
];

export default carData;