import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    videos: state.videos,
    categories: state.categories
  }
}

const connector = connect(mapStateToProps)

class Home extends React.Component {
  componentDidMount() {
    const props = this.props

    fetch('http://localhost:4000/videos')
      .then(res => res.json())
      .then(videos => {
        props.dispatch({
          type: 'SET_VIDEOS',
          payload: videos
        })
      })

    fetch('http://localhost:4000/categories')
      .then(res => res.json())
      .then(o => o.values)
      .then(categories => {
        props.dispatch({
          type: 'SET_CATEGORIES',
          payload: categories
        })
      })
  }
  render() {
    const props = this.props
    return (
      <div>
        <Link to="/videos/new">
          <Button>Add Video</Button>
        </Link>
        <h2 className="pa4 avenir">Videos</h2>
        <ul className="list">
          {map(function(video) {
            return (
              <li key={video.id}>
                <a className="link" href={video.link}>
                  {video.name}
                </a>
              </li>
            )
          }, props.videos)}

        </ul>
        <h2 className="pa4 avenir"> Categories </h2>
        <ul className="list">
          {map(category => <li>{category}</li>, props.categories)}
        </ul>
      </div>
    )
  }
}

export default connector(Home)
