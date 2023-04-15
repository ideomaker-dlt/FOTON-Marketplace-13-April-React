import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Stats from './views/stats'
import AddCollection from './views/add-collection'
import CreatorStudioCollection from './views/creator-studio-collection'
import CreatorStudio from './views/creator-studio'
import AddProject from './views/add-project'
import Home from './views/home'
import CreatorStudioProject from './views/creator-studio-project'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Stats} exact path="/stats" />
        <Route component={AddCollection} exact path="/add-collection" />
        <Route
          component={CreatorStudioCollection}
          exact
          path="/creator-studio-collection"
        />
        <Route component={CreatorStudio} exact path="/creator-studio" />
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
