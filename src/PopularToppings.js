import React from 'react';

export default ({ orders }) => {
    const stringifiedOrders = JSON.stringify(orders, null, 2);
    console.log(stringifiedOrders);
    return stringifiedOrders;
};
