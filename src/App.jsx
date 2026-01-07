import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './VigoLogo.jpg';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from './hero.jpg';
import image1 from './image1.jpg';  
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import image8 from './image8.jpg';


function App() {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,  // Engedélyezi az ismételt animációt
      mirror: true,  // Animálja ki (fade-out) amikor scroll out, és be újra amikor vissza
      offset: 200,  // Nagyobb offset a késleltetéshez
    });
  }, []);

  const handleSubmit = async (e) => { e.preventDefault(); try { await axios.post('https://formspree.io/f/TE_EMAIL_ENDPOINT', formData); alert('Üzenet elküldve!'); } catch { alert('Hiba!'); } };
  
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg" style={{ backgroundColor: '#0f172a' }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="Vigo Bausystem Logo"
              width="150"
              height="150"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#szolgaltatasok">Szolgáltatások</Nav.Link>
            <Nav.Link href="#galeria">Galéria</Nav.Link>
            <Nav.Link href="#kapcsolat">Kapcsolat</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Hero Section */}
        <div 
        id="home"
        className="hero-section" 
        style={{ 
          backgroundImage: `url(${heroImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '70vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: 'yellow',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          fontWeight: 800 
        }}
      >
        <div className="text-center">
          <h1>Vigo Bausystem – Padlástér Specialisták</h1>
          <p>Professzionális gipszkarton szerelés tetőterekbe, minőségi anyagokkal és precíz munkával.</p>
          <button variant="primary" href="#kapcsolat" size="lg" class="rounded-pill shadow" backgroundColor="&#x27;#0284c7&#x27" >
            Kapcsolatfelvétel
          </button>
        </div>
      </div>

      
        <section id="szolgaltatasok" className="py-5 bg-light">
        <Container fluid>  {/* Fluid a full-width-hez */}
          <h2 className="text-center mb-5">Szolgáltatásaink és Tippek</h2>

          {/* Első szolgáltatás: Full-width row, kép bal, szöveg jobb */}
          <Row className="align-items-center mb-5" data-aos="fade-in">
            <Col md={6} data-aos="fade-right">
              <img src={image1} alt="Padlástér szerelés" className="img-fluid rounded" />
            </Col>
            <Col md={6} data-aos="fade-left">
              <h3>Padlástér Gipszkarton Szerelés</h3>
              <p>Professzionális gipszkarton szerelést vállalok padlásterekben, beleértve álmennyezetek, válaszfalak és burkolatok kialakítását. A munkám során hangsúlyt fektetek a precíz illesztésre, hogy a tér maximálisan kihasználható legyen, akár lakószobaként, akár tárolóként.</p>
            </Col>
          </Row>

          {/* Második: Fordított sorrend a változatosságért (szöveg bal, kép jobb) */}
          <Row className="align-items-center mb-5" data-aos="fade-in" data-aos-delay="200">
            <Col md={6} data-aos="fade-right">
              <h3>Megfelelő Szigetelés</h3>
              <p>A padlástér szigetelése kulcsfontosságú a hőveszteség minimalizálásához. Használok minőségi szigetelőanyagokat, mint a kőzetgyapot vagy üveggyapot, amelyek nem csak a téli meleget tartják bent, de nyáron is hűvöset biztosítanak. Figyelembe veszem a tetőszerkezet típusát, hogy elkerüljük a hőhidakat.</p>
            </Col>
            <Col md={6} data-aos="fade-left">
              <img src={image2} alt="Szigetelés" className="img-fluid rounded" />
            </Col>
          </Row>

          {/* Harmadik: Újra kép bal, szöveg jobb */}
          <Row className="align-items-center mb-5" data-aos="fade-in" data-aos-delay="400">
            <Col md={6} data-aos="fade-right">
              <img src={image3} alt="Tűzvédelem" className="img-fluid rounded" />
            </Col>
            <Col md={6} data-aos="fade-left">
              <h3>Tűzvédelem</h3>
              <p>Tűzálló gipszkarton lapokat használok, amelyek megfelelnek az építési előírásoknak, különösen lakótereknél. Ez növeli a biztonságot, mivel lassítja a tűz terjedését, és extra védelmet nyújt a tetőszerkezetnek. Mindig figyelembe veszem a helyi tűzvédelmi szabályokat a telepítés során.</p>
            </Col>
          </Row>

        {/* Szolgáltatások section */}
        {/* Galéria */}

        <h2 id="galeria" className="text-center mb-5" style={{ color: '#1e293b' }}>Galéria</h2>
<Row>
  <Col md={4} data-aos="fade-up">
    <img src={image1} alt="Projekt 1" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image2} alt="Projekt 2" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image3} alt="Projekt 3" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image4} alt="Projekt 4" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image5} alt="Projekt 5" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image6} alt="Projekt 6" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image7} alt="Projekt 7" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image8} alt="Projekt 8" className="img-fluid rounded service-img mb-3" />
  </Col>
</Row>

<Container>
  <h2 id="kapcsolat" className="text-center mb-5" style={{ color: '#1e293b' }}>Kapcsolat</h2>
  <Row>
    <Col md={6}>
      <p style={{ color: '#1e293b' }}>Elérhetőségek: Email: vigobausystem@gmail.com | Telefon: +36 70 881 8473</p>
    </Col>
    <Col md={6}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Név</Form.Label>
          <Form.Control type="text" placeholder="Írja be a nevét" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Írja be az emailjét" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Üzenet</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ backgroundColor: '#0284c7' }}>Küldés</Button>
      </Form>
    </Col>
  </Row>
</Container>
        
      </Container>
      </section>
      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2026 Vigo Bausystem. Minden jog fenntartva.</p>
      </footer>
    </>
  );
}

export default App;
