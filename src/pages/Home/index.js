import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('container')}>
            <p>Content 1</p>
        </div>
    );
}

export default Home;
