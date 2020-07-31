// @ts-nocheck
import React from 'react';
import styles from './modal.css'
Modal.defaultProps = {
    bg: 'rgba(12,55,48,0.5)'
}

export function Modal(props) {
    console.log(props);
    if (!props.isShow) {
        return null
    }
    return (<div className={styles.modal}
        style={{ backgroundColor: props.bg }}
        onClick={e => {
            if (e.target.className === `${styles.modal}`) {
                props.onClose && props.onClose()
            }
        }}>
        <div className={styles.modalCenter}>{props.children}</div>
    </div>)

}


