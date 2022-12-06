import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Navbar,
  Nav,
  Col,
  Row,
  Card,
  Button,
  CardGroup,
} from "react-bootstrap";
function App() {

  const ClickHandler=()=>{
    alert("Book Not Loaded")
  }
  return (
    <div className="App">
      <header>
        <Navbar mp={5} bg="dark" variant="dark" style={{ height: "80px" }}>
          <Container>
            <Navbar.Brand href="#home">Home Page </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row className="px=4 my=5 " style={{ paddingTop: "30px" }}>
            <Col sm={7}>
              <Card className="bg-dark text-white ">
                <Card.Img
                  src="https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0"
                  alt="Card image" style={{hover:"opacity:0.3"}}
                  fluid
                  rounded
                  
                />
              </Card>
            </Col>
            <Col sm={5} style={{ paddingTop: "100px" }}>
              <h1 class="font-weigh-light">Book</h1>
              <p class="mt-4" style={{ textAlign: "left" }}>
                In Our Daily Life We Need To Learn Some Good Things Like Book
                Reading, Bcoz Of This Book Reading Habbit We Can Able To Gain
                More Knowledge from The Article, So Please Read The Books Daily
                Routine
              </p>
              <Button variant="outline-info" onClick={ClickHandler}>Click To Read Book</Button>
            </Col>
          </Row>
        </Container>
        <CardGroup style={{ paddingTop: "10px" }}>
          <Card style={{ alignItems: "center" }}>
            <Card.Img
              variant="top"
              src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/05/21035708/51QSrQDru9L._SX342_BO1204203200_-207x300.jpg"
              style={{ height: "500px", width: "500px" }}
            />
            <Card.Body>
              <Card.Title>Wings Of Fire</Card.Title>
              <Card.Text>
                A group of five young dragons who are prophesized to end a
                decades long war that has decimated the fictional lands of
                Pyrrhia and Pantala
              </Card.Text>
            </Card.Body>
            <Button variant="outline-dark" onClick={ClickHandler}>Click To Read Boo</Button>
          </Card>
          <Card style={{ alignItems: "center" }}>
            <Card.Img
              variant="top"
              src="https://www.frontlist.in/storage/uploads/2021/06/711hfHGEcL.jpg"
              style={{ height: "500px", width: "500px" }}
            />
            <Card.Body>
              <Card.Title>Ruskin Bond</Card.Title>
              <Card.Text>
                The story is about a boy who lives with his grandparents in
                Dehradun. In his house, there is a big Banyan tree.
              </Card.Text>
            </Card.Body>
            <Button variant="outline-dark" onClick={ClickHandler}>Click To Read Boo</Button>
          </Card>
          <Card style={{ alignItems: "center" }}>
            <Card.Img
              variant="top"
              src="http://www.ekyaschools.com/ekya-blog/wp-content/uploads/sites/5/2017/08/1.jpg"
              style={{ height: "500px", width: "500px" }}
            />
            <Card.Body>
              <Card.Title>The Blue Umbrella</Card.Title>
              <Card.Text>
                The Blue Umbrella by Ruskin Bond describes life in the hill
                community of Gharwal, where common people rise to heroic status
                while others are given chances to atone for their transgressions
              </Card.Text>
            </Card.Body>
            <Button variant="outline-dark" onClick={ClickHandler}>Click To Read Boo</Button>
          </Card>
        </CardGroup>
      </main>
      <footer>
        <Card className="bg-dark text-white " style={{ marginTop: "34px" ,textAlign:"center"}}>
          <Card.Title>Books</Card.Title>
          <Card.Text>
            Books are the treasure of knowledge and wisdom. They are the best
            companions of man in his journey of life. They enhance our thinking
            power and make us more knowledgeable. Books are the basic reason for
            the progress and development of human civilization.
          </Card.Text>
          <Card.Text>@CopyRight </Card.Text>
        </Card>
      </footer>
    </div>
  );
}

export default App;
