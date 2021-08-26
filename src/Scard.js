import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Likes from "./Likes";
import Fails from "./Fails";
import Row from "react-bootstrap/Row"
import FacePalms from "./FacePalms";
import Col from "react-bootstrap/Col"
// import { MDBContainer} from 'mdbreact'

class Scard extends React.Component {
  constructor(props) {
    super(props);
}


  render() {
    return (
      <Card bg='light' className="mx-auto text-center mt-2">
        <Card.Header as="h5">{this.props.id}
          <Image
            fluid
            className="mx-auto"
            src={this.props.userPhoto}
            alt={this.props.alt}
          />
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
                  likeaction={this.props.likeaction}
                  postId={this.props.postId}
                />
                </Col>
                <Col>
                <Fails
                  no={this.props.fails}
                  failsaction={this.props.failsaction}
                  postId={this.props.postId}
                />
                </Col>
                <Col>
                <FacePalms
                  no={this.props.facePalms}
                  facePalmsaction={this.props.facePalmsaction}
                  postId={this.props.postId}
                />
                </Col>
                </Row>
              </Card.Body>
            </Col>
            <Col>
{this.props.radioVal ?
              (<Image
                fluid
                className="mx-auto"
                src={this.props.img}
                alt={this.props.alt}
              />)
:
              (
              <div className="video-section">
                {console.log(this.props.videoURL)}
                 {/* src={this.props.videoURL}  */}
               <iframe
                    width="853"
                    height="480"
                    src="https://www.youtube.com/embed/sNSNGDS5-IM" 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
              </div>)
}
            </Col>
          </Row>
        </div>
      </Card>
     
    );
  }
}

export default Scard;
