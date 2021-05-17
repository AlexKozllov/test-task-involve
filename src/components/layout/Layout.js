import React from "react";

import s from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <header>{/* <Header /> */}</header>

      <main className={s.container}> {children}</main>
      <footer>{/* <Footer /> */}</footer>
    </div>
  );
};

export default Layout;
