import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import AddItemsSelector from './views/add-items-selector'
import Drops from './views/drops'
import CollectionPage from './views/collection-page'
import AddCollection1 from './views/add-collection1'
import UserProfileSettings from './views/user-profile-settings'
import AddCollection2Layered from './views/add-collection2-layered'
import CreatorStudioCollection from './views/creator-studio-collection'
import AddItem from './views/add-item'
import CreatorStudioCollectionAnalytics from './views/creator-studio-collection-analytics'
import CreatorStudio from './views/creator-studio'
import Stats from './views/stats'
import CollectorProfile from './views/collector-profile'
import AddProject from './views/add-project'
import Home from './views/home'
import CreatorStudioProject from './views/creator-studio-project'
import ItemPage from './views/item-page'
import CollectionDropPage from './views/collection-drop-page'
import AddCollection2NonLayered from './views/add-collection2-non-layered'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={AddItemsSelector} exact path="/add-items-selector" />
        <Route component={Drops} exact path="/drops" />
        <Route component={CollectionPage} exact path="/collection-page" />
        <Route component={AddCollection1} exact path="/add-collection1" />
        <Route
          component={UserProfileSettings}
          exact
          path="/user-profile-settings"
        />
        <Route
          component={AddCollection2Layered}
          exact
          path="/add-collection2-layered"
        />
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
        <Route component={CollectorProfile} exact path="/collector-profile" />
        <Route component={AddProject} exact path="/add-project" />
        <Route component={Home} exact path="/" />
        <Route
          component={CreatorStudioProject}
          exact
          path="/creator-studio-project"
        />
        <Route component={ItemPage} exact path="/item-page" />
        <Route
          component={CollectionDropPage}
          exact
          path="/collection-drop-page"
        />
        <Route
          component={AddCollection2NonLayered}
          exact
          path="/add-collection2-non-layered"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
