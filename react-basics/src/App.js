import './App.css';
import Heading from './components/Heading';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Promo from './components/Promo';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Heading firstName="Bob" />
      <Heading firstName="Adam" />
      <Nav item1="Home" item2="About" item3="Locations" item4="Contact" />
      <Promo />

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
