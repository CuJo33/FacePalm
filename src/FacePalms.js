import React from "react";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import FacePalmsIcon from "./facePalm.png";

class FacePalms extends React.Component {
  clickHandler(event) {
    console.log(this.props.postId);
    this.props.facePalmsaction(this.props.postId);
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
                  src={FacePalmsIcon}
                  width="25px"
                  alt="FacePalms logo"
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

export default FacePalms;
