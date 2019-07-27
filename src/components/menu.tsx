import React from "react"
import styled from "styled-components"

interface IProps {
	cities: string[]
	handleSelect: any
}

const menu = ({ cities, handleSelect }: IProps) => {
	const Drawer = styled.div`
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
	`

	return (
		<Drawer>
			<nav>
				<ul>
					{cities.map((c, i) => (
						<li key={i} onClick={() => handleSelect(c)}>
							{c}
						</li>
					))}
				</ul>
			</nav>
		</Drawer>
	)
}

export default menu
