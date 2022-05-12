import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles); // Dung de viet dau `-`. Vd: post-item. Neu khong dung: styles['post-item']. Neu dung: cx('post-item')


function MenuItem({ data, onClick }) {
    const  classes = cx('menu-item', {
        separate: data.separate,
    })

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
