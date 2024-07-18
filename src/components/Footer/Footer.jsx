import Styles from "./FooterStyles.module.css";
function Footer() {
  return (
    <section id="footer" className={Styles.container}>
      <p>
        {" "}
        &#169; 2024 Shivanandan K B. <br /> All Rights Reserved.
      </p>
    </section>
  );
}

export default Footer;
