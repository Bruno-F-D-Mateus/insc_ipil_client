import React from 'react';

import styles from './Button.module.css';

export default function Button({ type="button", text="", _class="", handle=()=>{}, disabled=false }: any) { /** */

    return (
        <button type={type} className={`btn ${styles[_class]}`} onClick={handle} disabled={disabled}>{text}</button>
    )
}