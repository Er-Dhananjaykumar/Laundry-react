import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Greeting
        name="Dhananjay Kumar"
        role="Software Developer"
      />

      <Greeting
        name="Rahul"
        role="Frontend Developer"
      />

      <Greeting
        name="Aman"
        role="Backend Developer"
      />

      <Footer />
    </>
  );
}

export default App;