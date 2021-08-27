import React from "react";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import FailsIcon from "./fail.jpg";

class Fails extends React.Component {
  clickHandler(event) {
    console.log(this.props.postId);
    this.props.failsaction(this.props.postId);
  }

  render() {
    return (
      <>
        <Table>
          <tbody>
            <tr>
              <td>
                <Image
                  onClick={() => this.clickHandler()}
                  fluid
                  className="mx-auto"
                  src={FailsIcon}
                  width="50px"
                  alt="Fails logo"
                />
              </td>
              <td>{this.props.no}</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}

export default Fails;
