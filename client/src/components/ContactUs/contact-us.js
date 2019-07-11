import React from 'react';
import style from './contact-us.module.css';

function ContactUs(){
    return(
        <div>
            <div className={style['contact-us-image']}>
            </div>
            <div >
                <h1>Contact Us</h1>
                <div>
                    <form action='/action_page.php'>
                        <label>First Name</label>
                        <input type='text' className={style['form-input']} id='fname' name='firstname' placeholder='Your first name...' />
                        <label>Last Name</label>
                        <input type='text' className={style['form-input']} id='lname' name='lastname' placeholder='Your last name...' />
                        <label>Email</label>
                        <input type='email' className={style['form-input']} id='email' name='email' placeholder='Your email' />
                        <label>Subject</label>
                        <textarea id='subject' name='subject' placeholder='Write something..'></textarea>
                        <input type='submit' className={style['form-submit']} value='Submit' />
                    </form>
                </div>
            </div>

            
        </div>
    )
}

export default ContactUs;
