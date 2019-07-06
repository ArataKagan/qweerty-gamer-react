import React, { Component } from 'react';
import memberData from './member-information.js';
import style from '../member.module.css';

class MemberProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: memberData
        };
    }
    render(){
        return(
            <div className={style['member-profile-main']}>
            <div className='container'>
            <div className='row justify-content-center'>
                    {
                        this.state.data.map((item, index) => {
                        return(
                            <div className='col-4'>
                                <img src={item.image} style={{width: '150px'}}/>
                                <p>{item.name}</p>
                                <p>{item.title}</p>
                            </div> 
                        )
                    })}
                    </div>
            </div>
            </div>
        )
    }
} 

export default MemberProfile;