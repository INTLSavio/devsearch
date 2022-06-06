import React from 'react';
import "leaflet/dist/leaflet.css"
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Header } from '../../components/Header';
import { Container } from './styles';
import icon from '../../assets/map-pin.png'

export function Home() {

    const myIcon = L.icon({
        iconUrl: icon,
        iconSize: [38,38],
        iconAnchor: [32, 32],

    });

    const position = [-22.2508213, -45.7112216]
    return(
        <>
        <Header />
            <Container>
                <MapContainer center={[-22.2508213, -45.7112216]} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '800px' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[-22.2508213, -45.7112216]} icon={myIcon} key={1}>
                        <Popup>
                            <b>Sávio Gomes Leite</b> <br /> Tecnologias: <br /> -React <br /> -NodeJS <br /> <a href="">Mais informações</a>
                        </Popup>
                    </Marker>
                </MapContainer>
            </Container>
        </>
    );
}