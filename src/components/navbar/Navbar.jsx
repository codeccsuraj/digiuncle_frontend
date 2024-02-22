import React from "react";
import { Link } from "react-router-dom";
// import { RiFindReplaceLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { GiHandTruck } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { useCart } from "react-use-cart";

const Navbar = () => {
  const {
    totalUniqueItems
  } = useCart();
  return (
    <>
      <nav className="flex items-center justify-end py-1 bg-slate-200">
        <ul className="mx-10 flex items-center gap-8">
          <li>
            <Link to="/myaccount" className="font-semibold text-[14px] flex items-center gap-1"><FaRegUserCircle />My account</Link>
          </li>
          <li>
            <Link className="font-semibold text-[14px] flex items-center gap-1"><GiHandTruck />Orders</Link>
          </li>
          <li>
            <Link className="font-semibold text-[14px] flex items-center gap-1"><IoCallOutline /> Contact us</Link>
          </li>
          <li>
            <Link className="font-semibold text-[14px] flex items-center gap-1"><MdOutlineSupportAgent size={16} /> Support</Link>
          </li>
        </ul>
      </nav>
      <nav className="navbar navbar-expand-lg bg-white sticky-top">
        <div className="container-fluid">
          <Link to="/" className="fs-4 font-semibold">DIGIUNCLE</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button text-dark" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-4 gap-4">
                <li className="nav-item">
                  <Link to="/shop" className="nav-link fw-bold">Shop</Link>
                </li>
                <li className="nav-item dropdown-center">
                  <Link className="nav-link fw-bold dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Wishlist</Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item">item 1</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link fw-bold">Cart({totalUniqueItems})</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
