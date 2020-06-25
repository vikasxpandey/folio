import React from 'react'

import styles from '../styles/title.module.css'
import Container from 'react-bootstrap/Container'

const Title = ({ text }) => {
	return (
		<Container>
			<span
				data-sal='zoom-out'
				data-sal-duration='500'
				className={styles.headingText}
			>
				{text}
			</span>
		</Container>
	)
}

export default Title
