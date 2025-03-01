import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, aboutRef, menuRef, shopRef, contactRef }) {
  return (
    <>
      <Header
        aboutRef={aboutRef}
        menuRef={menuRef}
        shopRef={shopRef}
        contactRef={contactRef}
      />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
