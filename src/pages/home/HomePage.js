import React from 'react'
import SideBarComponent from '../../organisms/sideBar/index'
import MainComponent from '../../organisms/main/index'
import HeaderComponent from '../../organisms/header/index'
import Footer from '../../organisms/footer/index'

const HomePage = () => {

	return (
		<div className='home-container'>
			<HeaderComponent />
			<SideBarComponent />
			<MainComponent />
			<Footer />
		</div>
	)
}

export default HomePage