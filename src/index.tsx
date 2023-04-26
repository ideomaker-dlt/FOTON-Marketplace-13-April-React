import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './styles.css'
import {
  Home,
  AddProject,
  AddCollection1,
  AddCollection2,
  AddItem,
  AddItemsSelector,
  CreatorStudioCollection,
  CreatorStudioProject,
  CreatorStudio,
  CreatorStudioCollectionAnalytics,
  Stats,
  CollectionPage,
  ItemPage,
  CollectorProfile,
  Drops
} from 'views'

const App = () => {
  return (
    <Router>
      <Route component={AddItemsSelector} exact path='/add-items-selector' />
      <Route component={Stats} exact path='/stats' />
      <Route component={Drops} exact path="/drops" />
      <Route component={AddCollection1} exact path='/add-collection1' />
      <Route component={AddCollection2} exact path='/add-collection2' />
      <Route
        component={CreatorStudioCollection}
        exact
        path='/creator-studio-collection'
      />
      <Route component={AddItem} exact path='/add-item' />
      <Route component={CreatorStudio} exact path='/creator-studio' />
      <Route component={AddProject} exact path='/add-project' />
      <Route component={Home} exact path='/' />
      <Route
        component={CreatorStudioProject}
        exact
        path='/creator-studio-project'
      />
      <Route component={ItemPage} exact path="/item-page" />
      <Route
        component={CreatorStudioCollectionAnalytics}
        exact
        path="/creator-studio-collection-analytics"
      />
      <Route
        component={CollectionPage}
        exact
        path="/collection-page"
      />
      <Route
        component={CollectorProfile}
        exact
        path="/collector-profile"
      />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
