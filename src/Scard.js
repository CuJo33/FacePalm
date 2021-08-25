import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Likes from "./Likes";
import Fails from "./Fails";
import Row from "react-bootstrap/Row"
import FacePalms from "./FacePalms";

class Scard extends React.Component {
  render() {
    return (
      <div>
        <Card className="mx-auto text-center mt-2">
          <Card.Header as="h5">{this.props.id}</Card.Header>
          <Image
            fluid
            className="mx-auto"
            src={this.props.img}
            alt={this.props.alt}
          />
          <Card.Body>
            <Card.Text>{this.props.text}</Card.Text>
            <Row>
            <Likes
              no={this.props.likes}
              likeaction={this.props.likeaction}
              postId={this.props.postId}
            />
            <Fails
              no={this.props.fails}
              failsaction={this.props.failsaction}
              postId={this.props.postId}
            />
            <FacePalms
              no={this.props.facePalms}
              facePalmsaction={this.props.facePalmsaction}
              postId={this.props.postId}
            />
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Scard;
