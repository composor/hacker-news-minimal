import {h, Component} from 'composi'
import Navigation from './components/navigation'
import Item from './components/item'

const API_ORIGIN = 'https://hacker-news.firebaseio.com'

const asJson = r => r.json()


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lastUpdate: new Date(),
      items: []
    }
  }

  render(data) {
    // bind sortByScore to "this" so that Navigation component has access to App's state.
    return (
      <div id="app">
        <Navigation lastUpdate={this.state.lastUpdate} sortByScore={this.sortByScore.bind(this)} loadItems={this.loadItems.bind(this)} />
        <ul>
          {
            data.items.map(item => <Item item={item}/>)
          }
        </ul>
      </div>
    )
  }
  componentDidMount() {
		this.loadItems()
	}
  loadItems() {
		fetch(`${API_ORIGIN}/v0/topstories.json`).then(asJson)
			.then( items => Promise.all( items.slice(0, 19).map(
				item => fetch(`${API_ORIGIN}/v0/item/${item}.json`).then(asJson)
			)) )
			.then( items => this.setState({ items }) )
	}
  sortByScore() {
		let items = this.state.items
		items.sort( (a, b) => b.score - a.score )
		this.setState({ items })
	}
}

const app = new App({
  container: 'body'
})
