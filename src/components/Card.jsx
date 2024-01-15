import Image from "./Image";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function Card() {
  return (
    <div className="card">
      <Image />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
