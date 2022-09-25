import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubmissionForm from './submissionForm';

const FooterComponent = () => {
    return ( 
        <footer className='bg-dark'>
        <Row className='container-fluid mt-5'>
            <Col xs={12} md={4} lg={3}>
               <div className="address text-light p-5">
                    <h3> logo </h3>
                    <p> 5 Olaranwaju Usman Agambi Street, Ibeju Lekki, Lagos.</p>
               </div>
            </Col>
            <Col xs={12} md={4} lg={3}>
                <div className="address text-light p-5">
                    <h3> Address </h3>
                    <p> 5 Olaranwaju Usman Agambi Street, Ibeju Lekki, Lagos.</p>
               </div>
            </Col>
            <Col xs={12} md={4} lg={3}>
                <div className="address text-light p-5">
                    <h3> Contact </h3>
                    <p>Stalk Us everywhere on Social Media</p>
               </div>
            </Col>
            <Col xs={12} md={4} lg={3}>
                <div className="subscribe text-light p-5">
                    <h3> Subscribe</h3>
                    <SubmissionForm />   
                </div>
            </Col>
        </Row>
        </footer>
     );
}
 
export default FooterComponent;