import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import image1 from './../../assets/images/content1.jpg';
import image2 from './../../assets/images/content2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faJetFighterUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('container')}>
            <div className={cx('about')}>
                <div>
                    <img src={image1}></img>
                </div>
                <div className={cx('about_1')}>
                    <div>
                        <label>Name: Tran Ngoc Trinh</label>
                        <span>Email: ngoctrinh2633@gmail.com</span>
                        <br />
                        <br />
                        <label>Phone: 0979586728 &emsp;</label>
                        <span>Address: Ho Chi Minh, VietNam</span>
                        <br />
                        <div>
                            <a href="/">
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    shake
                                    border
                                    size="lg"
                                    className={cx('about_icon')}
                                ></FontAwesomeIcon>
                            </a>
                            <a href="/">
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    shake
                                    border
                                    size="lg"
                                    className={cx('about_icon')}
                                ></FontAwesomeIcon>
                            </a>
                            <a href="/">
                                <FontAwesomeIcon
                                    icon={faYoutube}
                                    shake
                                    border
                                    size="lg"
                                    className={cx('about_icon')}
                                ></FontAwesomeIcon>
                            </a>
                            <a href="/">
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    shake
                                    border
                                    size="lg"
                                    className={cx('about_icon')}
                                ></FontAwesomeIcon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('textarea')}>
                <div
                    style={{
                        backgroundImage: `url(${image2})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <h2>Hi</h2>
                </div>
            </div>
            <br></br>
            <br id="skills"></br>
            <br></br>
            <br></br>
            <div className={cx('skills')}>
                <h4>MY SKILLS</h4>
                <span>
                    ------
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    ------
                </span>
                <div>
                    <div>
                        <p>LANGUAGE</p>
                        <span>Python</span>
                        <br></br>
                        <span>JavaScipts</span>
                    </div>
                    <div>
                        <p>DATABASE</p>
                        <span>SQL Server</span>
                    </div>
                    <div>
                        <p>OTHER</p>
                        <span>Git</span>
                    </div>
                </div>
                <div>
                    <div className={cx('skills_1')}>
                        <p>LIBRARY-FRAMEWORK</p>
                        <span>Django</span>
                        <br />
                        <span>FastAPI</span>
                        <br />
                        <span>Dash</span>
                        <br />
                        <span>Scraping(Beautifulsoup, Selenium)</span>
                        <br />
                    </div>
                </div>
            </div>
            <br></br>
            <br id="projects"></br>
            <br></br>
            <br></br>
            <div className={cx('projects')}>
                <h4>MY PROJECTS</h4>
                <span>
                    ------
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    ------
                </span>
            </div>
            <br></br>
            <br id="contact"></br>
            <br></br>
            <br></br>
            <div className={cx('contact')}>
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
            <div className={cx('backtotop')}>
                <a href="#" title="Về trang đầu">
                    <FontAwesomeIcon
                        icon={faJetFighterUp}
                        size="2x"
                        rotation={270}
                        color="#00ced1"
                        className={cx('icon')}
                    ></FontAwesomeIcon>
                </a>
            </div>
        </div>
    );
}

export default Home;
