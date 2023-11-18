import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </main>
  );
}
