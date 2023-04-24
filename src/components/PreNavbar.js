import React from "react";
import "../styles/PreNavbar.css";
const PreNavbar = () => {
  return (
    <div className="preNav">
      <div>
        <a href="https://www.mi.com/in/">MI INDIA</a>
        <span>|</span>
        <a href="https://in.event.mi.com/in/install-mi-store">
          GET MI STORE APP
        </a>
        <span>|</span>
        <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">
          MI INDIA
        </a>
        <span>|</span>
        <a href="https://www.mi.com/in/service/authorized_store/">
          RETAIL STORE
        </a>
      </div>
      <div>
        <a href="https://account.xiaomi.com/fe/service/login/">SIGN IN</a>
        <span>|</span>
        <a href="https://in.account.xiaomi.com/fe/service/register?_locale=en&source=&region=IN&sid=passport&qs=_locale%3Den&callback=https%3A%2F%2Faccount.xiaomi.com&_uRegion=IN">
          SIGN UP
        </a>
        <span>|</span>
        <a href="https://account.xiaomi.com/fe/service/login/">CART (0)</a>
      </div>
    </div>
  );
};

export default PreNavbar;
