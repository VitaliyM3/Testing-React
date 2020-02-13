// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import React from "react";
import * as rtl from '@testing-library/react';
afterEach(rtl.cleanup);
import { render, fireEvent } from "@testing-library/react";

import StarWarsCharacters from './components/StarWarsCharacters';
import App from './App';

describe('App', () => {
    it('renders a container element', () => {
        const wrapper =rtl.render(<App />);
        expect(wrapper.getByTestId(/container/i));
    });

    it('renders success message after clicking button', async () => {
        const wrapper = rtl.render(<App />);
        const button = wrapper.getByTestId('button');
        expect(wrapper.queryByText(/success/i)).not.toBeInTheDocument();
        rtl.fireEvent.click(button);
        expect(await wrapper.findByText(/success/i));
    });
});





