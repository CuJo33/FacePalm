import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Likes from "./Likes";
import Fails from "./Fails";
import Row from "react-bootstrap/Row";
import FacePalms from "./FacePalms";
import Col from "react-bootstrap/Col";

class Scard extends React.Component {
  constructor(props) {
    super(props);
  }

  createVideoURL(URL) {
    return "https://www.youtube.com/embed/" + URL.match(/(\w+(-)?\w+)$/g);
  }
  /* <img src="Quiztime.PNG" class="img-responsive img-circle margin" style="display:inline" alt="Quiz time Graphic " width="250" height="250"></img> */
  render() {
    return (
      <Card bg="light" className="mx-auto text-center mt-2">
        <Card.Header as="h5">
          <Row>
            <Col>
              <Image
                fluid
                className="mx-auto"
                src={this.props.userPhoto}
                alt={this.props.alt}
                width="60"
                height="60"
                roundedCircle="true"
              />
            </Col>
            <Col>{this.props.id}</Col>
            <Col></Col>
          </Row>
        </Card.Header>
        <div className="Container">
          <Row>
            <Col id="test">
              <Card.Body>
                <Card.Text>{this.props.text}</Card.Text>
                <Row>
                  <Col>
                    <Likes
                      no={this.props.likes}
                      likeaction={() =>
                        this.props.likeaction(this.props.postId)
                      }
                      postId={this.props.postId}
                    />
                  </Col>
                  <Col>
                    <Fails
                      no={this.props.fails}
                      failsaction={() =>
                        this.props.failsaction(this.props.postId)
                      }
                      postId={this.props.postId}
                    />
                  </Col>
                  <Col>
                    <FacePalms
                      no={this.props.facePalms}
                      facePalmsaction={() =>
                        this.props.facePalmsaction(this.props.postId)
                      }
                      postId={this.props.postId}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Col>
            <Col>
              {this.props.radioVal ? (
                <Image
                  fluid
                  className="mx-auto"
                  src={this.props.img}
                  alt={this.props.alt}
                />
              ) : (
                <div className="video-section auto-resizable-iframe">
                  <iframe
                    width="853"
                    height="480"
                    src={this.createVideoURL(this.props.videoURL)}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Card>
    );
  }
}

export default Scard;
