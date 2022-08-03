import React from "react"
import styles from "./MainMenu.module.css"

class MainMenu extends React.Component {
	state={
		hidden:false,
		current_inner_page:this.props.current_inner_pageprops
	}
	hideMenu=()=>{
		this.setState(prevState=>({hidden:!prevState.hidden}));  
	}
	changeIP=(inner_page)=>{
		this.setState({current_inner_page:inner_page});
		window.history.replaceState(inner_page,inner_page,inner_page)
		// return window.location.replace(inner_page);
		return this.props.chooseInnerPageF(inner_page);
	}
	render() {
	if (this.state.hidden) 
		return( <button className= "main-menu show_button" onClick={this.hideMenu}></button>)
	return(
		<div className="main-menu">
			{/* <button onClick={this.hideMenu}>Hide Main Menu</button>  */}
			{ /*This seems like a great function, but considering current styling is not usefull
			Until the designer comes with a solution this button is only usefull for the phone (or any vetically aligned) devices,
			which are not currently considered in the remaining application
			*/}
			<div className={styles.logo}>Logo</div>
			<div className={styles.greetings_b}>Hi intern!</div>
			<div className={styles.greetings_s}>Welcome to the leather club</div>
			<div className={styles.greetings_label}>Let's start using the cat api</div>
			
			<div className={styles.page_select_wrap}>
				<div className={styles.page_choosing}>
					<div>voting img</div>
					<button  className={(this.state.current_inner_page==='/voting')?"activebtn":null} onClick={()=>this.changeIP('/voting')} >voting</button>
				</div>
				<div className={styles.page_choosing}>
					<div>breeds img</div>
					<button className={(this.state.current_inner_page==='/breeds')?"activebtn":null} onClick={()=>this.changeIP('/breeds')} >breeds</button>
				</div>
				<div className={styles.page_choosing}>
					<div>gal img</div>
					<button className={(this.state.current_inner_page==='/gallery')?"activebtn":null} onClick={()=>this.changeIP('/gallery')} >gallery</button>
				</div>
				
 			</div>
			 <div className={styles.page_choosing_personal}>
					<button className={(this.state.current_inner_page==='/likes')?"activebtn":null} onClick={()=>this.changeIP('/likes')}>L</button>
					<button className={(this.state.current_inner_page==='/favourites')?"activebtn":null} onClick={()=>this.changeIP('/favourites')}>F</button>
					<button className={(this.state.current_inner_page==='/dislikes')?"activebtn":null} onClick={()=>this.changeIP('/dislikes')}>D</button>		
				</div>
		</div>
	)}
}
export default MainMenu