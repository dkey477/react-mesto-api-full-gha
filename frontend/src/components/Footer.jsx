import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">© {year}. Дмитрий Киреев</p>
    </footer>
  );
}

export default Footer;
