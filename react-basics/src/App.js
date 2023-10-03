import './App.css';
import Heading from './components/Heading';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Promo from './components/Promo';
import Wrapper from './components/Wrapper';
import Button from './components/Button';
import Parent from './components/Parent';

function App() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  return (
    <div className="App">
      <Heading firstName="Bob" />
      <Heading firstName="Adam" />
      <Nav item1="Home" item2="About" item3="Locations" item4="Contact" />
      <Promo />
      <div>
        <h1>Task: Add a button and handle a click event</h1>
        <button onClick={handleClick}>Guess the number between 1 and 3</button>
      </div>

      <hr />
      <hr />
      <hr />
      <hr />
      <Promo />

      <hr />
      <hr />
      <hr />
      <hr />
      <Parent />
      <hr />
      <hr />
      <hr />
      <hr />

      <Button />

      <Wrapper />

      <Intro
        headline="I've become a React developer!"
        body="I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!"
        learnMoreUrl="#"
      />
      <Intro
        headline="Why I love front-end web development"
        body="In this blog post, I'll list 10 reasons why I love to work as a front-end developer."
        learnMoreUrl="#"
      />
      <Intro
        headline="What's the best way to style your React apps?"
        body="There are so many options to choose from. Here's a high-level overview of the popular ones."
        learnMoreUrl="#"
      />

      <Footer />
    </div>
  );
}

export default App;
