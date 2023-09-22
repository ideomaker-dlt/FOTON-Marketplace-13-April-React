import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Features from './views/features'
import AddItemsTemplates from './views/add-items-templates'
import Drops from './views/drops'
import CollectionPage from './views/collection-page'
import AddCollection2LayeredInspect from './views/add-collection2-layered-inspect'
import AddCollection2LayeredGenerate from './views/add-collection2-layered-generate'
import CollectionDropPageTeam from './views/collection-drop-page-team'
import AddCollection1 from './views/add-collection1'
import Blog from './views/blog'
import UserProfileSettings from './views/user-profile-settings'
import AddCollection2LayeredOrganise from './views/add-collection2-layered-organise'
import AddCollection2Layered from './views/add-collection2-layered'
import CreatorStudioCollection from './views/creator-studio-collection'
import ImportCollection from './views/import-collection'
import AddItem from './views/add-item'
import CollectionDropPageRoadmap from './views/collection-drop-page-roadmap'
import AddCollection2LayeredPreview from './views/add-collection2-layered-preview'
import CreatorStudioCollectionAnalytics from './views/creator-studio-collection-analytics'
import AddCollectionTemplates from './views/add-collection-templates'
import CreatorStudio from './views/creator-studio'
import CollectorProfileFollowers from './views/collector-profile-followers'
import AddUnLayeredBatch from './views/add-un-layered-batch'
import Stats from './views/stats'
import Discover from './views/discover'
import AddItemsSets from './views/add-items-sets'
import PublishCollection from './views/publish-collection'
import CollectorProfile from './views/collector-profile'
import AddProject from './views/add-project'
import Home from './views/home'
import BlogPost from './views/blog-post'
import CreatorStudioProject from './views/creator-studio-project'
import ItemPage from './views/item-page'
import CollectionDropPage from './views/collection-drop-page'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Features} exact path="/features" />
        <Route
          component={AddItemsTemplates}
          exact
          path="/add-items-templates"
        />
        <Route component={Drops} exact path="/drops" />
        <Route component={CollectionPage} exact path="/collection-page" />
        <Route
          component={AddCollection2LayeredInspect}
          exact
          path="/add-collection2-layered-inspect"
        />
        <Route
          component={AddCollection2LayeredGenerate}
          exact
          path="/add-collection2-layered-generate"
        />
        <Route
          component={CollectionDropPageTeam}
          exact
          path="/collection-drop-page-team"
        />
        <Route component={AddCollection1} exact path="/add-collection1" />
        <Route component={Blog} exact path="/blog" />
        <Route
          component={UserProfileSettings}
          exact
          path="/user-profile-settings"
        />
        <Route
          component={AddCollection2LayeredOrganise}
          exact
          path="/add-collection2-layered-organise"
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
        <Route component={ImportCollection} exact path="/import-collection" />
        <Route component={AddItem} exact path="/add-item" />
        <Route
          component={CollectionDropPageRoadmap}
          exact
          path="/collection-drop-page-roadmap"
        />
        <Route
          component={AddCollection2LayeredPreview}
          exact
          path="/add-collection2-layered-preview"
        />
        <Route
          component={CreatorStudioCollectionAnalytics}
          exact
          path="/creator-studio-collection-analytics"
        />
        <Route
          component={AddCollectionTemplates}
          exact
          path="/add-collection-templates"
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
        <Route component={Discover} exact path="/discover" />
        <Route component={AddItemsSets} exact path="/add-items-sets" />
        <Route component={PublishCollection} exact path="/publish-collection" />
        <Route component={CollectorProfile} exact path="/collector-profile" />
        <Route component={AddProject} exact path="/add-project" />
        <Route component={Home} exact path="/" />
        <Route component={BlogPost} exact path="/blog-post" />
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
        <Route component={NotFound} path="**" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
