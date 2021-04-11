import React, { Component } from 'react';
import styles from './CssTest.module.css';

class CssTest extends Component {
    render() {
        return (
            <div className={styles.mainDiv}>

                <div className={styles.boxsHome}>

                    <div className={styles.left}>
                        <div className={styles.box}></div>
                        <h3>new Blue! new Lions!</h3>
                    </div>

                    <div className={styles.box}></div>
                </div>

            </div>
        );
    }
}

export default CssTest;