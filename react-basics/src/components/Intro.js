function Intro(props) {
  return (
    <div className="blog-post-intro">
      <h2>{props.headline}</h2>
      <div>
        <p>{props.body}</p>
        <a className="link" href={props.learnMoreUrl}>
          Learn more
        </a>
      </div>
    </div>
  );
}

export default Intro;