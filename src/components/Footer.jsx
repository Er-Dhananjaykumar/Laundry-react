import "../styles/footer.css";

function Footer({
  companyName = "Dhananjay Kumar",
  links = [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">
          © {currentYear} {companyName}. All rights reserved.
        </p>

        {links.length > 0 && (
          <nav aria-label="Footer navigation" className="footer__nav">
            {links.map(({ label, href }) => (
              <a key={label} href={href} className="footer__link">
                {label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </footer>
  );
}

export default Footer;