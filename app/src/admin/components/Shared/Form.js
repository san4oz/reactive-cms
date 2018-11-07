import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { ...this.props.item }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    handleChange(e){    
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {
        return (
            <div className="simple-form-wrapper">
                <h3>{this.props.title}</h3>
                <form className="simple-form" onSubmit={this.handleSubmit}>
                    {this.props.properties.map(property => createProperty(property, this.state[property.name], this.handleChange))}
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const elementsByPropertyType = {
    'text': (props) => <input type='text' {...props}/>,
    'content': (props) => <textarea {...props}></textarea>
}

const createProperty = (property, value, onChange) => (
    <React.Fragment key={property.name}>
        <label>{property.name}</label>
        {elementsByPropertyType[property.type]({name: property.name, value: value, onChange: onChange})}
    </React.Fragment>
);

export default Form;