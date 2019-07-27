import React from "react"
import styled from "styled-components"
import { animated, useSpring, config } from "react-spring"

interface IProps {
	isOpen: boolean
	click: any
}

const Icon = styled(animated.svg)`
	position: fixed;
	top: 1rem;
	right: 1rem;
	z-index: 1000;
`

const MenuIcon = ({ isOpen, click }: IProps) => {
	const openedTransformationConfig = {
		top: "translate(2, 7) rotate(0)",
		center: "translate(2, 19) rotate(0)",
		bottom: "translate(2, 31) rotate(0)",
		color: "#fff",
	}

	const closedTransformationConfig = {
		top: "translate(5, 32) rotate(-45)",
		center: "translate(10, 4) rotate(45)",
		bottom: "translate(5, 32) rotate(-45)",
		color: "#000",
	}

	const { top, center, bottom, color } = useSpring<any>({
		to: isOpen ? closedTransformationConfig : openedTransformationConfig,
		config: config.stiff,
	})

	return (
		<Icon
			width="44"
			height="44"
			viewBox="0 0 44 44"
			fill={color}
			xmlns="http://www.w3.org/2000/svg"
			onClick={click}
		>
			<animated.rect width="40" height="6" rx="3" transform={top} />
			<animated.rect width="40" height="6" rx="3" transform={center} />
			<animated.rect width="40" height="6" rx="3" transform={bottom} />
		</Icon>
	)
}

export default MenuIcon
