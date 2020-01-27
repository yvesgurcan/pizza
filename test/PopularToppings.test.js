import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PopularToppings from '../src/PopularToppings';
import orders from './fixtures/orders';

describe('PizzApp', function() {
    test('Displays title.', () => {
        const { getByRole } = render(<PopularToppings />);
        expect(getByRole('heading')).toHaveTextContent('PizzApp');
    });
});
