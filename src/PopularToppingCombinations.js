import React, { Fragment, useState, useEffect } from 'react';

const transformCombinationData = (orders = []) =>
    orders.map(order => order.toppings.join(', '));

const sortCombinations = ([, countA], [, countB]) => countB - countA;

const computePopularCombinations = (orders = [], limit) => {
    const combinations = transformCombinationData(orders);
    const uniqueCombinations = new Set(combinations);

    const combinationCounts = new Map(
        [...uniqueCombinations].map(combination => [combination, 0])
    );

    combinations.forEach(combination => {
        const value = combinationCounts.get(combination);
        combinationCounts.set(combination, value + 1);
    });

    const mostPopularCombinations = [...combinationCounts.entries()]
        .sort(sortCombinations)
        .slice(0, limit);

    return mostPopularCombinations;
};

export default ({ limit, orders }) => {
    const [popularCombinations, setPopularCombinations] = useState([]);

    useEffect(() => {
        const computedPopularCombinations = computePopularCombinations(
            orders,
            limit
        );
        setPopularCombinations(computedPopularCombinations);
    }, [limit, orders]);

    return (
        <Fragment>
            <p>
                Top {limit} most frequently ordered pizza topping combinations:
            </p>
            <ol>
                {popularCombinations.map(([toppings, count]) => (
                    <li key={toppings}>
                        {toppings} ({count} orders)
                    </li>
                ))}
            </ol>
        </Fragment>
    );
};
