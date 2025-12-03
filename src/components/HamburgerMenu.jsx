import { Link } from "react-router-dom";

export default function HamburgerMenu({ open, setOpen }) {
  return (
    <div className={`menu ${open ? "open" : ""}`}>
      <Link to="/" onClick={() => setOpen(false)}>Home</Link>
      <Link to="/about" onClick={() => setOpen(false)}>About</Link>
      <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
      <Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
      <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
    </div>
  );
}
