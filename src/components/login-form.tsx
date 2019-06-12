import React from 'react';
import { Formik, FormikActions, FormikProps, Form } from 'formik';
import firebase from 'firebase';
import { makeStyles, createStyles, Theme, InputBase } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import { StyledButton } from '../styles/SButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: 0,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginRight: 5,
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: 0,
        width: 'auto'
      }
    },
    inputRoot: {
      color: '#ffffff'
    },
    inputInput: {
      padding: theme.spacing(1),
      transition: theme.transitions.create('width'),
      width: '100%',
      color: '#ffffff',
      [theme.breakpoints.up('md')]: {
        width: 200
      }
    }
  })
);
export interface FormValues {
  email: string;
  password: string;
}
export const LoginForm = () => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={(values: FormValues, actions: FormikActions<FormValues>) => {
        console.log(values);
        firebase.auth().signInWithEmailAndPassword(values.email, values.password);
        actions.setSubmitting(false);
      }}
      render={(formikBag: FormikProps<FormValues>) => (
        <Form style={{ display: 'flex' }}>
          <div className={classes.search}>
            <InputBase
              name="email"
              placeholder={`"EMAIL"`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              value={formikBag.values.email}
              onChange={formikBag.handleChange}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
          <div className={classes.search}>
            <InputBase
              name="password"
              placeholder={`"PASSWORD"`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              value={formikBag.values.password}
              onChange={formikBag.handleChange}
              type="password"
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>

          <StyledButton type="submit">{`"LOGIN"`}</StyledButton>
        </Form>
      )}
    />
  );
};
