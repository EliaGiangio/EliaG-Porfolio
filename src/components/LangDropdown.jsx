import React, { useState } from 'react';

function LangDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <span onClick={toggleMenu} className="cursor-pointer text-gray-600">
                Languages
            </span>
            {isOpen && (
                <div className="lang-box absolute right-1 mt-1 bg-gray-900 p-4">
                    <ul>
                        <li><span role="img" aria-label="Italian flag">🇮🇹 </span>Italian - Native</li>
                        <li><span role="img" aria-label="British flag">🇬🇧 </span>English - Professional Proficiency</li>
                        <li><span role="img" aria-label="Dutch flag">🇳🇱 </span>Dutch - Conversational</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default LangDropdown;
