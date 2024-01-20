import React, { useState } from 'react';
import './UserId.css'
import { Link, useNavigate } from 'react-router-dom';

const UserId = (props) => {
    console.log(props)
    const addMember =props.addMember;
    const [movile,setmovile] = useState('');
    const {name , username, email, income,phone,id} = props.UserId;

    const showPhone =() => setmovile(phone);
    const fullname = name;

    const navigate =  useNavigate();
 function handleClick(friendId) {
    navigate(`/UserId/${friendId}`);
  }
  
    return (
        <div className='user'>
            <img className='userimg'src= {props.UserId.img} alt="" />
            <p> Name : {fullname}</p>
            <p><small> Email : {email}</small></p>
            <p><small> username : {username}</small></p>
          <p>id : <Link to={`friend/${id}`}> buy</Link></p>
            <p><small>Phone : {movile}</small></p>
            <button onClick={showPhone}> Show Phone Number</button>
            <button onClick={()=> props.handleAddCart(props.UserId)}> Par Day Income </button>
            <button onClick={ () =>addMember(fullname)}>Add me</button>
          

            
        </div>
    );
};

export default UserId;