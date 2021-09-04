import React from 'react'
import styles from './StartAContest.module.scss'

function StartAContest () {
  return (
    <div className={styles.startAContestContainer}>
      <p>
        Ready to get started? Launch a contest and start receiving submissions
        instantly.
      </p>
      <a className={styles.startContestLink} href='#'>
        Start A Contest
      </a>
    </div>
  )
}

export default StartAContest
