import React from 'react';

const Footer = ({name,email}) =>{
    return(
        <div className='container-fluid'>
                <hr />
                <div className='text-center title text-uppercase' >
                    <small>
                        <span style={{color: 'red'}}> Name : {name}</span> | Email : <span>{email}</span>
                    </small>
                </div>
            </div>
    )
}

export default Footer;




