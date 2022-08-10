import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faArrowRightToBracket,
    faListCheck,
    faAddressCard,
    faProjectDiagram,
    faTheaterMasks,
    faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import logo from './../../../../assets/images/logo.jpg';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="logo" />
                    <span>TheThem</span>
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search theme" spellCheck={false}></input>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <nav className={cx('actions')}>
                    <ul>
                        <li>
                            <a href="#skills">
                                <FontAwesomeIcon icon={faListCheck} />
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects">
                                <FontAwesomeIcon icon={faProjectDiagram} />
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <FontAwesomeIcon icon={faAddressCard} />
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faTheaterMasks} />
                                Theme
                                <FontAwesomeIcon icon={faAngleDown} />
                            </a>
                            <ul>
                                <li>Theme1</li>
                                <li>Theme1</li>
                            </ul>
                        </li>
                        <li>
                            <a className={cx('login')} href="#">
                                <FontAwesomeIcon icon={faArrowRightToBracket} />
                                Login
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
