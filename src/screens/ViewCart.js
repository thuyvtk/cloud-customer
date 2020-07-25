import React from 'react'
import Header from '../components/Header'

function ViewCart() {
    return (
        <div>
            <Header />
            {/* category */}
            <div className="w-full flex p-10 items-center justify-betweem" style={{ height: '100px', backgroundColor: '#F2F2F2' }}>
                <span className="text-2xl tracking-tight w-4/5" style={{ color: '#000', fontFamily: 'lato-bold' }}>
                    Giỏ Hàng Của Bạn
                </span>
                <div className="w-1/5 text-right category">
                    <a href="http://localhost:3000/"><span className="text-sm mr-3">Trang chủ</span></a>
                    <span style={{fontSize: '10px', fontStyle:'bold', letterSpacing:'-0.5'}}> >> </span>
                    <span className="text-sm mr-3 ml-3">Giỏ hàng</span>
                </div>
            </div>
        </div>
    )
}

export default ViewCart
