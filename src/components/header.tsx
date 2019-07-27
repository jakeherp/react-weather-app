import React from "react"
import Moment from "react-moment"

interface IProps {
	location: string
	time: string
}

const Header = ({ location, time }: IProps) => {
	return (
		<React.Fragment>
			<h1>{location}</h1>
			<small>
				Local time: <Moment date={time} format="HH:mm" />
			</small>
		</React.Fragment>
	)
}

export default Header
