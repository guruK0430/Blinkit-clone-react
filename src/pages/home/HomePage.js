import React from 'react'
import SideBarComponent from '../../organisms/sideBar/index'
import MainComponent from '../../organisms/main/index'

const HomePage = () => {

	return (
		<div className='home-container'>
			<SideBarComponent />
			<MainComponent />
		</div>
	)
}

export default HomePage