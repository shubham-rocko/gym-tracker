import React from 'react';
import {
    BannerWrapper,
    SigninFormWrapper,
    SigninSection,
} from './style';
import { Form } from '../../components/Form';

export const SignIn = () => {
    return (
        <SigninSection>
            <BannerWrapper/>
            <SigninFormWrapper>
                <Form />
            </SigninFormWrapper>
        </SigninSection>
    )
}