
import React, { useState } from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Helmet } from 'react-helmet'

const Register = () => {

    //if Yup is not defined then use this if else method
    //need to import in MyRoute.jsx
    const[email,setEmail]=useState('')
    const [validEmail, setValidEmail] = useState(false);

    const[password,setPassword]=useState('')
    const[validpassword,setValidpassword]=useState(false)

    const [cpassword,setCpassword]=useState('')
    const[validCpassword,setValidCpassword]=useState(false)

    const emailRegex=/^([a-z0-9])[a-z0-9\.\_\-]@+([a-z])+\.+([a-z])+$/
    const pwdRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\@\#\$\?\.]).{7,}$/
    const cpwdRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\@\#\$\?\.]).{7,}$/

    const handleEmail=(e)=>{
        const email=e.target.value
        if(!email.match(emailRegex)){
            setValidEmail(true)
        }
        else{
            setValidEmail(false)
        }
        setEmail(email)
    }

    const handlePwd=(e)=>{
        const password=e.target.value
        if(!password.match(pwdRegex)){
            setValidpassword(true)
        }
        else{
            setValidpassword(false)
        }
        setPassword(password)
    }
    const handleCpwd=(e)=>{
        const cpassword=e.target.value
        if(!cpassword.match(cpwdRegex)){
            setValidCpassword(false)
        }
        else{
            setValidCpassword(true)
        }
        setCpassword(cpassword)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const password=e.target[0].value
        if(!password.match(pwdRegex)){
            setValidpassword(true)
        }
        else{
            setValidpassword(false)
        }

        const cpassword=e.target[1].value
        if(!cpassword.match(cpwdRegex)){
            setValidCpassword(false)
        }
        else{
            setValidCpassword(true)
        }

        if((!password.match(pwdRegex)) && (!cpassword.match(cpwdRegex))){
            alert('Form has been submitted')
            alert('password=' + password + 'cpassword=' + cpassword)
        }
    }
  return (
    <>
    <Helmet>
        <title>Register</title>
    </Helmet>
    <Formik
    initialValues={{
        firstname:'',lastname:'',email:'', password:'',cpassword:''
    }}
    validationSchema={Yup.object({
        firstname:Yup.string()
        .max(20,'must be characters or less')
        .required('firstname is mandatory'),

        lastname:Yup.string()
        .max(20,'must be characters or less')
        .required('lastname is mandatory'),

        email:Yup.string()
            .email('invalid email format')
            .required('email is mandatory'),

            password:Yup.string()
            .required('password is mandatory'),

            cpassword:Yup.string()
            .required('confirm password to mandatory'),
        
    })}
    >
        <div className="container my-3">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 shadow p-3">
                    <Form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="firstname">Firstname</label>
                            <Field type="text" name="firstname" id="firstname" value={email} className="form-control" onChange={handleEmail}/>

                            <ErrorMessage name='firstname'>
                                {msg=><div style={{color:'red'}}>{msg}</div>}

                            </ErrorMessage>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="lastname">Lastname</label>
                            <Field type="text" name="lastname" id="lastname" className="form-control" />
                            <ErrorMessage name='lastname'>
                                {msg=><div style={{color:'red'}}>{msg}</div>}

                            </ErrorMessage>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" id="email" className="form-control"  />
                            {validEmail ? <span style={{color:'black'}}>Invalid email</span>:<span style={{color:'blue'}}>Required valid email</span>}
                            <ErrorMessage name='email'>
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                                
                            </ErrorMessage>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" value={password} onChange={handlePwd} id="password" className="form-control" />
                            {validpassword ? <span style={{color:'black'}}>Invalid password</span>:<span style={{color:'blue'}}>Required password</span>}
                            <ErrorMessage name='password'>
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                                
                            </ErrorMessage>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="cpassword">Cpassword</label>
                            <Field type="password" value={cpassword} onChange={handleCpwd} name="cpassword" id="cpassword" className="form-control" />
                            {validCpassword ? <span style={{color:'black'}}>Invalid Cpassword</span>:<span style={{color:'blue'}}>Required Cpassword</span>}
                            <ErrorMessage name='cpassword'>
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                                
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <button className='btn btn-danger'>Register Here</button>
                        </div>

                    </Form>
                </div>
            </div>

        </div>
    </Formik>
    </>
  )
}

export default Register