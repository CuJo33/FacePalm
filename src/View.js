import React from "react";
import Scard from "./Scard";

class View extends React.Component {
  constructor(props) {
    super(props);}

  buildPosts() {
    return this.props.posts.map((current, i, a) => {
      console.log(current)
      return (
      <Scard
        key={i}
        postId={current.postid}
        id={current.userName}
        img={current.img}
        videoURL={current.videoURL}
        userPhoto={current.userPhoto}
        text={current.text}
        likes={current.likes}
        likeaction={this.props.likeaction}
        fails={current.fails}
        failsaction={this.props.failsaction}
        facePalms={current.facePalms}
        facePalmsaction={this.props.facePalmsaction}
      />
    )});
  }

  render() {
    return (
      <>
        <div>{this.buildPosts()}</div>
        <div id="att">
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </div>
      </>
    );
  }
}

export default View;
