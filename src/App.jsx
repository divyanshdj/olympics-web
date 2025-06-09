import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import Events from "./assets/components/Events";
import Live from "./assets/components/Live";
import News from "./assets/components/News";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <main className="min-h-screen">
        <Home />
        <Events />
        <Live />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;