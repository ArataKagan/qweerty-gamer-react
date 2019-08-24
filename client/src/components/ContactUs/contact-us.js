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
        const data = {
            "fname": this.state.fname,
            "lname": this.state.lname,
            "email": this.state.email,
            "message": this.state.message
        }
        
        // fetch("http://localhost:3000/api/form", {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json",
        //               "Access-Control-Allow-Origin": "*"
        //              },
        //     body: JSON.stringify(data)
        // })
        // .then((res) => {return res.json()})
        // .then(res => {
        //     if(res.ok){
        //         console.log("request sucess");
        //         return res.json();
        //     } else {
        //         console.log("request fail");
        //         throw new Error("something went wrong..");
        //     }
        // }).catch(err => {
        //     console.log(err);
        //     console.log("error happed");
        // }) 

        axios.post("http://localhost:3001/contact", data)
            .then(
                response => {
                    console.log("success!");
                    console.log(response.data);
            })
            .catch(err => {
                console.log(err);
                console.log(err.code);
                console.log(err.message);
                console.log(err.stack);
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
                                <form className={style['form-main']} method="POST" action="/contact">
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
