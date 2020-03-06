import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './imageList'

export default class App extends React.Component {
    state = {
        images: [],
    }
    onSearchSubmit = async term => {
        const {
            data: { results },
        } = await unsplash.get('/search/photos', {
            params: { query: term },
        })
        this.setState({ images: results })
    }

    render() {
        const { images } = this.state
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={images} />
            </div>
        )
    }
}
