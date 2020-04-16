import React from "react";

const Header = () => {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "Morning";
        
    } else if (timeOfDay >= 12 && timeOfDay < 17) {
        timeOfDay = "Afternoon";
    } else {
        timeOfDay = "Evening";
    }
    return (
        <div>
            <header className="head">
                Good {`${timeOfDay}`}! Welcome To My Website!
            </header>
        </div>
    );
}

export default Header;