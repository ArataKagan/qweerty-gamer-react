import React, { Component } from 'react';

import styles from './footer.module.css';

class Footer extends Component {
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className={styles['footer']}>
                <div className="container">
                   <div className="row">
                      <div className='col'>
                            <img src={require("./../qg_logo_png.png")} alt='logo' width='200px'/>
                            <div class="d-flex flex-column bd-highlight mb-3">
                                <div class="p-2 bd-highlight">Qweerty Gamers is a nonprofit organization with the goal of integrating LGBTQ Gamers into the gamer community, to provide the opportunity for local developers to reach out to LGBTQ Gamers, and to provide programs & workshops for upcoming and emerging careers and hobbies within the industry.</div>
                            </div>
                      </div>
                      <div className="col">
                            <div class="d-flex flex-column bd-highlight mb-3">
                                <div class="p-2 bd-highlight">Event</div>
                                <div class="p-2 bd-highlight">About</div>
                                <div class="p-2 bd-highlight">Blog</div>
                                <div class="p-2 bd-highlight">Shopping</div>
                                <div class="p-2 bd-highlight">Donate</div>
                                <div class="p-2 bd-highlight">Contact Us</div>
                            </div>
                      </div>
                      <p className="col">text</p>
                   </div>
                </div>
               
            </div>

        );
    }
}

export default Footer;