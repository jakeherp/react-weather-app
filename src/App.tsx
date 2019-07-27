import React, { useState, useEffect } from "react"
import axios from "axios"
import moment from "moment"
import styled, { createGlobalStyle } from "styled-components"
import { useSpring } from "react-spring"

import Currently from "./components/currently"
import ForecastItem from "./components/forecast"
import Footer from "./components/footer"
import Header from "./components/header"
import Loader from "./components/loader"
import Drawer from "./components/menu"
import MenuIcon from "./components/menu-icon"

require("dotenv").config()

const Container = styled.main`
	min-height: 100vh;
	width: 480px;
	max-width: 90%;
	margin: 3rem auto;
	color: #fff;

	&.time-08,
	&.time-09,
	&.time-10,
	&.time-11,
	&.time-12 {
		color: #000;
	}
`

const Forecast = styled.ul`
	list-style: none;
	padding: 0;

	li {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 1rem 0;
	}
	h3 {
		margin: 0;
		font-weight: lighter;
	}
	div:nth-of-type(2) {
		flex-grow: 1;
	}
`

const App: React.FC = () => {
	const [weather, setWeather] = useState<any>({})
	const [hour, setHour] = useState<string>("10")
	const [sky, setSky] = useState<string>(
		`linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%)`,
	)
	const [city, setCity] = useState<string>("London")
	const [input, setInput] = useState("")
	const [isOpen, toggleOpen] = useState<boolean>(false)
	const [cities, setCities] = useState<string[]>([
		"London",
		"New York",
		"Mexico City",
		"Dubai",
		"Berlin",
		"Los Angeles",
		"Sydney",
	])

	const Styles = createGlobalStyle`
		body {
			margin: 0;
			min-height: 100vh;
			background: ${sky};
			transition: 0.3s;
			font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		}

		h1 {
			font-size: 48px;
			font-weight: lighter;
			margin: 0;
		}

		small {
			font-weight: lighter;
			opacity: 0.6;
		}
	`

	useEffect(() => {
		axios
			.get(
				`https://api.apixu.com/v1/forecast.json?key=${
					process.env.REACT_APP_APIXU_API_KEY
				}&q=${city}&days=7`,
			)
			.then(res => {
				setWeather(res.data)

				const hour: any = moment(res.data.location.localtime).format(
					"HH",
				)

				setHour(hour)

				switch (hour) {
					case "00":
						setSky(`#00000c`)
						break
					case "01":
						setSky(
							`linear-gradient(to bottom, #020111 85%,#191621 100%)`,
						)
						break
					case "02":
						setSky(
							`linear-gradient(to bottom, #020111 60%,#20202c 100%)`,
						)
						break
					case "03":
						setSky(
							`linear-gradient(to bottom, #020111 10%,#3a3a52 100%)`,
						)
						break
					case "04":
						setSky(
							`linear-gradient(to bottom, #20202c 0%,#515175 100%)`,
						)
						break
					case "05":
						setSky(
							`linear-gradient(to bottom, #40405c 0%,#6f71aa 80%,#8a76ab 100%)`,
						)
						break
					case "06":
						setSky(
							`linear-gradient(to bottom, #4a4969 0%,#7072ab 50%,#cd82a0 100%)`,
						)
						break
					case "07":
						setSky(
							`linear-gradient(to bottom, #757abf 0%,#8583be 60%,#eab0d1 100%)`,
						)
						break
					case "08":
						setSky(
							`linear-gradient(to bottom, #82addb 0%,#ebb2b1 100%)`,
						)
						break
					case "09":
						setSky(
							`linear-gradient(to bottom, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%)`,
						)
						break
					case "10":
						setSky(
							`linear-gradient(to bottom, #b7eaff 0%,#94dfff 100%)`,
						)
						break
					case "11":
						setSky(
							`linear-gradient(to bottom, #9be2fe 0%,#67d1fb 100%)`,
						)
						break
					case "12":
						setSky(
							`linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%)`,
						)
						break
					case "13":
						setSky(
							`linear-gradient(to bottom, #57c1eb 0%,#246fa8 100%)`,
						)
						break
					case "14":
						setSky(
							`linear-gradient(to bottom, #2d91c2 0%,#1e528e 100%)`,
						)
						break
					case "15":
						setSky(
							`linear-gradient(to bottom, #2473ab 0%,#1e528e 70%,#5b7983 100%)`,
						)
						break
					case "16":
						setSky(
							`linear-gradient(to bottom, #1e528e 0%,#265889 50%,#9da671 100%)`,
						)
						break
					case "17":
						setSky(
							`linear-gradient(to bottom, #1e528e 0%,#728a7c 50%,#e9ce5d 100%)`,
						)
						break
					case "18":
						setSky(
							`linear-gradient(to bottom, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%)`,
						)
						break
					case "19":
						setSky(
							`linear-gradient(to bottom, #163C52 0%,#4F4F47 30%,#C5752D 60%,#B7490F 80%, #2F1107 100%)`,
						)
						break
					case "20":
						setSky(
							`linear-gradient(to bottom, #071B26 0%,#071B26 30%,#8A3B12 80%,#240E03 100%)`,
						)
						break
					case "21":
						setSky(
							`linear-gradient(to bottom, #010A10 30%,#59230B 80%,#2F1107 100%)`,
						)
						break
					case "22":
						setSky(
							`linear-gradient(to bottom, #090401 50%,#4B1D06 100%)`,
						)
						break
					case "23":
						setSky(
							`linear-gradient(to bottom, #00000c 80%,#150800 100%)`,
						)
						break
					default:
						setSky(
							`linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%)`,
						)
				}
			})
			.catch(function(err) {
				console.log(err)
			})
	}, [city])

	const handleToggle = () => toggleOpen(!isOpen)

	const handleSelect = (city: string) => setCity(city)

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void =>
		setInput(e.target.value)

	const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()

		if (input.length > 3) {
			setCity(input)
			setCities([...cities, input])
			setInput("")
		}
	}

	const navAnimation = useSpring({
		transform: isOpen
			? `translate3d(10%, 0, 0)`
			: `translate3d(100%, 0, 0)`,
		config: {
			tension: 450,
		},
	})

	return (
		<div className="App">
			<Drawer
				style={navAnimation}
				cities={cities}
				handleSelect={handleSelect}
				input={input}
				handleInput={handleInput}
				handleSubmit={handleSubmit}
			/>
			{weather.location ? (
				<Container className={`time-${hour}`}>
					<Styles />
					<MenuIcon isOpen={isOpen} click={() => handleToggle()} />
					<Header
						location={weather.location.name}
						time={weather.location.localtime}
					/>
					<Currently
						icon={weather.current.condition.icon}
						text={weather.current.condition.text}
						temperature={weather.current.temp_c}
					/>
					<Forecast>
						{weather.forecast.forecastday.map((day: any) => (
							<ForecastItem
								key={day.date}
								icon={day.day.condition.icon}
								text={day.day.condition.text}
								date={day.date}
								maxTemp={day.day.maxtemp_c}
								minTemp={day.day.mintemp_c}
							/>
						))}
					</Forecast>
					<Footer />
				</Container>
			) : (
				<Loader />
			)}
		</div>
	)
}

export default App
