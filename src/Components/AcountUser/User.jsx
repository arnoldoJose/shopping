import React, { useState } from 'react'
import { fetchData } from '../../Config/Fetch';
// import { useNavigate } from 'react-router-dom'
import '../../Style/formUser.css';

const User = () => {

  const [user,setUser] = useState({name:'',email:'',password:'',role:'costumer',
  avatar:'https://api.lorem.space/image/face?w=640&h=480&r=4616'});

  // const navigate = useNavigate();

  const handelChange = (e) => {
    let { name,value } = e.target;
    setUser({
      ...user,
      [name] : value
    })
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
  try {
    let data = await fetchData.post('/users/',user);
    console.log(data)
    // if(data.status === 201) navigate('/products')
  } catch (error) {
    console.log(error)
  }
  }

  return (
    // <Layout>
    <div className="container-user-acount">
      <div className="container-form">
      <div className='header-form'><h1>CUENTA PRINCIPAL LOGIN</h1></div>

      <div className="card-acount">
        <div className="title-acount">
          <h3>Register User</h3>
        </div>
        <div className="form-container">
        <form  className='form-acount' onSubmit={handelSubmit}>
          <div className="form-group">
           <div className='input-name'>
           <label htmlFor="">
              Name
            </label>
           </div>
            <input type="text" required={true} name='name' onChange={handelChange} className='form-control' />
          </div>
          <div className="form-group">
            <div className="input-name">
            <label htmlFor="">Email</label>
            </div>
            <input type="text" name='email' required={true} onChange={handelChange} className='form-control' />
          </div>
          <div className="form-group">
            <div className="input-name">
            <label htmlFor="">Password</label>
            </div>
            <input type="text" name='password' required={true} onChange={handelChange} className='form-control' />
          </div>
          <input  type="submit" className='btnSubmit' value="Registrate" />
        </form>
        </div>
        <div className="recovery-pasword">
          <h2>recupera tu password</h2>
        </div>
      </div>
      </div>
    </div>
    // </Layout>
  )
}

export default User

// https://api.escuelajs.co/api/v1/users/