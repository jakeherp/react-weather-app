import React from "react"
import styled from "styled-components"

const Footer = () => {
	const Foot = styled.footer`
		margin-top: 3rem;
		font-size: 1rem;
		opacity: 0.6;
		text-align: center;
		font-weight: lighter;
		line-height: 1.5;

		img {
			max-width: 50px;
			margin-top: 1rem;
		}

		a {
			text-decoration: none;
			color: inherit;
			transition: 0.3s;
			&:hover {
				border-bottom: 2px solid #000;
			}
		}
	`

	return (
		<Foot>
			&copy; {new Date().getFullYear()}{" "}
			<a href="https://herper.io/">Jacob Herper</a>
			<br />
			<a
				href="https://www.apixu.com/"
				title="Free Weather API"
				target="_blank"
			>
				<img
					src="//cdn.apixu.com/v4/images/apixu-logo-1.png"
					alt="Weather data by Apixu.com"
				/>
			</a>
		</Foot>
	)
}

export default Footer
