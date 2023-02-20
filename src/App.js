// import logo from './logo.svg';
// import './App.css';
import { Carousel } from "./websiteComponents/heroSection/heroSectionOne/Carousel";
import { Navigation } from "./websiteComponents/navigationbar/Navigation";
import { About } from "./websiteComponents/heroSection/aboutUs/About";
import { Test} from "./websiteComponents/heroSection/test/Test";

function App() {
  return (
    <>
      <Navigation />
      {/* <Test/> */}
      <Carousel />
      {/* <About /> */}
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
