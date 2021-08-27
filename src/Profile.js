import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Card from "react-bootstrap/Card";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      userName: "",
      userPhoto: "",
    };
    toastr.options = {
      closeButton: true,
      debug: false,
      extendedTimeOut: "1000",
      hideDuration: "1000",
      hideEasing: "linear",
      hideMethod: "fadeOut",
      newestOnTop: false,
      onclick: null,
      positionClass: "toast-top-full-width",
      preventDuplicates: true,
      progressBar: true,
      showDuration: "300",
      showEasing: "swing",
      showMethod: "fadeIn",
      timeOut: "5000",
    };
    toastr.clear();
  }

  componentDidMountUser() {
    this.setState({
      userId: this.users.lastid,
    });
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  submitHandler(event) {
    event.preventDefault();
    const newId = this.state.userId + 1;
    this.props.onsubmit(newId, this.state.userName, this.state.userPhoto);
    toastr.success("post added");
    this.setState({
      userId: newId,
      userName: "",
      userPhoto: "",
    });
  }

  render() {
    return (
      <>
        <Card bg="light" className="mx-auto mt-2">
          <Form autocomplete="off" onSubmit={(e) => this.submitHandler(e)}>
            <Form.Group controlId="userName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                name="userName"
                type="text"
                value={this.state.userName}
                placeholder="User Name"
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>

            <Form.Group controlId="userPhoto">
              <Form.Label>Profile Photo</Form.Label>
              <Form.Control
                name="userPhoto"
                type="text"
                value={this.state.userPhoto}
                placeholder="insert url for image"
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add User
            </Button>
          </Form>
        </Card>
      </>
    );
  }
}
export default Profile;
