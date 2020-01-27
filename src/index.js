import React from 'react';
import ReactDOM from 'react-dom';

import PopulatToppings from './PopularToppings';
import orders from '../data/pizzas.json';

ReactDOM.render(
    <PopulatToppings orders={orders} />,
    document.getElementById('app')
);
