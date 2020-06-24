import React from 'react'

import styles from '../styles/title.module.css'
import Container from 'react-bootstrap/Container'

const Title = ({ text }) => (
	<Container>
		<span className={styles.headingText}>{text}</span>
	</Container>
)

export default Title
