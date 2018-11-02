import React from "react";

const PageListItem = ({item}) => (
    <tr>
        <td>
            <a href="#">{item.Title}</a>
        </td>
        <td>{item.Url}</td>
    </tr>
);

export default PageListItem;