import React from 'react';

const Table = ({ items }) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Savings Goal</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.name}>
                            <a href={item.points_page}>
                                <td>{item.name}</td>
                            </a>
                            <td>{'$' + item.curr + '/ $' + item.goal}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;
