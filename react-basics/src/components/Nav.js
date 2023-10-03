function Nav(props) {
  return (
    <nav className="main-nav">
      <ul className="flex-container">
        <a href="#">
          <li className="flex-item">{props.item1}</li>
        </a>
        <a href="#">
          <li className="flex-item">{props.item2}</li>
        </a>
        <a href="#">
          <li className="flex-item">{props.item3}</li>
        </a>
        <a href="#">
          <li className="flex-item">{props.item4}</li>
        </a>
      </ul>
    </nav>
  );
}

export default Nav;
