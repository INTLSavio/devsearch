import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { SignupModal } from '../../components/SignupModal';

import { Container } from './styles';

export function Header() {
    const navigate = useNavigate()
    /*const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

    function openSignupModal() {
        setIsSignupModalOpen(true)
    }

    function closeSignupModal() {
        setIsSignupModalOpen(false)
    }*/

    return(
        <>
            <Container>
                <h1>DevSearch</h1>
                <a href="/">Mapa</a>
                <a href="/lista">Lista</a>
                <button type='button' onClick={() => navigate('/signup')}>Cadastrar</button>
            </Container>
        </>
    );
}