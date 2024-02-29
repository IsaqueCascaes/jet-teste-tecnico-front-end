import React from 'react';
import carData, { Car } from '../data/carData';

const CarTableRow: React.FC<{ car: Car }> = ({ car }) => {
    return (
        <tr>
            <td>
                {/* Imagem do carro */}
                <img src={car.image} alt={car.name} style={{ width: '50px', height: 'auto' }} />
                {/* Descrição do carro */}
                {car.name}
            </td>
            <td>{car.nextReservation}</td>
            <td>{car.status}</td>
            <td>Menu Activities</td>
        </tr>
    );
};

export default CarTableRow;