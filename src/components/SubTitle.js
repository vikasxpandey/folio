import React from 'react'

import styles from '../styles/subtitle.module.css'

const SubTItle = ({ one, two, three }) => (
	<h2 className={styles.subtitleText}>
		{one} <span className='colorSecondary'>{' ' + two}</span>
		{three}
	</h2>
)

export default SubTItle
