import React from 'react'
import './ProductCard.css'

const ProductCard = ({ name, age, location }) => {
    return (
        <div className="profile-card">
            <div className="profile-avatar">
                {/* Placeholder avatar */}
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWXS2i8c25YoAKkD5baotVsLurUFTcg-pOKdsmQCbEw44Tb_pg_MbvulY0FBHSsdsF9Sw&usqp=CAU"
                    alt="avatar"
                    className="avatar-img"
                />
            </div>
            <div className="profile-info">
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>Location: {location}</p>
            </div>
        </div>
    );
}

export default ProductCard