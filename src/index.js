import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import AddItemsSelector from './views/add-items-selector'
import CollectionPage from './views/collection-page'
import AddCollection1 from './views/add-collection1'
import AddCollection2 from './views/add-collection2'
import CreatorStudioCollection from './views/creator-studio-collection'
import AddItem from './views/add-item'
import CreatorStudioCollectionAnalytics from './views/creator-studio-collection-analytics'
import CreatorStudio from './views/creator-studio'
import Stats from './views/stats'
import AddProject from './views/add-project'
import Home from './views/home'
import CreatorStudioProject from './views/creator-studio-project'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={AddItemsSelector} exact path="/add-items-selector" />
        <Route component={CollectionPage} exact path="/collection-page" />
        <Route component={AddCollection1} exact path="/add-collection1" />
        <Route component={AddCollection2} exact path="/add-collection2" />
        <Route
          component={CreatorStudioCollection}
          exact
          path="/creator-studio-collection"
        />
        <Route component={AddItem} exact path="/add-item" />
        <Route
          component={CreatorStudioCollectionAnalytics}
          exact
          path="/creator-studio-collection-analytics"
        />
        <Route component={CreatorStudio} exact path="/creator-studio" />
        <Route component={Stats} exact path="/stats" />
        <Route component={AddProject} exact path="/add-project" />
        <Route component={Home} exact path="/" />
        <Route
          component={CreatorStudioProject}
          exact
          path="/creator-studio-project"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
