import React from "react"
import TopSearchBox from './TopSearchBox';

import VotingPage from "./InnerPage/VotingPage";
import BreedsPage from "./InnerPage/BreedsPage";
import GalleryPage from "./InnerPage/GalleryPage";

import LikesPage from './InnerPage/LikesPage'
import DislikesPage from './InnerPage/DislikesPage'
import FavouritesPage from './InnerPage/FavouritesPage'

class InnerPage extends React.Component {
	// state = {
	// 	current_search: 'none'
	// };
	// ComponentName = GalleryPage;
	// getIPname=()=>{
	// 	let str=this.props.current_inner_page_prop
	// 	console.log(str);
	// }
	
	render() {
		let ComponentName;
		
		switch(this.props.current_inner_page_prop){
			case ('/gallery'):{
				ComponentName=GalleryPage;
				break;
			}
			case ('/breeds'):{
				ComponentName=BreedsPage;
				break;
			}
			case ('/voting'):{
				ComponentName=VotingPage;
				break;
			}
			case ('/likes'):{
				ComponentName=LikesPage;
				break;
			}
			case ('/dislikes'):{
				ComponentName=DislikesPage;
				break;
			}
			case ('/favourites'):{
				ComponentName=FavouritesPage;
				break;
			}
			default:{
				return (
					<div className="inner_page">
						empty inner page pic
					</div>
				)
			}
		}
	return(<>
		<TopSearchBox/>
		<div className="inner_page">
		{React.createElement(ComponentName)}
		</div>
		</>
	)
	}
}
export default InnerPage