import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Tarjeta from './Tarjeta'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const personajes = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRaxgqEVBX4jF4Ul3jzOJFElZY8eI6A57QA&s",
      name: "Superman",
      universe: "DC",
      description: "El más fuerte de todos los superhéroes",
      powers: "Rayos X, volar, super fuerza",
      stats: [
        { key: 'Fuerza', value: 50 },
        { key: 'Velocidad', value: 100 },
        { key: 'Defensa', value: 400 }
      ]
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Batman_Detective_Comics_1000_Variant.jpg/250px-Batman_Detective_Comics_1000_Variant.jpg",
      name: "Batman",
      universe: "DC",
      description: "Detective experto y millonario",
      powers: "Inteligencia, gadgets, artes marciales",
      stats: [
        { key: 'Fuerza', value: 20 },
        { key: 'Velocidad', value: 30 },
        { key: 'Defensa', value: 70 }
      ]
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BYWRkN2M1NmQtZjhjMi00ODFjLTk2ODctYWJiOWNkNjg1OGY4XkEyXkFqcGc@._V1_.jpg",
      name: "Spiderman",
      universe: "Marvel",
      description: "Obtuvo sus poderes de la picadura de una araña",
      powers: "Tira telaraña, trepa paredes, se columpia entre edificios", 
      stats: [
        { key: 'fuerza', value: 20 }, 
        { key: 'velocidad', value: 90 }, 
        { key: 'defensa', value: 100 }
        ]
    }
  ];

  return (
    <>
      <Header/>
      <Container>
        <Row>
          {personajes.map((personaje, index) => (
            <Col md={4} key={index}> {/* 3 tarjetas por fila */}
              <Tarjeta {...personaje} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default App
