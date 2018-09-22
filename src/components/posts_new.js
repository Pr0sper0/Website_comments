import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
            <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }

    render () {
        return (
            <form onSubmit={}>
                <Field
                    label="Title For Post"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field 
                    label="Post content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-submit" />
            </form>
        );
    }
}

function validate(values) {
    // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
    const errors = {};

    // Validate the inputs from 'values'
    if(!values.title){
        errors.title = "Enter a title";
    }
 {/*   
    if (values.title.length < 3) {
        errors.title = "Enter a title that at lease 3 characters";
    }
*/}
    if (!values.categories) {
        errors.categories = "Enter some categories";
    }

    if (!values.content) {
        errors.content = "Enter some content";
    }


    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'PostNewForm'
})(PostsNew);