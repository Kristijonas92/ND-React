import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Login.module.scss';

// Define the validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
});

const Login = () => (
  <div className={styles.loginPage}>
    <h1>Login / Sign Up</h1>
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        // Handle form submission
        console.log(values);
        // Simulate a form submission error
        if (values.username === 'error') {
          setErrors({ username: 'This username is not allowed' });
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <Field type="text" name="username" id="username" className={styles.input} />
            <ErrorMessage name="username" component="div" className={styles.error} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" className={styles.input} />
            <ErrorMessage name="password" component="div" className={styles.error} />
          </div>
          <div className={styles.buttonGroup}>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Login'}
            </button>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default Login;
