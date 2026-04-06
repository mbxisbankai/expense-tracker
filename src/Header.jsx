import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="header-content">
                <h1 className="header-title">
                    Expense <span>Tracker</span>
                </h1>
                <p className="header-subtitle">
                    Take control of your finances. Record, categorize, and analyze your spending with ease.
                </p>
            </div>
        </div>
    );
}

export default Header;