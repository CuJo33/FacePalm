import React from "react";
import Scard from "./Scard";

class View extends React.Component {
  constructor(props) {
    super(props);
  }

  buildPosts() {
    return this.props.posts.map((current, i, a) => {
      return (
        <Scard
          key={i}
          postId={current.postId}
          id={current.userName}
          img={current.img}
          videoURL={current.videoURL}
          userPhoto={current.userPhoto}
          radioVal={current.radioVal}
          text={current.text}
          likes={current.likes}
          likeaction={(i) => this.props.likeaction(i)}
          fails={current.fails}
          failsaction={(i) => this.props.failsaction(i)}
          facePalms={current.facePalms}
          facePalmsaction={(i) => this.props.facePalmsaction(i)}
        />
      );
    });
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
