import React from 'react';
import carData, { Car } from '../data/carData'; 
import CarTableRow from '../components/CarTableRow';

const CarTable: React.FC = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>CAR</th>
                    <th>NEXT RESERVATION</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {/* Mapear os dados dos carros para criar as linhas da tabela */}
                {carData.map(car => (
                    <CarTableRow key={car.id} car={car} />
                ))}
            </tbody>
        </table>
    );
};

export default CarTable;