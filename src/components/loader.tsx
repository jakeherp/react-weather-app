import React from "react"
import styled, { keyframes } from "styled-components"

const Loader = () => {
	const BounceAnimation = keyframes`
        0% { margin-bottom: 0; }
        50% { margin-bottom: 15px }
        100% { margin-bottom: 0 }
    `

	const Wrapper = styled.div`
		position: absolute;
		top: 50%;
		left: 50%;
		display: flex;
		align-items: flex-end;
	`

	const Dot: any = styled.div`
		background-color: black;
		border-radius: 50%;
		width: 10px;
		height: 10px;
		margin: 0 5px;
		animation: ${BounceAnimation} 0.5s linear infinite;

		&:nth-of-type(1) {
			animation-delay: 0.1s;
		}
		&:nth-of-type(2) {
			animation-delay: 0.2s;
		}
	`

	return (
		<Wrapper>
			<Dot />
			<Dot />
			<Dot />
		</Wrapper>
	)
}
export default Loader
