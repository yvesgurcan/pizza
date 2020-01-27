import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PopularToppings from '../src/PopularToppings';
import orders from './fixtures/orders';

describe('PizzApp', function() {
    test('Player should instantiate', () => {
        const { getByText, getByRole } = render(
            <PopularToppings orders={orders.sample} />
        );
        expect(true).toBe(true);
    });
});
