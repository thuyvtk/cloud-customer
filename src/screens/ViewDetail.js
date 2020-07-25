import React from 'react'
import '../abc.css'

import Header from '../components/Header'

function ViewDetail() {
    return (
        <div>
            <Header />
            {/* main infor */}
            {/* category */}
            <div className="w-full flex p-10 items-center category font-serif" style={{ height: '70px', backgroundColor: '#F2F2F2' }}>
                <a href="http://localhost:3000/"><span className="text-sm mr-3">Trang chủ</span></a>
            /
            <span className="text-sm mr-3 ml-3">Giày nam</span>
            </div>
            {/* detail */}
            <div className="w-full bg-white mt-10 pl-10 flex justify-between">
                {/* image */}
                <div className="w-2/5 bg-cover" style={{ height: '500px', backgroundColor: '#F3F3F3', backgroundImage: 'url(http://capricathemes.com/wordpress/WCM01/WCM010020/WP2/wp-content/uploads/2020/02/3.jpg)' }} />
                {/* detail */}
                <div className="w-3/5 ml-10 pl-10 pr-20" style={{ borderLeft: '1px solid #ededed' }}>
                    {/* name */}
                    <p className="text-3xl">Consec Adipisci Quasi</p>
                    {/* price */}
                    <div className="flex mt-5 items-center">
                        <img src={require("../assets/item/price.png")} style={{ height: '30px', width: '30px' }} alt="th shoes" />
                        <p className="font-semibold font-mono tracking-wider ml-10 text-3xl" style={{ color: '#AF052D' }}>1.000.000 đ</p>
                    </div>
                    <p className="mt-5 text-lg text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.</p>
                    {/* size */}
                    <div className="mt-10 flex w-3/5">
                        <div className="w-1/2">
                            <p className="mb-3 font-bold font-sans text-sm" style={{ color: '#008000' }}>Size</p>
                            <select className="w-4/5 bg-white" style={{ height: '35px', border: ' 1px solid #ddd' }}>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                            </select>
                        </div>
                        {/* quantity */}
                        <div className="w-1/2">
                            <p className="mb-3 font-bold font-sans text-sm" style={{ color: '#008000' }}>Số lượng</p>
                            <input type="number" step="1" min="1" max="100" readonly className="w-4/5 bg-white" style={{ height: '35px', border: ' 1px solid #ddd' }} />
                        </div>
                    </div>
                    {/* add to cart */}
                    <button className="w-2/5 mt-10 btnViewDetail text-white font-normal text-sm py-4 rounded-none">
                        THÊM VÀO GIỎ HÀNG
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ViewDetail
