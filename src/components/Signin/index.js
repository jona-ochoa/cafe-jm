import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    FormTextarea
 } from './SigninElements'

const SignIn = () => {
  return (
    <Container>
        <FormWrap>
            <Icon to="/"> Café-JM </Icon>
            <FormContent>
                <Form action="#">
                    <FormH1> Contáctanos </FormH1>
                    <FormLabel htmlFor='for'> Email </FormLabel>
                    <FormInput type='email' required/>
                    <FormLabel htmlFor='for'> Telefono </FormLabel>
                    <FormInput type='phone' required/>
                    <FormLabel htmlFor='for'> Mensaje </FormLabel>
                    <FormTextarea type='text' required/>
                    <FormButton type='submit'> Enviar </FormButton>
                    <Text> Necesitas un presupuesto? </Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
  )
}

export default SignIn