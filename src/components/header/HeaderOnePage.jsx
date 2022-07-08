import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menus from "../../pages/menuonepage";
import "./header.scss";
import ButtonOne from "../button/ButtonOne";
import useWindowDimensions from "../../useWindowDimension";

const HeaderOnePage = () => {
  const { pathname } = useLocation();
  const { width } = useWindowDimensions();

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
    return () => {
      setScroll({});
    };
  }, []);

  const [menuActive, setMenuActive] = useState(null);

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const handleDropdown = (index) => {
    setActiveIndex(index);
  };

  return (
    <header
      id='header_main'
      className={`header js-header ${scroll ? "is-fixed" : ""}`}
      style={{ paddingInline: "20px" }}
    >
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <div className='header__body d-flex justify-content-between'>
              <div className='header__logo'>
                <Link to='/'>
                  <h1 style={{ fontSize: "40px", color: "#FD562A" }}>
                    UORFI NFT
                  </h1>
                </Link>
              </div>

              <div className='header__right'>
                <nav
                  id='main-nav'
                  className={`main-nav ${menuActive ? "active" : ""}`}
                  style={{
                    display: `${width > 1260 ? "flex" : "inline-block"}`,
                  }}
                >
                  <ul id='menu-primary-menu' className='menu'>
                    {/* {(width > 1380 || width < 1260) && (
                      <> */}
                    <div style={{ display: "flex", width: "100%" }}>
                      <li data-aos='fade-up' data-aos-duration='1400'>
                        <a
                          href='https://www.instagram.com/urf7i/'
                          target='_blank'
                        >
                          <i
                            className='fab fa-instagram'
                            style={{ color: "white" }}
                          ></i>
                        </a>
                      </li>
                      <li data-aos='fade-up' data-aos-duration='1000'>
                        <a href='https://discord.gg/QruPReCh' target='_blank'>
                          <i
                            className='fab fa-discord'
                            style={{ color: "white" }}
                          ></i>
                        </a>
                      </li>
                      <li data-aos='fade-up' data-aos-duration='1000'>
                        <a href='https://twitter.com/urfeaslam' target='_blank'>
                          <i
                            className='fab fa-twitter'
                            style={{ color: "white" }}
                          ></i>
                        </a>
                      </li>
                    </div>
                    {/* </>
                    )} */}

                    {menus.map((data, index) => (
                      <li
                        key={index}
                        onClick={() => handleDropdown(index)}
                        className={`menu-item ${
                          data.namesub ? "menu-item-has-children" : ""
                        } ${activeIndex === index ? "active" : ""} ${
                          pathname === data.links ? "active" : ""
                        } `}
                      >
                        <a href={data.links}>{data.name}</a>
                        {data.namesub && (
                          <ul className='sub-menu'>
                            {data.namesub.map((submenu) => (
                              <li
                                key={submenu.id}
                                className={
                                  pathname === submenu.links
                                    ? "menu-item current-item"
                                    : "menu-item"
                                }
                              >
                                <Link to={submenu.links}>{submenu.sub}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div
                    style={{
                      marginTop: `${width < 1260 ? "30px" : "0px"}`,
                      display: `${width < 1260 ? "flex" : "inline-block"}`,
                      justifyContent: `${width < 1260 ? "center" : "none"}`,
                    }}
                  >
                    <ButtonOne />
                  </div>
                </nav>
                <div
                  className={`mobile-button ${menuActive ? "active" : ""}`}
                  onClick={handleMenuActive}
                >
                  <span></span>
                </div>
                <ul className='social'>
                  <li>
                    <Link to='#'>
                      <i className='fab fa-facebook-f'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <i className='fab fa-twitter'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <i className='fab fa-linkedin-in'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <i className='fab fa-youtube'></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOnePage;
