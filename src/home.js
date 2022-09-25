import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ContentColumnComponent from './contentColumnComponent';

const Home = () => {
    return ( 
        <div>
            <Container fluid>
                <Row className='mt-5'>
                    <Col>
                        <ContentColumnComponent></ContentColumnComponent>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default Home;