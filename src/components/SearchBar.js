import React from 'react'
export default class SearchBar extends React.Component {
    state = {
        term: '',
    }
    onFormSubmit = e => {
        const { onSubmit } = this.props
        const { term } = this.state
        e.preventDefault()
        onSubmit(term)
    }

    render() {
        const { term } = this.state
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            value={term}
                            onChange={e =>
                                this.setState({
                                    term: e.target.value,
                                })
                            }
                        />
                    </div>
                </form>
            </div>
        )
    }
}
