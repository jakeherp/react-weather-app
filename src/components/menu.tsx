import React from "react"
import styled from "styled-components"
import { animated } from "react-spring"

const Drawer = styled(animated.div)`
	position: fixed;
	top: 0;
	right: 0;
	width: 300px;
	max-width: 90%;
	height: 100vh;
	background: rgba(255, 255, 255, 0.95);
	z-index: 100;

	ul {
		list-style: none;
		padding: 0;
		margin-top: 4rem;
		li {
			padding: 1rem;
			cursor: pointer;
			&:hover {
				background: #eee;
			}
		}
	}
	input {
		margin: 1rem;
		border: 1px solid #ccc;
		border-radius: 99px;
		font-size: 18px;
		background: transparent;
		padding: 0.5rem 1rem;
	}
`

interface IProps {
	cities: string[]
	handleSelect: any
	handleInput: any
	handleSubmit: any
	style: any
	input: string
}

const menu = ({
	cities,
	handleSelect,
	style,
	handleInput,
	handleSubmit,
	input,
}: IProps) => {
	return (
		<Drawer style={style}>
			<nav>
				<ul>
					{cities.map((c, i) => (
						<li key={i} onClick={() => handleSelect(c)}>
							{c}
						</li>
					))}
				</ul>
			</nav>
			<form onSubmit={handleSubmit}>
				<input
					value={input}
					type="text"
					onChange={handleInput}
					placeholder="Add a city"
				/>
			</form>
		</Drawer>
	)
}

export default menu
