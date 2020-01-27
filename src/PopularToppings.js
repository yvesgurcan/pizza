import React, { Fragment, useState, useEffect } from 'react';

const computePopularToppings = function(orders) {
    console.log(orders);
};

export default ({ orders }) => {
    const [popularToppings, setPopularToppings] = useState([]);

    useEffect(() => {
        const computedPopularToppings = computePopularToppings(orders);
        setPopularToppings(computedPopularToppings);
    }, [orders]);

    return (
        <Fragment>
            <h1>PizzApp</h1>
            {popularToppings}
        </Fragment>
    );
};
