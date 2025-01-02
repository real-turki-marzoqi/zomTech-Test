
import { Col, Container , Row } from 'react-bootstrap'
import notFounfImg from '../images/diverse/404 Error.gif'

const NotFoundPage = () => {
  return (
    <>
    <Container className='mt-2 mb-2 notFoundPageContainer'>
        <Row>
            <Col >
            <p className='notFoundPageHead'>الصفحة غير موجودة</p>
            </Col>
      
        </Row>

        <Row>
            <Col>
        <img className='notFoundPageImg' src={notFounfImg} alt='not found page img' />
            </Col>
      
        </Row>


        <Row>
            <Col>
            <button className='notFoundPageBtn'><i style={{fontSize:"20px"}} className="fa-solid fa-house"></i> </button>
            </Col>
      
        </Row>
    </Container>

      
    </>
  )
}

export default NotFoundPage
