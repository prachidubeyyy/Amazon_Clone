import React from 'react';
import './navbarBanner.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavbarBanner = () => {
  const options = [
    { name: "Fresh" },
    { name: "MX Player" },
    { name: "Sell" },
    { name: "BestSellers" },
    { name: "Prime" },
    { name: "Mobiles" },
    { name: "Today's Deals" },
    { name: "Customer Service" },
    { name: "New Releases" },
    { name: "Fashion" },
    { name: "Amazon Pay" },
    { name: "Electronics" },
    { name: "Home & Kitchen" },
    { name: "Computers" },
    { name: "Car & Motorbikes" },
    { name: "Books" },
  ];

  return (
    <div className="navbarBanner">
      <div className="navbarBannerOptionsLeft">

        <div className="optionsNavbarBanner">
          <MenuIcon sx={{ fontSize: 20 }} />
          <div className="allOptionsNavbarBanner">All</div>
        </div>

        {options.map((item, ind) => (
  <Link to="/products" className="optionsNavbarBanner" key={ind}>
    <div className="allOptionsNavbarBanner">
      {typeof item.name === 'string' ? item.name : JSON.stringify(item.name)}
    </div>
  </Link>
))}


      </div>
    </div>
  );
};

export default NavbarBanner;
