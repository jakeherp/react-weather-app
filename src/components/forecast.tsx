import React from "react"
import styled from "styled-components"
import Moment from "react-moment"

interface IProps {
	icon: string
	text: string
	date: string
	minTemp: number
	maxTemp: number
}

const Forecast = ({ icon, text, date, minTemp, maxTemp }: IProps) => {
	const Icon = styled.div`
		width: 32px;
		margin-right: 0.5rem;

		img {
			width: 32px;
			height: 32px;
		}
	`

	const Temp = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 70px;
	`

	const High = styled.span`
		font-size: 24px;
	`

	const Low = styled.span`
		font-size: 14px;
		padding-top: 10px;
		opacity: 0.6;
	`

	return (
		<li>
			<Icon>
				<img src={icon} alt={text} />
			</Icon>
			<div>
				<h3>
					<Moment date={date} format="dddd, Do MMMM" />
				</h3>
				<small>{text}</small>
			</div>
			<Temp>
				<High>{Math.ceil(maxTemp)}°</High>
				<Low>{Math.floor(minTemp)}°</Low>
			</Temp>
		</li>
	)
}

export default Forecast
