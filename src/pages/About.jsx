import { Link } from "react-router-dom";

const  About = () => {
  return (
    <main>
      <h1>About  FutsalStore</h1>
      <p>FutsalStore adalah marketplace yang menjual produk-produk alat olahraga futsal.</p><br /><br />
      <button><Link to="/">Exit</Link></button><br /><br />
    </main>
  );
}

export default About
