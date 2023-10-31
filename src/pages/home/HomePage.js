import React from 'react'
import SideBarComponent from '../../organisms/sideBar/index'
import MainComponent from '../../organisms/main/index'
import HeaderComponent from '../../organisms/header/index'

const HomePage = () => {

	return (
		<div className='home-container'>
			<HeaderComponent />
			<SideBarComponent />
			<MainComponent />
		</div>
	)
}

export default HomePage