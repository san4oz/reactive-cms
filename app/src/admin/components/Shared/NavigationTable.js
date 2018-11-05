import React from "react";
import { Switch, Link } from "react-router-dom";

const createPropertyRow = (entityName, properties, item) => (
    <tr key={item.Id}>
        {properties.map(property => (
            <td key={property}>
                <Link to={`/admin/${entityName}/${item.Id}`}>
                    {item[property]}
                </Link>
            </td>
        ))}
    </tr>
);

const NavigationTable = ({ title, entityName, properties, items }) => (
    <table>
        <caption>{title}</caption>
        <thead>
            <tr>
                {properties.map(property => (
                    <th key={property}>{property}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {items.map(item => createPropertyRow(entityName, properties, item) )}
        </tbody>
    </table>
);

export default NavigationTable;