import Button from "./Button";
import homePhoto from "../../assets/img/Img.svg";
import homeFooterItems from "../data/homeFooterItem.json";

export default function Home() {
  return (
    <section className="container home">
      <div className="home-header">
        <div className="home-info">
          <h1 className="home-info-title">
            Discover Accurate Diagnostics & Reliable{" "}
            <span className="home-info-title home-info-title--accent">
              Testing Services
            </span>
            .
          </h1>
          <div className="home-info-btn">
            <Button text="Book Appoinment" />
            <Button text="Learn More" />
          </div>
        </div>
        <div className="home-img">
          <img alt="homePhoto" src={homePhoto} />
        </div>
      </div>
      <ul className="home-footer">
        {homeFooterItems.map((homeFooterItem) => (
          <li>
            <p className="home-footer-number">{homeFooterItem.number}</p>
            <p className="home-footer-title">{homeFooterItem.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
