import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        { touched }
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={ className }>
            <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error: ''}
               </div>
            </div>
        );
    }

    onSubmitt(values) {
        // this === component
        console.log(values);
        
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render () {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmitt.bind(this))}>
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
                <button type="submit" className="btn btn-submit" >
                    Submit
                </button>
                <Link to="/" className="btn btn-danger">Back to posts</Link>
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
})(
    connect(null, { createPost })(PostsNew)
);