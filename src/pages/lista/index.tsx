import React from 'react';
import "leaflet/dist/leaflet.css"
import './styles.ts'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Header } from '../../components/Header';
import icon from '../../assets/marker-icon.png'
import L from 'leaflet';

import { Container } from './styles';

export function Lista() {

    const devs = [
        {
            nome: 'Sávio',
            cidade: 'Santa Rita do Sapucaí',
            tecnologias: 'ReactJS'
        },
        {
            nome: 'Lucas',
            cidade: 'Varginha',
            tecnologias: 'NodeJS'
        },
        {
            nome: 'Maria',
            cidade: 'São Paulo',
            tecnologias: 'Python'
        },
    ]
    
    return(
        <>
            <Header />
            <Container>
                <table>
                    <thead>
                        <tr>
                        <th>Nome</th>
                        <th>Cidade</th>  
                        <th>Tecnologias</th>  
                        <th>Informações</th>  
                        </tr>
                    </thead>

                    <tbody>
                        {devs.map(dev => {
                            return(
                                <tr key={dev.nome}>
                                    <td>{dev.nome}</td>
                                    <td>{dev.cidade}</td>
                                    <td>{dev.tecnologias}</td>
                                    <td><a href='#'>Mais Informações</a></td>
                                </tr> 
                            );
                        })}                
                    </tbody>
                </table>
            </Container>
        </>
            
    );
}