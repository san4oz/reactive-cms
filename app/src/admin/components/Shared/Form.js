import React from "react";

const elementsByPropertyType = {
    'text': value => <input type='text' value={value} />,
    'content': content => <textarea value={content}></textarea>
}

const createProperty = (property, item) => (
    <React.Fragment key={property.name}>
        <label>{property.name}</label>
        {elementsByPropertyType[property.type](item[property.name])}
    </React.Fragment>
);

const Form = ({ title, item, properties }) => (
    <div className="simple-form-wrapper">
        <h3>{title}</h3>
        <form className="simple-form">
            {properties.map(property => createProperty(property, item))}
        </form>
    </div>
);

export default Form;