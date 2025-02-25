import React, { useState } from 'react';
import './live.css'; 

const Navbar = ({ onNavClick, username, onLogout }) => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const toggleSide = () => {
    setIsSideOpen(!isSideOpen);
  };

  const handleNavClick = (navItem) => {
    onNavClick(navItem);
    setIsSideOpen(false); 
  };

  const openPayment = () => {
    setIsPaymentOpen(true); 
  };

  const closePayment = () => {
    setIsPaymentOpen(false); 
  };

  const redirectToUPI = () => {
    window.location.href = "upi://pay?pa=9362954890@ptsbi"; 
  };

  return (
    <>
      <div className='navflex'>
        <img src="./line.jfif" alt="line" onClick={toggleSide} />
        <span style={{ color: "white", fontSize: "18px",}} className="username">Welcome {username}</span>
        <div>
        
          <img 
            src="https://static.vecteezy.com/system/resources/previews/009/793/387/non_2x/india-currency-rupee-icon-symbol-illustration-vector.jpg" 
            alt="payment icon"  
            onClick={openPayment} 
          />
          <img
            src="https://icones.pro/wp-content/uploads/2022/01/icone-de-commentaires-grise.png"
            alt="Feedback Icon"
            style={{ cursor: "pointer" }}
            onClick={() => (window.location.href = "https://shadow-chat-1205.vercel.app/")}
          />
          {/* <button onClick={onLogout}>Logout</button> */}
        </div>
      </div>
      {isSideOpen && <SideNav onNavClick={handleNavClick} />}
      {isPaymentOpen && <PaymentModal onClose={closePayment} onPay={redirectToUPI} />}
    </>
  );
};

const SideNav = ({ onNavClick }) => {
  return (
    <div className='side-nav'>
      <ul>
        <li onClick={() => onNavClick('Home')}>Home</li>
        <li onClick={() => onNavClick('TV')}>Live TV</li>
        <li onClick={() => onNavClick('Movies')}>Movies</li>
        <li onClick={() => onNavClick('Albums')}>Songs</li>
        <li onClick={() => onNavClick('Series')}>Series</li>
        <li onClick={() => onNavClick('Video-Songs')}>Video Songs</li>
        <li onClick={() => onNavClick('Sports')}>Sports</li>
      </ul>
    </div>
  );
};

const PaymentModal = ({ onClose, onPay }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Contribute</h2>
        <h3>Scan to Pay</h3>
        <img 
          src="https://github.com/vijesh0512/image/blob/main/cad6e87b-1b60-4358-b9a6-0575f6c12d8b.jpg?raw=true" 
          alt="QR Code" 
          className="qr-image" 
        />
        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="paynow-btn" onClick={onPay}>Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
