import React, { Component } from 'react';
import styles from './privacy-policy.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faMeetup } from '@fortawesome/free-brands-svg-icons'

class PrivacyPolicy extends Component {
    render(){
        return(
            <div className='row'>
              <div className='col-1' style={{backgroundColor: '#393f4d', paddingTop:'50px'}}>
                <div className="d-flex flex-column bd-highlight mb-3">
                          <a href='https://www.facebook.com/groups/qweertygamers/'><FontAwesomeIcon icon={faFacebook} size="2x" color="#eee" /></a>
                          <a href='https://twitter.com/qweertygamers'><FontAwesomeIcon icon={faTwitter} size="2x" color="#eee" /></a>
                        <a href='https://www.google.com'><FontAwesomeIcon icon={faMeetup} size="2x" color="#eee"/></a>
                    </div>
                </div>
              <div className='col' style={{padding: '0px'}}>
                <div className={styles['privacy-policy-main']}>
                    <h1 className={styles['h1']}>Qweerty Gamers Privacy Policy</h1>
                    <p>This Website (the “Website”) is operated by Qweerty Gamers, Inc. (the “Company” or “We”). Qweerty Gamers is a Los Angeles based organization with the goal of integrating LGBTQ Gamers into the gamer community, to provide the opportunity for local developers to reach out to LGBTQ Gamers, and to provide programs & workshops for upcoming and emerging careers and hobbies within the industry. This privacy policy (the “Privacy Policy”) explains what information the Company collects on this Website, how We use your information and the choices you have about the way your information is collected and used. Please read this Privacy Policy carefully. Your use of this Website indicates that you have read and accepted its privacy practices, as outlined in this Privacy Policy.
                        The Company respects your privacy, and while We may collect personally identifiable information, We pledge not to sell any personally identifiable information to a third party.
                        This Privacy Policy is subject to change, so you are encouraged to review the Privacy Policy from time to time. The Company reserves the right to alter, modify, update, add to, subtract from or otherwise change this Privacy Policy at any time for any reason or no reason at all. We will post any changes here, and any changes will become effective immediately upon being posted unless We tell you otherwise.
                    </p>
                    <h2>Information Collection and Use</h2>
                    <p> 
                    During your use of the Website, you may be prompted to provide personally identifiable information, including but not limited to, your name, location, email address, and financial information. The Company uses the information it collects about you to, among other things, improve our service, contact you when necessary, provide anonymous reporting internally and to third parties in order to optimize the Website functionality, and to fulfill your requests, including but not limited to donation requests.
                    </p>
                    <h2>Communications from the Site</h2>
                    <p>
                    Promotions, Contests, and Newsletters: From time to time, the Company may conduct promotions or contests and issue newsletters. Participation in these promotions, contests, and newsletters is voluntary and you, therefore, have a choice whether or not to disclose any of your information. We may use a third party service provider to conduct the promotion or contest or administer the newsletters; such service provider will be prohibited from using your personally identifiable information for any other purpose. Any use and sharing of information gathered through promotions, contests, and newsletters will be disclosed to you during the sign-up process.
                    Customer Service Announcements: You may receive an initial email after you sign-up to the Website. We may also communicate with you in response to your inquiries as necessary.     
                    Company Announcements: From time to time, We may send you announcements regarding the Company. Although you may not opt-out of these communications, you may unsubscribe to the mailing list in order to stop receiving them.
                    </p>
                    <h2>Information Sharing and Disclosure</h2>
                    <p>Aggregate Information (non-personally identifiable): We may share non-personally identifiable aggregate information with our partners and advertisers. This aggregate information does not identify individual users and individual users will never be linked to their aggregate information and shared with a third party.
                        Personally Identifiable Information: We will never sell personally identifiable information to any third party and will never share any personally identifiable information except for the manner detailed in the Legal Disclaimer section of the Privacy Policy.
                        Log files: As with most other Web sites, We may collect and store certain information on a regular basis. This information includes, but is not limited to internet protocol (“IP”) addresses, web browser information, Internet service provider (“ISP”), referring/exit pages, operating system, date/time stamp, and click data. This information is used to analyze trends, to administer the site, and to gather demographic information about the user base as a whole. It is not personally identifiable information, nor is it linked to personally identifiable information.
                        HTTP Cookies: A cookie is a small text file sent by a web server to a user’s browser that is used for authentification, record-keeping, and tracking a user’s activity on a website. Although We may use cookies on this site, We do not link them to personally identifiable information.
                        Legal Disclaimer: We reserve the right to disclose your personally identifiable information as required by applicable laws, when necessary to protect our rights, to prevent fraud, and when required to comply with a judicial process, administrative process, court order, or other legal process served on our Website or the Company.
                        Notice to California Residents / Your California Privacy Rights: Pursuant to California Civil Code § 1789.3, the provider of an electronic commercial service shall provide to consumers with which it contracts to provide the service, at the time it contracts to provide the service and annually, on or before June 30 of each year thereafter, all of the following information:
                        The name, address, and telephone number of the provider of service;
                        Any charges to the consumer imposed by the provider for the use of the service; and
                        The procedures a consumer may follow in order to resolve a complaint regarding the service or to receive further information regarding the use of the service, including the telephone number and address of the Complaint Assistance Unit of the Division of Consumer Services of the Department of Consumer Affairs.
                        To make such a request, please send an e-mail to privacypolicy@qweertygamers.org. Please include “California Resident” in the subject line, and your full name, e-mail address, and postal address in your message.
                    </p>
                    <h2>Children Under Thirteen (13) Years of Age</h2>
                    <p>
                    The Company does not knowingly collect any personally identifiable information from children under thirteen (13) years of age unless the collection complies with the Children’s Online Privacy Protection Act. If you are under thirteen (13) years of age, do not send any information about yourself to the Company.  If the Company discovers that a child under the age of 13 has provided the Company with personally identifiable information, the Company will use commercially reasonable efforts to delete that child’s personally identifiable information.
                    </p>
                    <h2>
                    Access to Personally Identifiable Information
                    </h2>
                    <p>
                    If any of your personally identifiable information changes, or if you no longer desire registration with the Website, you may edit/delete your information by unsubscribing from the mailing list.
                    </p>
                    <h2>Sale or Merger</h2>
                    <p>
                        Should the Company undergo a business transition, merger, sale, or acquisition by another entity, your personally identifiable information will likely be among the assets that are transferred. Should this situation arise, the Company will notify you by prominently placing a notice on this site.
                    </p>
                    <h2>Collection In and Transfer to The United States</h2>
                    <p>
                    This Website is operated in the United States. If you are located in the European Union, Canada or elsewhere outside of the United States, please be aware that any information you provide will be collected in or transferred to the United States. By using the Website, participating in any of our services and/or providing us with your information, you consent to this transfer.
                    </p>
                    <h2>Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <p>
                    Qweerty Gamers
                    17216 Saticoy St #210
                    Van Nuys, CA 91406

                    privacypolicy@qweertygamers.org
                    </p>
                </div>
                </div>
            </div>
        )
    }
}

export default PrivacyPolicy;