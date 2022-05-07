import classNames from 'classnames/bind';
import styles from './Header.module.scss'

const cx = classNames.bind(styles) // Dung de viet dau `-`. Vd: post-item. Neu khong dung: styles['post-item']. Neu dung: cx('post-item')

function Header() {
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                {/* Search */}
            </div>
        </header>
    );
}

export default Header;