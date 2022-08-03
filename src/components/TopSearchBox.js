import React from "react"

class TopSearchBox extends React.Component {    
	state = {
    	input: "",
	}
	onChangeF = e => {
		this.setState({
		  input: e.target.value
		});
	  };
	onSubmitF(){
		return this.state.input;
	}

	render() {
	return(
			<form className="search_box"  onSubmit={this.onSubmitF}>
			<input	type="text"
				className="input-text"
				placeholder="Add todo..."
				value={this.state.title}
				name="title"
				onChange={this.onChangeF} 
			/>
			<button></button>
			</form>
		
	)}
}
export default TopSearchBox