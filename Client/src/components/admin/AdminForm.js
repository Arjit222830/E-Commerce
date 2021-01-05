import React, {useEffect} from 'react';
import { Field,FieldArray,reduxForm } from 'redux-form';

const AdminForm = (props)=> {

    const renderError= ({error, touched})=>{
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    const renderInput= ({ input, label, meta })=>{
        console.log({meta});
        const className= `field ${meta.error && meta.touched?'error':''} `
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {renderError(meta)}
            </div>
        );
    }

    const onSubmit= (formValues) => {
        console.log(formValues);
        props.onSubmit(formValues);
    }

    useEffect(() => {
        console.log(props);
      });

    return (
        <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
            <Field name="title" component={renderInput} label="Enter Title" />
            <Field name="category" component={renderInput} label="Enter Category" />
            <Field name="images[0]" component={renderInput} label="Enter Image" />
            <Field  name="images[1]" component={renderInput}  />
            <Field  name="images[2]" component={renderInput} />
            <Field  name="images[3]" component={renderInput}  />
            <Field name="brand" component={renderInput} label="Enter Brand" />
            <Field name="price" component={renderInput} label="Enter Price" />
            <Field name="cpu" component={renderInput} label="Enter CPU" />
            <Field name="camera" component={renderInput} label="Enter Camera" />
            <Field name="size" component={renderInput} label="Enter Size" />
            <Field name="weight" component={renderInput} label="Enter Weight" />
            <Field name="display" component={renderInput} label="Enter Display" />
            <Field name="battery" component={renderInput} label="Enter Battery" />
            <Field name="memory" component={renderInput} label="Enter Memory" />
            <Field name="description" component={renderInput} label="Enter description" />
            <button className="ui button primary">Submit</button>
        </form>
    );
    
}

const validate= (formValues) => {
    const errors= {};
    if(!formValues.title)
        errors.title= 'You must enter a title';

    if(!formValues.category)
        errors.category= 'You must enter a category';

    if(!formValues.images)
        errors.images= 'You must enter an image link';

    if(!formValues.brand)
        errors.brand= 'You must enter a brand';

    if(!formValues.price)
        errors.price= 'You must enter a price';

    if(!formValues.cpu)
        errors.cpu = 'You must enter a CPU info';

    if(!formValues.camera)
        errors.camera= 'You must enter a camera';

    if(!formValues.size)
        errors.size= 'You must enter size';

    if(!formValues.weight)
        errors.weight= 'You must enter a weight';

    if(!formValues.display)
        errors.display= 'You must enter a display';

    if(!formValues.battery)
        errors.battery= 'You must enter a battery';

    if(!formValues.memory)
        errors.display= 'You must enter a memory';

    if(!formValues.description)
        errors.description = 'You must enter a description';

    return errors;
}

export default reduxForm({
    form: 'adminForm',
    validate: validate
})(AdminForm);
