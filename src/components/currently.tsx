import React from "react"
import styled from "styled-components"

interface IProps {
	icon: string
	text: string
	temperature: string | number
}

const Currently = ({ icon, text, temperature }: IProps) => {
	const Current = styled.section`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-top: 1px solid #fff;
		border-bottom: 1px solid #fff;
		padding: 1rem 0;
		margin: 2rem 0;
		img {
			width: 64px;
			height: 64px;
		}
		div {
			text-align: right;
		}
		h2 {
			font-size: 40px;
			margin: 0;
			font-weight: normal;
		}
		small {
			font-size: 18px;
		}
	`

	return (
		<Current>
			<img src={icon} alt={text} />
			<div>
				<h2>{temperature}°</h2>
				<small>{text}</small>
			</div>
		</Current>
	)
}

export default Currently
