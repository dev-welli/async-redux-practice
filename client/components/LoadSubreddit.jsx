import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titles: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  updateDetails(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault() 
    this.props.dispatch(fetchPosts(this.state.titles))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        {console.log(this.state.titles)}
        
          <input onChange={this.updateDetails} className="input" type="text" name="titles" placeholder="search" />
          <button>
            Fetch Posts
          </button>
        </form>
      </div>
    )
  }
}
export default connect()(LoadSubreddit)
