import React from "react";

const Table = ({title, properties, items}) => (
    <table>
        <caption>{title}</caption>
        <thead>
            <tr>
                {properties.map(property => (
                    <th>{property}</th>   
                ))}
            </tr>
        </thead>
        <tbody>
            {items.map(item => (
                <tr>
                    {properties.map(property => (
                        <td>{item[property]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;