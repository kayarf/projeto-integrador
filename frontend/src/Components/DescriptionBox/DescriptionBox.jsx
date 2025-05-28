import React, { useState } from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
    const [activeTab, setActiveTab] = useState('description');

    return (
        <div className="descriptionbox">
            <div className="descriptionbox-content">
                <div className="descriptionbox-navigator">
                    <div 
                        className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : ''}`}
                        onClick={() => setActiveTab('description')}
                    >
                        Description
                    </div>
                    <div 
                        className={`descriptionbox-nav-box fade ${activeTab === 'reviews' ? 'active' : ''}`}
                        onClick={() => setActiveTab('reviews')}
                    >
                        Reviews (200)
                    </div>
                </div>
                
                <div className="descriptionbox-description">
                    {activeTab === 'description' ? (
                        <div>
                            <p>This premium mechanical keyboard offers an exceptional typing experience with high-quality switches, customizable RGB backlighting, and durable construction. Ideal for gamers and professionals seeking precision and comfort during extended use sessions.</p>
                            <p>The ergonomic design reduces wrist strain, while the responsive keys provide satisfying tactile feedback. Compatible with multiple operating systems and featuring programmable macros for enhanced productivity.</p>
                        </div>
                    ) : (
                        <div>
                            <h3>Customer Reviews</h3>
                            <p>⭐⭐⭐⭐⭐ "Best keyboard I've ever used!" - Ryan</p>
                            <p>⭐⭐⭐⭐⭐ "Great feel, but a bit loud for office use" - Vitor</p>
                            <p>⭐⭐⭐⭐⭐ "Worth every penny" - Fernanda</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DescriptionBox;