import React from 'react';
import {  Carousel, Card, Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://1.bp.blogspot.com/-teEj3rZUjQk/UUhq1P2EFsI/AAAAAAAAjXU/c94NKqiCFVQ/s1600/Travel++HD+wallpapers+(3).jpg"
            height="500"
            alt=""
          />
          <br/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp4782956.jpg"
            height="500"
            alt=""
          />
          
          <br/>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://lp-cms-production.imgix.net/2019-06/iStock_000026994380XLarge.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
              height="450" />
              <Card.Body>
                <Card.Title>Goa</Card.Title>
                <p>Goa is a state in western India with coastlines stretching along the Arabian Sea.</p>
                <a href="https://www.bing.com/ck/a?!&&p=a783fe1861a39cabJmltdHM9MTY5MDY3NTIwMCZpZ3VpZD0xZGU5NjE3YS02YmFlLTY5ZGYtMzZkYy03MTgyNmEwMzY4ODYmaW5zaWQ9NTE1Mg&ptn=3&hsh=3&fclid=1de9617a-6bae-69df-36dc-71826a036886&psq=goa+website&u=a1aHR0cHM6Ly9nb2EtdG91cmlzbS5jb20v&ntb=1" class="btn btn-primary">Learn More</a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://wallpapercave.com/wp/wp4413846.jpg"
              height="450" />
              <Card.Body>
                <Card.Title>Ooty</Card.Title>
                <p>Ooty is a resort town in the Western Ghats mountains, in southern India's Tamil Nadu state.</p>
                <a href="https://www.bing.com/ck/a?!&&p=6cd3819053855660JmltdHM9MTY5MDU4ODgwMCZpZ3VpZD0xZGU5NjE3YS02YmFlLTY5ZGYtMzZkYy03MTgyNmEwMzY4ODYmaW5zaWQ9NTI5NQ&ptn=3&hsh=3&fclid=1de9617a-6bae-69df-36dc-71826a036886&psq=about+ooty&u=a1aHR0cHM6Ly9vb3R5dG91cmlzbS5jby5pbi9zaWdodHNlZWluZy1wbGFjZXMtdG8tdmlzaXQtaW4tb290eQ&ntb=1" class="btn btn-primary">Learn More</a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://lp-cms-production.imgix.net/news/2018/04/ladakh.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=23&dpr=4" 
              height="450"/>
              <Card.Body>
                <Card.Title>Ladakh</Card.Title>
                <p>Ladakh is the region of mountain passes, an ideal place to see the supreme beauty of nature.</p>
                <a href="https://www.bing.com/ck/a?!&&p=7195beee2d16691aJmltdHM9MTY5MDU4ODgwMCZpZ3VpZD0xZGU5NjE3YS02YmFlLTY5ZGYtMzZkYy03MTgyNmEwMzY4ODYmaW5zaWQ9NTI0OA&ptn=3&hsh=3&fclid=1de9617a-6bae-69df-36dc-71826a036886&psq=about+ladakh&u=a1aHR0cDovL3d3dy5sYWRha2hkZWtoby5jb20vYWJvdXQtbGFkYWtoLmh0bWw&ntb=1" class="btn btn-primary">Learn More</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      
      <footer>
        <p>&copy; Copyrights reserved</p>
      </footer>
    </div>
  );
}

export default Home;
