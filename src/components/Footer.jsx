import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="footer1">
      <div className="left">
        <div className="social">
          <SocialIcon url="https://facebook.com/jaketrent" bgColor="blue" />
          <SocialIcon url="https://instagram.com/jaketrent" bgColor="red" />
          <SocialIcon url="https://tiktok.com/jaketrent" bgColor="black" />
        </div>
      </div>
      <div className="right">
        <h3>Contacts</h3>
        <ul>
          <li>Phone: +977995739722</li>
          <li>Email: plaza232@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
