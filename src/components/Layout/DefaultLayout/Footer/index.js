import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content1')}>
                    <p>LOCATION</p>
                    <span>103 Nguyen Thong Quan 3 HCM</span>
                </div>
                <div className={cx('content2')}>
                    <p>AROUND THE WEB</p>
                    <FontAwesomeIcon icon={faCircleXmark} className={cx('fontawesome')}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faCircleXmark} className={cx('fontawesome')}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faCircleXmark} className={cx('fontawesome')}></FontAwesomeIcon>
                </div>
                <div className={cx('content3')}>
                    <p>ABOUT FREELANCER</p>
                    <span>Freelancer is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap.</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
