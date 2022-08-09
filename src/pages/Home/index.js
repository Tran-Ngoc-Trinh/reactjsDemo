import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import image1 from './../../assets/images/content1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('container')}>
            <div className={cx('content1')}>
                <br></br>
                <br></br>
                <img src={image1}></img>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className={cx('content2')}>
                <h4>CONTACT ME</h4>
                <span>
                    ------
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    ------
                </span>
                <br></br>
                <input placeholder="Name"></input>
                <br></br>
                <input placeholder="Email Address"></input>
                <br></br>
                <input placeholder="Phone Number"></input>
                <br></br>
                <input placeholder="Message"></input>
            </div>
        </div>
    );
}

export default Home;
