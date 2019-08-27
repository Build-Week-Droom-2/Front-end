import React from 'react';
import {Form, Field, withFormik} from 'formik';
import * as yup from 'yup';

const FormComp = (props) => {
    return(
        <Form>
            <Field type='text' name='name' placeholder='' />
            <Field type='text' name='title' placeholder='' />
            <Filed type='text' name='exp' placeholder='' />
            <Field type='text' name='edu' placeholder='' />
            <Field type='text' name='skills' placeholder='' />
        </Form>    
    );
};

const FormikForm = withFormik({
    mapPropsToValues: ({ name, title, exp, edu, skills}) => {
        return {
            name: name || '',
            title: title || '',
            exp: exp || '',
            edu: edu || '',
            skills: skills || '',
        };
    },
    validationSchema: yup.object().shape({
        name: yup.string()
            .required("Need Name"),
        title: yup.string(),
        exp: yup.string(),
        edu: yup.string(),
        skills: yup.string()     
    })
})(FormComp);

export default FormikForm;