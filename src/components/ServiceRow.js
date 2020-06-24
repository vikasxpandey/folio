import React from 'react'

import SubTitle from './SubTitle'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const ServiceBlock = ({ one, two, three, children }) => {
	return (
		<Container>
			<SubTitle one={one} two={two} three={three} />
			<Row>{children}</Row>
		</Container>
	)
}

export default ServiceBlock
