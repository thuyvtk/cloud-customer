import React from 'react'
import '../abc.css'
import Item from '../components/Item'
import Header from '../components/Header'

function Home() {
  return (
    <div>
      {/* header */}
      <Header/>
      <div id="main" className="site-main">
        <div className="main_inner">
          <div className="main-content-inner-full">

            <div id="main-content" className="main-content home-page full-width wide-page ">
              <div id="primary" className="content-area">
                {/* slider */}
                <div className="slider">
                  <div className="slide-inner">
                    <div className="slide-inner-left flex items-center pl-10">
                      <div>
                        <p className="text-slider1">Dành cho nam</p>
                        <p className="text-slider2">New Running</p>
                        <p className="text-slider3 pt-5">You'll love what you here, and what</p>
                        <button className="bg-white text-black py-2 px-4 rounded text-xs font-semibold mt-5">
                          MUA NGAY
                        </button>
                      </div>
                    </div>
                    <div className="slide-inner-right">
                      <div className="slide-inner-item-top flex items-center pl-10">
                        <div>
                          <p className="text-black font-normal text-lg italic">Dành cho nữ</p>
                          <p className="text-black font-bold text-xl mt-2">Latest Collection</p>
                          <a className="text-sm font-bold underline pt-3" href="http://localhost:3000/" style={{ color: '#af052d' }}>Mua ngay</a>
                        </div>
                      </div>
                      <div className="slide-inner-right-space" />
                      <div className="slide-inner-item-bottom flex items-center pr-10">
                        <div className="text-right w-full">
                          <p className="text-black font-normal text-lg italic">Giảm tới 30%</p>
                          <p className="text-black font-bold text-xl mt-2">Latest Collection</p>
                          <a className="text-sm font-bold underline pt-3" href="http://localhost:3000/" style={{ color: '#af052d' }}>Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sản phẩm nổi bật */}
                <div className="flex flex-col">
                  <p className="text-center mt-20 text-2xl font-semibold">Sản Phẩm</p>
                  <div className="self-center mt-3 mb-5" style={{ backgroundColor: '#AF052D', height: '2px', width: '70px' }} />
                </div>
                <div className="flex flex-col">
                  <div className="mt-10 w-11/12 self-center flex flex-wrap">
                    <Item name="Nike Air" price="1.000.000" linkBg="http://capricathemes.com/wordpress/WCM01/WCM010020/WP2/wp-content/uploads/2020/02/3-326x326.jpg" />
                    <Item name="Nike Air" price="1.000.000" linkBg="http://capricathemes.com/wordpress/WCM01/WCM010020/WP2/wp-content/uploads/2020/02/3-326x326.jpg" />
                    <Item name="Nike Air" price="1.000.000" linkBg="http://capricathemes.com/wordpress/WCM01/WCM010020/WP2/wp-content/uploads/2020/02/3-326x326.jpg" />
                    <Item name="Nike Air" price="1.000.000" linkBg="http://capricathemes.com/wordpress/WCM01/WCM010020/WP2/wp-content/uploads/2020/02/3-326x326.jpg" />
                    <Item name="Nike Air" price="1.000.000" linkBg="http://capricathemes.com/wordpress/WCM01/WCM010020/WP2/wp-content/uploads/2020/02/3-326x326.jpg" />
                    <Item name="Nike Air" price="1.000.000" linkBg="http://capricathemes.com/wordpress/WCM01/WCM010020/WP2/wp-content/uploads/2020/02/3-326x326.jpg" />
                    <Item name="Nike Air" price="1.000.000" linkBg="http://capricathemes.com/wordpress/WCM01/WCM010020/WP2/wp-content/uploads/2020/02/3-326x326.jpg" />
                    <Item name="Nike Air" price="1.000.000" linkBg="http://capricathemes.com/wordpress/WCM01/WCM010020/WP2/wp-content/uploads/2020/02/3-326x326.jpg" />
                    <Item name="Nike Air" price="1.000.000" linkBg="http://capricathemes.com/wordpress/WCM01/WCM010020/WP2/wp-content/uploads/2020/02/3-326x326.jpg" />
                    <Item name="Nike Air" price="1.000.000" linkBg="http://capricathemes.com/wordpress/WCM01/WCM010020/WP2/wp-content/uploads/2020/02/3-326x326.jpg" />
                    <Item name="Nike Air" price="1.000.000" linkBg="http://capricathemes.com/wordpress/WCM01/WCM010020/WP2/wp-content/uploads/2020/02/3-326x326.jpg" />
                    <Item name="Nike Air" price="1.000.000" linkBg="http://capricathemes.com/wordpress/WCM01/WCM010020/WP2/wp-content/uploads/2020/02/3-326x326.jpg" />
                  </div>
                  <button className="w-1/6 self-center btnViewMore text-white font-medium text-sm py-2 px-2 rounded-sm">
                    XEM THÊM
                  </button>
                </div>
                {/* about th */}
                <div className="mt-32 bg-black pl-20 flex justify-between items-center" style={{ height: '500px' }}>
                  <div className="w-5/12 bg-black flex items-center" style={{height:'100px'}}>
                    <img src={require("../assets/navigationBar/logo.png")} className="" alt="th" style={{width: '100px'}} />
                    <div className="mx-10" style={{width: '1px', height: '70px', backgroundColor: '#888888'}}></div>
                    <img src={require("../assets/item/follow.png")} className="mt-10" alt="th" style={{height: '90px'}} />
                  </div>
                  <div className="w-1/2 flex flex-col justify-center pl-20">
                    <p className="text-2xl italic font-mono" style={{ color: '#AF052D' }}>THÔNG TIN CỬA HÀNG</p>
                    <div className="flex items-center mt-3">
                      <img src={require("../assets/item/location.png")} style={{ height: '20px', width: '20px' }} alt="th shoes" />
                      <span className="ml-5 text-white text-sm font-medium leading-normal tracking-tighter">
                        TRƯỜNG ĐẠI HỌC FPT
                      <br />
                      TP.HCM
                      <br />
                      LÔ E2A-7, ĐƯỜNG D1, KHU CÔNG NGHỆ CAO, LONG THẠNH MỸ, QUẬN 9
                    </span>
                    </div>
                    <div className="flex items-center mt-4 pb-2">
                      <img src={require("../assets/item/call.png")} style={{ height: '20px', width: '20px' }} alt="th shoes" />
                      <p className="ml-5 text-white text-3xl italic">123.456.789</p>
                    </div>
                    <div className="flex items-center mt-4 pb-2">
                      <img src={require("../assets/item/mail.png")} style={{ height: '20px', width: '20px' }} alt="th shoes" />
                      <p className="ml-5 text-white text-base font-normal">th-shoes@gmail.com.vn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
