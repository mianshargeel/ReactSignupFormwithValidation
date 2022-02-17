import React from 'react'
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => { //geting values which wehave given in Signup-Comp as props(label and props, in props we get more than one value because we use rest-operater) in Component TextField
    // console.log(props);
    //pass above values in useFiel and destructuring array
    const [field, meta] = useField(props);
    /*we can see in console field contains value [name, value, onChange, onblur] four thing
    meta contains [value, error, touched=(true/false), initialVlaue, and initialTouched=(true/false)]
    we will use above propertise to show some messages i-e error message */
    console.log(field);
    console.log(meta);
    return (
        <div className='mb-2'>
            {/* Note as in html we for="" in react we use as htmlFor= and passing label as we get from TextField  */}
            <label htmlFor={field.name}> {label} </label>
            <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props} autoComplete="off" />
            {/* in input we have added class='is-invalid' only when user touched the field and also error
             existing(means sometimes user left required field to submit) then that 
             class(is-invalid this class shows warning sign on field) aplly.
             {...field} cotains value of input {...props} contains name and type of input 
             autoComplete="off" we dont want keep save caache*/}

            <ErrorMessage component="div" name={field.name} className="error" />

        </div>
    )
}

export default TextField
