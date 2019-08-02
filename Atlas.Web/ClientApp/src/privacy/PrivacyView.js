import React from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import AtlasAppBar from '../common/AtlasAppBar';

import { textPageStyle } from '../Layout';
import { withStyles } from '@material-ui/core/styles';


class PrivacyView extends React.Component {
    render() {
        return (
            <div>
                <AtlasAppBar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Privacy
                    </Typography>
                </AtlasAppBar>
                <Grid container spacing={8} style={textPageStyle}>
                    <Grid item xs={false} sm={3}></Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" gutterBottom>Privacy Policy</Typography>

                        <Divider />
                        <br />

                        <Typography variant="body1" gutterBottom>Effective date: December 28, 2018</Typography>
                        <Typography variant="body1" gutterBottom>Atlas Info ("us", "we", or "our") operates the atlasgame.info website (the "Service").</Typography>
                        <Typography variant="body1" gutterBottom>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy  for Atlas Info is based on the <a href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/">Free Privacy Policy Template Website</a>.</Typography>
                        <Typography variant="body1" gutterBottom>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from atlasgame.info</Typography>
                        <Typography variant="h5" gutterBottom>Information Collection And Use</Typography>
                        <Typography variant="body1" gutterBottom>We collect several different types of information for various purposes to provide and improve our Service to you.</Typography>
                        <Typography variant="h6" gutterBottom>Types of Data Collected</Typography>
                        <Typography variant="h6" gutterBottom>Personal Data</Typography>
                        <Typography variant="body1" gutterBottom>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</Typography>

                        <List>
                            <ListItemText>Cookies and Usage Data</ListItemText>
                        </List>

                        <Typography variant="h6" gutterBottom>Usage Data</Typography>
                        <Typography variant="body1" gutterBottom>We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</Typography>
                        <Typography variant="h6" gutterBottom>Tracking & Cookies Data</Typography>
                        <Typography variant="body1" gutterBottom>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</Typography>
                        <Typography variant="body1" gutterBottom>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</Typography>
                        <Typography variant="body1" gutterBottom>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</Typography>
                        <Typography variant="body1" gutterBottom>Examples of Cookies we use:</Typography>
                        <List>
                            <ListItemText><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</ListItemText>
                            <ListItemText><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</ListItemText>
                            <ListItemText><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</ListItemText>
                        </List>

                        <Typography variant="h6" gutterBottom>Use of Data</Typography>

                        <Typography variant="body1" gutterBottom>Atlas Info uses the collected data for various purposes:</Typography>
                        <List>
                            <ListItemText>To provide and maintain the Service</ListItemText>
                            <ListItemText>To notify you about changes to our Service</ListItemText>
                            <ListItemText>To allow you to participate in interactive features of our Service when you choose to do so</ListItemText>
                            <ListItemText>To provide customer care and support</ListItemText>
                            <ListItemText>To provide analysis or valuable information so that we can improve the Service</ListItemText>
                            <ListItemText>To monitor the usage of the Service</ListItemText>
                            <ListItemText>To detect, prevent and address technical issues</ListItemText>
                        </List>

                        <Typography variant="h6" gutterBottom>Transfer Of Data</Typography>
                        <Typography variant="body1" gutterBottom>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</Typography>
                        <Typography variant="body1" gutterBottom>If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.</Typography>
                        <Typography variant="body1" gutterBottom>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</Typography>
                        <Typography variant="body1" gutterBottom>Atlas Info will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</Typography>

                        <Typography variant="h6" gutterBottom>Disclosure Of Data</Typography>

                        <Typography variant="h6" gutterBottom>Legal Requirements</Typography>
                        <Typography variant="body1" gutterBottom>Atlas Info may disclose your Personal Data in the good faith belief that such action is necessary to:</Typography>
                        <List>
                            <ListItemText>To comply with a legal obligation</ListItemText>
                            <ListItemText>To protect and defend the rights or property of Atlas Info</ListItemText>
                            <ListItemText>To prevent or investigate possible wrongdoing in connection with the Service</ListItemText>
                            <ListItemText>To protect the personal safety of users of the Service or the public</ListItemText>
                            <ListItemText>To protect against legal liability</ListItemText>
                        </List>

                        <Typography variant="h6" gutterBottom>Security Of Data</Typography>
                        <Typography variant="body1" gutterBottom>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</Typography>

                        <Typography variant="h6" gutterBottom>Service Providers</Typography>
                        <Typography variant="body1" gutterBottom>We may employ third party companies and individuals to fi our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</Typography>
                        <Typography variant="body1" gutterBottom>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</Typography>

                        <Typography variant="h6" gutterBottom>Analytics</Typography>
                        <Typography variant="body1" gutterBottom>We may use third-party Service Providers to monitor and analyze the use of our Service.</Typography>
                        <List>
                            <ListItemText>
                                <Typography variant="body1" gutterBottom><strong>Google Analytics</strong></Typography>
                                <Typography variant="body1" gutterBottom>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</Typography>
                                <Typography variant="body1" gutterBottom>You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.</Typography>                <Typography variant="body1" gutterBottom>For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></Typography>
                            </ListItemText>
                        </List>


                        <Typography variant="h6" gutterBottom>links To Other Sites</Typography>
                        <Typography variant="body1" gutterBottom>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</Typography>
                        <Typography variant="body1" gutterBottom>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</Typography>


                        <Typography variant="h6" gutterBottom>Children's Privacy</Typography>
                        <Typography variant="body1" gutterBottom>Our Service does not address anyone under the age of 18 ("Children").</Typography>
                        <Typography variant="body1" gutterBottom>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</Typography>


                        <Typography variant="h6" gutterBottom>Changes To This Privacy Policy</Typography>
                        <Typography variant="body1" gutterBottom>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</Typography>
                        <Typography variant="body1" gutterBottom>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</Typography>
                        <Typography variant="body1" gutterBottom>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</Typography>


                        <Typography variant="h6" gutterBottom>Contact Us</Typography>
                        <Typography variant="body1" gutterBottom>If you have any questions about this Privacy Policy, please contact us:</Typography>
                        <List>
                            <ListItemText>By visiting this page on our website: atlasgame.info/contact</ListItemText>

                        </List>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles({}, { withTheme: true })(PrivacyView);