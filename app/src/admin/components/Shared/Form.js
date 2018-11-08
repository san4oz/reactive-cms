import React from "react";
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';
import FroalaEditor from 'react-froala-wysiwyg';

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
    'content': ({name, value, onChange}) => <FroalaEditor name={name} onModelChange={onChange} model={value} tag='textarea'/>
}

const createProperty = (property, value, onChange) => (
    <React.Fragment key={property.name}>
        <label>{property.name}</label>
        {elementsByPropertyType[property.type]({name: property.name, value: value, onChange: onChange})}
    </React.Fragment>
);

export default Form;