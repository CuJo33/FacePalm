import React from "react";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Card from "react-bootstrap/Card";

const radios = [
  { name: "Add Image", value: "1", checked: true },
  { name: "Add Video", value: "2", checked: false },
];

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "Choose User",
      userPhoto: "",
      userName: "",
      text: "",
      img: "",
      videoURL: "",
      checked: false,
      radioVal: true,
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

    this.submitHandler = this.submitHandler.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     postId:
  //       this.props.posts.lenght > 0
  //         ? this.props.posts[this.props.posts.length - 1].postId
  //         : 0,
  //   });
  // }

  handleChange(event) {
    event.preventDefault();
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  submitHandler(event) {
    event.preventDefault();
    const newId = this.state.postId + 1;
    this.props.onsubmit({
      postId: this.props.posts.length,
      userName: this.state.currentUser,
      text: this.state.text,
      img: this.state.img,
      videoURL: this.state.videoURL,
      likes: 0,
      fails: 0,
      facePalms: 0,
      radioVal: this.state.radioVal,
      userPhoto: this.state.userPhoto,
    });
    toastr.success("post added");
    this.setState({
      userName: "",
      text: "",
      img: "",
      videoURL: "",
      likes: 0,
      fails: 0,
      facePalms: 0,
      radioVal: true,
      userPhoto: "",
    });
  }

  findUser(filterUser) {
    this.props.users.map((user) => {
      if (user.userName === filterUser) {
        this.setState({
          userPhoto: user.userPhoto,
          currentUser: user.userName,
        });
      }
    });
  }

  setRadioValue(radioValPass) {
    if (radioValPass === "2") {
      this.setState({ radioVal: false });
    } else {
      this.setState({ radioVal: true });
    }
  }

  render() {
    return (
      <>
        <Card bg="light" className="mx-auto mt-2">
          <Form onSubmit={(e) => this.submitHandler(e)}>
            <Form.Group controlId="userID">
              <Form.Label>User</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {this.state.currentUser || "Choose User"}
                </Dropdown.Toggle>

                <Dropdown.Menu
                  onClick={(e) => this.findUser(e.target.innerHTML)}
                >
                  {this.props.users.map((user) => {
                    return (
                      <Dropdown.Item key={user.userId}>
                        {user.userName}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>

            <Form.Group controlId="text">
              <Form.Label>Text</Form.Label>
              <Form.Control
                name="text"
                type="text"
                value={this.state.text}
                placeholder="text"
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>

            <ButtonGroup className="mb-2">
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant="secondary"
                  name="radio"
                  value={radio.value}
                  checked={
                    idx === 0 ? this.state.radioVal : !this.state.radioVal
                  }
                  onChange={(e) => this.setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
            {this.state.radioVal ? (
              <Form.Group controlId="img">
                <Form.Label>Image Address</Form.Label>
                <Form.Control
                  name="img"
                  type="text"
                  value={this.state.img}
                  placeholder="insert url for image"
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
            ) : (
              <Form.Group controlId="video">
                <Form.Label>Video Address</Form.Label>
                <Form.Control
                  name="videoURL"
                  type="text"
                  value={this.state.videoURL}
                  placeholder="insert url for video"
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
            )}
            <Button variant="primary" type="submit">
              Add Post
            </Button>
          </Form>
        </Card>
      </>
    );
  }
}
export default Add;
