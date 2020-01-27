import React, { Fragment, useState, useEffect } from 'react';
import PopularToppingCombinations from './PopularToppingCombinations';

const ORDER_LIST_URL = 'http://files.olo.com/pizzas.json';
const LIMIT = 20;

export default () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            try {
                const fetchedOrders = await fetch(ORDER_LIST_URL);
                const data = await fetchedOrders.json();
                setOrders(data);
            } catch (error) {
                console.error({ error });
            }
        }

        fetchOrders();
    }, []);

    return (
        <Fragment>
            <h1>PizzApp</h1>
            <PopularToppingCombinations limit={LIMIT} orders={orders} />
        </Fragment>
    );
};
