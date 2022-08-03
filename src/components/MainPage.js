import React from "react"
import MainMenu from './MainMenu';
import InnerPage from './InnerPage';

//className={[a,b].join(' ')}
// import styles from "./MainPage.module.css";
// import "./MainPage.module.css";

class MainPage extends React.Component {
	state = {
		current_inner_page: 'none'
	};
	chooseInnerPage = inner_page => {
		this.setState({current_inner_page:inner_page});   
	}
	render() {
	return(
		<div className="main_page variable_pseudoclass">
			{/* <MainMenu/> */}
			<MainMenu chooseInnerPageF={this.chooseInnerPage} current_inner_page_prop={this.state.current_inner_page} />
			<div className="not_main_menu">
				{/* <InnerPage/> */}
				<InnerPage current_inner_page_prop={this.state.current_inner_page}  />
			</div>
		</div>
	)}
}
export default MainPage