import React from "react";
function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <div id="menuArea">
        {/* <div></div> */}
        <div className="menu-logo">BlockID</div>
        <div>
          <input type="checkbox" id="menuToggle"></input>

          <label for="menuToggle" class="menuOpen">
            <div class="open"></div>
          </label>

          <div class="menu menuEffects">
            <label for="menuToggle"></label>
            <div class="menuContent">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
      
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
