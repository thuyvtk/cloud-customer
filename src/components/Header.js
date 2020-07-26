import React, { useState } from "react";
import "../abc.css";
import { Drawer } from "antd";

function Header() {
  const [leftMenuModal, setLeftMenuModal] = useState(false);

  return (
    <div className="site-header-main header-fix">
      <Drawer
        title="Loại giày"
        placement="left"
        closable={true}
        onClose={() => setLeftMenuModal(false)}
        visible={leftMenuModal}
      >
        <p>Nam</p>
        <p>Nữ</p>
      </Drawer>
      <div className="">
        <div className="">
          <div className="w-full flex">
            <div className="w-1/5 flex items-center">
              <div>
                <img
                  className="ml-10 mr-3 cursor-pointer"
                  src={require("../assets/navigationBar/menu.png")}
                  alt="th"
                  onClick={() => setLeftMenuModal(true)}
                  style={{ width: "20px" }}
                />
              </div>
              <div className="header-logo cursor-pointer">
                <img
                  src={require("../assets/navigationBar/logo.png")}
                  className="logo"
                  alt="th"
                />
              </div>
            </div>
            <div className="w-3/5">
              <div className=" w-full header-search">
                <input
                  type="search"
                  className="search-field"
                  placeholder="Tìm kiếm sản phẩm..."
                />
                <button type="submit" className="btn-search">
                  Tìm kiếm
                </button>
              </div>
            </div>
            <div className="w-1/5 flex mr-20 items-center">
              {/* search */}
              <div className="flex">
                <a
                  className="flex items-center"
                  href="http://capricathemes.com/wordpress/WCM01/WCM010020/WP2/"
                >
                  <img
                    src={require("../assets/navigationBar/user.png")}
                    className="mr-3"
                    alt="login"
                    style={{ width: "25px", height: "25px" }}
                  />
                  <div className="text-white">
                    <p className="text-xs m-0 mt-2">Đăng nhập</p>
                    <p className="text-xs">& Đăng ký</p>
                  </div>
                </a>
              </div>
              {/* cart */}
              <div className="flex border-l ml-5 pl-5 border-gray-500">
                <a
                  className="flex items-center"
                  href="http://capricathemes.com/wordpress/WCM01/WCM010020/WP2/"
                >
                  <img
                    src={require("../assets/navigationBar/supermarket1.png")}
                    className="cart mx-1"
                    alt="cart"
                  />
                  <div className="">
                    <div className="bg-red-500 w-5 rounded-full text-center text-sm text-white">
                      0
                    </div>
                    <p className="text-xs text-white">Giỏ Hàng</p>
                  </div>
                </a>
              </div>
              {/* login - register */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
