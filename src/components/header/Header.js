import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="header">
            <div className="headerLeft">
              <Container fluid>
                <Row>
                  <Col>
                    <Link to="/">
                      <img
                        className="header__icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                      />
                    </Link>
                  </Col>
                  <Col>
                    <Link
                      to="/movies/popular"
                      style={{ textDecoration: "none" }}
                    >
                      <span>Popular</span>
                    </Link>
                  </Col>
                  <Col>
                    <Link
                      to="/movies/top_rated"
                      style={{ textDecoration: "none" }}
                    >
                      <span>TopRated</span>
                    </Link>
                  </Col>
                  <Col>
                    <Link
                      to="/movies/upcoming"
                      style={{ textDecoration: "none" }}
                    >
                      <span>Upcoming</span>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
