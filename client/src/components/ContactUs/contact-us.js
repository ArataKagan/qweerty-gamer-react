import React, {Component} from 'react';
import style from './contact-us.module.css';
import axios from 'axios';

class ContactUs extends Component {
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: ''
        }

        // this.resetForm = this.resetForm.bind(this);
    }

    handleFormSubmit(e){
        e.preventDefault();
        console.log(this.state);
        console.log('submit clicked');

        const { fname, lname, email, message } = this.state;


        axios.post("/api/form", {
            fname,
            lname,
            email,
            message
        })
        .then(response => {
            console.log(response);
        })
        .catch((err) => {
            if(err.response){
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else if (err.request){
                console.log(err.request);
            } else {
                console.log("Error", err.message);
            }
           console.log(err.config);
        })

        this.setState({
            fname: '',
            lname: '',
            email: '',
            message: ''
        })
    }

    // resetForm(){
    //     this.setState({
    //         fname: '',
    //         lname: '',
    //         email: '',
    //         message: ''
    //     })
    // }

    render(){
        return(
            <div>
                <div className={style['contact-us-image']}>
                </div>
                <div className={style['contact-us-main']}>
                    <h1 className={style['h1']}>Contact Us</h1>
                    <div>
                        <div className='row'>
                            <div className='col'>
                                <form action='/action_page.php' className={style['form-main']}>
                                    <label className={style['label']}>First Name</label>
                                    <input type='text' className={style['form-input']} id='fname' name='firstname' 
                                        placeholder='Your first name...' 
                                        onChange={e => this.setState({fname: e.target.value})}
                                    />
                                    <label className={style['label']}>Last Name</label>
                                    <input type='text' className={style['form-input']} id='lname' name='lastname' 
                                        placeholder='Your last name...'
                                        onChange={e => this.setState({lname: e.target.value})} 
                                    />
                                    <label className={style['label']}>Email</label>
                                    <input type='email' className={style['form-input']} id='email' name='email' 
                                        placeholder='Your email' 
                                        onChange={e => this.setState({ email: e.target.value })}/>
                                    <label className={style['label']}>Subject</label>
                                    <textarea className={style['form-input']} name='subject' 
                                        placeholder='Write something..'
                                        onChange={e => this.setState({ message: e.target.value })}>
                                    </textarea>
                                    <input type='submit' className={style['form-submit']} value='Submit' 
                                    onClick={e => this.handleFormSubmit(e)} value="Submit"/>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs;
