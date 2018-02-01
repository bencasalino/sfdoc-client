import React from "react";

export default function Header() {
  return <header>
      <a href="https://github.com/bencasalino">
        <img className="Github animated slideInDown" src="/assets/github.png" alt="Github Logo" />
      </a>
      <img className="LogoImage animated slideInLeft" src="/assets/field.png" alt="Logo" />
      <span className="Logo">
        Soccer Field Directory<br /> of Colorado
      </span>
      {/* <img className="Ball" src="/assets/logo.png" alt="Logo" /> */}
      {/* Soccer Field Directory of Colorado */}
    </header>;
}
