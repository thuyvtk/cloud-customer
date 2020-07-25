import React from 'react'
import '../abc.css'

function Header() {
    return (
        <div className="site-header-main header-fix">
            <div className="">
                <div className="">
                    <div className="w-full flex">
                        <div className="w-1/5">
                            <div className="header-logo">
                                <img src={require("../assets/navigationBar/logo.png")} className="logo" alt="th" />
                            </div>
                        </div>
                        <div className="w-3/5">
                            <div className="header-search">
                                <input type="search" className="search-field" placeholder="Tìm kiếm sản phẩm..." />
                                <button type="submit" className="btn-search">Tìm kiếm</button>
                            </div>
                        </div>
                        <div className="w-1/5 flex">
                            {/* search */}
                            <div className="">
                                <a className="flex items-center" href="http://capricathemes.com/wordpress/WCM01/WCM010020/WP2/">
                                    <img src={require("../assets/navigationBar/user.png")} className="user mx-2" alt="login" />
                                    <div className="text-white">
                                        <p className="font-medium">Đăng Nhập</p>
                                        <p className="font-medium">Đăng ký</p>
                                    </div>
                                </a>
                            </div>
                            {/* cart */}
                            <div className="flex border-l-2 ml-2 border-white">
                                <a className="flex items-center" href="http://capricathemes.com/wordpress/WCM01/WCM010020/WP2/">
                                    <img src={require("../assets/navigationBar/supermarket1.png")} className="cart mx-1" alt="cart" />
                                    <div className="">
                                        <div className="bg-red-500 w-5 rounded-full text-center text-sm text-white">0</div>
                                        <p className="font-medium text-white">Giỏ Hàng</p>
                                    </div>
                                </a>
                            </div>
                            {/* login - register */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
