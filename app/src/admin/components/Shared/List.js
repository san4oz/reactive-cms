import React from "react";
import { Link } from "react-router-dom";

const List = ({items}) => {
    return (
        <section className="list">
            {items && items.map(item => (
                <div key={item.Id} className="item">
                    <div className="content">
                       <Link to={item.url}>
                           <h3>{item.title}</h3>
                       </Link>
                    </div>
                    <div className="actions">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default List;