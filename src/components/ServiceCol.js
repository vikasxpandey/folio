import React from 'react'

import { useSpring, animated } from 'react-spring'
import styles from '../styles/servicecol.module.css'
import Col from 'react-bootstrap/Col'

const calc = (x, y) => [
	-(y - window.innerHeight / 2) / 20,
	(x - window.innerWidth / 2) / 20,
	1.1
]
const trans = (x, y, s) =>
	`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServiceCol = ({ bg, text }) => {
	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: { mass: 5, tension: 350, friction: 40 }
	}))

	return (
		<Col md={3}>
			<animated.div
				data-sal='slide-up'
				data-sal-duration='500'
				onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
				onMouseLeave={() => set({ xys: [0, 0, 1] })}
				className={styles.serviceInner}
				style={{
					backgroundImage: `url(${bg})`,
					transform: props.xys.interpolate(trans)
				}}
			>
				<h5>{text}</h5>
			</animated.div>
		</Col>
	)
}

export default ServiceCol