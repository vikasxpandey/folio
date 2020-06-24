import React from 'react'

import styles from '../styles/servicecol.module.css'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const ServiceCol = ({ bg, text }) => {
	return (
		<Col md={3}>
			<Card
				className={styles.serviceInner}
				style={{ backgroundImage: `url(${bg})` }}
			>
				<h5>{text}</h5>
			</Card>
		</Col>
	)
}

export default ServiceCol
