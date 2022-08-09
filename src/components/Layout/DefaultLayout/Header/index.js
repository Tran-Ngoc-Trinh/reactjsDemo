import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
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
                <div className={cx('actions')}>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Theme</a>
                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                    <a className={cx('login')} href="#">
                        Login
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
