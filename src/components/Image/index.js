import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [falseback, setFalseback] = useState('');

    const handleError = () => {
        setFalseback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={falseback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
