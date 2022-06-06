import React, { FormEvent, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Container, Form } from './styles';

export function Signup() {

    function handleSubmitForm(e: FormEvent) {
        e.preventDefault()
        toast('Gg')
    }

    return(
        <Container>
            <Form onSubmit={handleSubmitForm}>
                <h1>Cadastrar</h1>
                <p>Nome</p>
                <input type="text" placeholder='Nome'/>
                <p>Email</p>
                <input type="text" placeholder='E-mail' />
                <p>Data de Nascimento</p>
                <input type="date" />
                <p>Tecnologias</p>
                <input type="text" placeholder='Tecnologias'/>
                <p>Contato</p>
                <input type="text" placeholder='Contato'/>
                <div className='coordinates'>
                    <p>Latitude</p>
                    <input type="number" placeholder='Lat'/>
                    <p>Longitude</p>
                    <input type="number" placeholder='Long'/>
                </div>
                <p>Senha</p>
                <input type="password" placeholder='Senha'/>
                <button type='submit'>Cadastrar</button>
                
            </Form>
        <ToastContainer theme="dark" />
        </Container>
    );
}
