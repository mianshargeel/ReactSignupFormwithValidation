import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
    const validate = Yup.object({
        firstName: Yup.string().max(15, 'Max 15 Characters or less').required('Required'),
        lastName: Yup.string().max(15, 'Max 15 Characters or less').required('Required'),
        email: Yup.string().email('Invalid Email').required('Email is Required'),
        password: Yup.string().min('Password Contain at least 6 Characters').required('Password is Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm Pasword is Rquired')
    }); //end of Yup.object [Note in confirmPassword we used refference of password because both should be same ]
    return (<>
        {/* <h1>Form Validation</h1> */}
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: ""
            }}

            validationSchema={validate}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {/* creating formik arrow function */}
            {formik => (
                <div>
                    <h2 className="my-4 font-weight-bold ">Sign Up For Full Access</h2><hr />
                    <Form>
                        <TextField label="First Name" name="firstName" type="text" /> {/*using component TextField */}
                        <TextField label="Last Name" name="lastName" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="Confirm Password" name="confirmPassword" type="password" />
                        <button className='btn btn-dark mt-3' type='submit'>Register</button>
                        <button className='btn btn-danger mt-3 ms-3' type='reset'>Reset</button>

                    </Form>
                </div>
            )}

        </Formik>

    </>)
}

export default Signup;
