import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import AddItemsSelector from './views/add-items-selector'
import Drops from './views/drops'
import CollectionPage from './views/collection-page'
import CollectionDropPageTeam from './views/collection-drop-page-team'
import AddCollection1 from './views/add-collection1'
import UserProfileSettings from './views/user-profile-settings'
import AddCollection2Layered from './views/add-collection2-layered'
import CreatorStudioCollection from './views/creator-studio-collection'
import AddItem from './views/add-item'
import CollectionDropPageRoadmap from './views/collection-drop-page-roadmap'
import CreatorStudioCollectionAnalytics from './views/creator-studio-collection-analytics'
import CreatorStudio from './views/creator-studio'
import CollectorProfileFollowers from './views/collector-profile-followers'
import AddUnLayeredBatch from './views/add-un-layered-batch'
import Stats from './views/stats'
import ListCollection from './views/list-collection'
import CollectorProfile from './views/collector-profile'
import AddProject from './views/add-project'
import Home from './views/home'
import CreatorStudioProject from './views/creator-studio-project'
import ItemPage from './views/item-page'
import CollectionDropPage from './views/collection-drop-page'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={AddItemsSelector} exact path="/add-items-selector" />
        <Route component={Drops} exact path="/drops" />
        <Route component={CollectionPage} exact path="/collection-page" />
        <Route
          component={CollectionDropPageTeam}
          exact
          path="/collection-drop-page-team"
        />
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
          component={CollectionDropPageRoadmap}
          exact
          path="/collection-drop-page-roadmap"
        />
        <Route
          component={CreatorStudioCollectionAnalytics}
          exact
          path="/creator-studio-collection-analytics"
        />
        <Route component={CreatorStudio} exact path="/creator-studio" />
        <Route
          component={CollectorProfileFollowers}
          exact
          path="/collector-profile-followers"
        />
        <Route
          component={AddUnLayeredBatch}
          exact
          path="/add-un-layered-batch"
        />
        <Route component={Stats} exact path="/stats" />
        <Route component={ListCollection} exact path="/list-collection" />
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
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
