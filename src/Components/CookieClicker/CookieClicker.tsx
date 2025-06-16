import React, {useState} from "react";
import styles from './CookieClicker.module.css';

const CookieClicker: React.FC = () => {
    const [cookies, setCookies] = useState(0);

    const handleClick = () => {
        setCookies(cookies + 1);
    };

    return (
        <div>
            <p>Cookies: {cookies}</p>
            <button className={styles.button} onClick={handleClick}>🍪</button>
        </div>
    );
};

export default CookieClicker;