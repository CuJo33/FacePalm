import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./App.css";
import View from "./View";
import Add from "./Add";
import Profile from "./Profile";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{userName: "test", userPhoto: "testUrl", userId: "1"}, {userName: "test2", userPhoto: "testUrl2", userId: "2"}],
      userId: undefined,
      posts: [],
      postId: undefined,
    };
  }

  // componentDidMount() {
  //   // localStorage.removeItem("posts")
  //   const listContents = localStorage.getItem("posts");
  //   let postValue = 0;
  //   if (listContents) {
  //     postValue =
  //       JSON.parse(listContents)[JSON.parse(listContents).length - 1].postid;
  //   }

  //   this.setState({ posts: JSON.parse(listContents) || [], postId: postValue });
  // }

  
  // componentDidMountUser() {
  //   const userContents = localStorage.getItem("users");
  //   let userValue = 0;
  //   if (userContents) {
  //     userValue =
  //       JSON.parse(userContents)[JSON.parse(userContents).length - 1].userid;
  //   }

  //   this.setState({ user: JSON.parse(userContents) || [], userId: userValue });
  // }

  
  updateUserItems(userId, userName, userPhoto) {
    const userItem = { userId, userName, userPhoto };
    this.setState(
      (state) => ({
        users: state.users.concat(userItem),
      }),
      () => localStorage.setItem("user", JSON.stringify(this.state.users))
    );
  }


  updateListItems(postItem) {
    console.log(postItem)
    this.setState(
      (state) => ({
        posts: state.posts.concat(postItem),
      }),
      () => localStorage.setItem("posts", JSON.stringify(this.state.posts))
    );
  }

  addLike(id) {
    this.setState(
      (state) => ({
        posts: state.posts.map((post) =>
          post.postid === id ? { ...post, likes: post.likes + 1 } : post
        ),
      }),
      () => localStorage.setItem("posts", JSON.stringify(this.state.posts))
    );
  }

  addFails(id) {
    this.setState(
      (state) => ({
        posts: state.posts.map((post) =>
          post.postid === id ? { ...post, fails: post.fails + 1 } : post
        ),
      }),
      () => localStorage.setItem("posts", JSON.stringify(this.state.posts))
    );
  }

  addFacePalms(id) {
    this.setState(
      (state) => ({
        posts: state.posts.map((post) =>
          post.postid === id ? { ...post, facePalms: post.facePalms + 1 } : post
        ),
      }),
      () => localStorage.setItem("posts", JSON.stringify(this.state.posts))
    );
  }

  render() {
    return (
      <Router>
        <Navbar bg="primary" expand="md">
          <Navbar.Brand>FacePalm™</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/Profile">
                Profile
              </Link>
              <Link className="nav-link" to="/">
                View
              </Link>
              <Link className="nav-link" to="/add">
                Add
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          <div className="page">
          <Switch>
            <Route path="/add">
              <Add
                posts={this.state.posts}
                users={this.state.users}
                onsubmit={(postid, id, text, img, videoURL, likes, fails, facePalms) =>
                  this.updateListItems(
                    postid,
                    id,
                    text,
                    img,
                    videoURL,
                    likes,
                    fails,
                    facePalms
                  )
                }
                lastid={this.state.postId}
              />
            </Route>
            <Route path="/Profile">
              <Profile
                onsubmit={(userId, userName, userPhoto) =>
                  this.updateUserItems(userId, userName, userPhoto)
                }
                lastid={this.state.userId}
              />
            </Route>
            <Route exact path="/">
              <View
                users={this.state.users}
                posts={this.state.posts}
                likeaction={(id) => this.addLike(id)}
                failsaction={(id) => this.addFails(id)}
                facePalmsaction={(id) => this.addFacePalms(id)}
              />
            </Route>
            <Route path="/">Error: 404 not found</Route>
          </Switch>
          </div>  
        </Container>
      </Router>
    );
  }
}
export default App;
