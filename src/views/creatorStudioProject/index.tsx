import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import {
  CollectionItemsContainer,
  LayoutWithSidebar,
  TabsRowWithButtons,
} from '@components'
import './styles.scss'

export const CreatorStudioProject = memo(() => {
  return (
    <div className='creator-studio-project-container'>
      <Helmet>
        <title>
          Creator-Studio-Project - FOTON Marketplace for NFTs and Digital
          Collectibles on Radix DLT
        </title>
        <meta
          name='description'
          content='Collect , Trade or Mint NFTs and find your Communities'
        />
        <meta
          property='og:title'
          content='Creator-Studio-Project - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT'
        />
        <meta
          property='og:description'
          content='Collect , Trade or Mint NFTs and find your Communities'
        />
      </Helmet>
      <LayoutWithSidebar rootClassName='layout-with-sidebar-root-class-name3'>
        <div className='creator-studio-project-header-creator'>
          <div className='creator-studio-project-gray-overlay'></div>
          <div className='creator-studio-project-container01'>
            <div className='creator-studio-project-container02'>
              <div className='creator-studio-project-avatar-logo'>
                <img
                  src='/playground_assets/hexagonmaskbordergray.svg'
                  className='creator-studio-project-mask'
                />
                <img
                  src='/playground_assets/art_3.0_ninja__2d__game_character_._cevtore_style__t_pose_00ed9e8d-9bd5-4d11-be76-c73a71e6f04e-200h.png'
                  className='creator-studio-project-image'
                />
              </div>
              <div className='creator-studio-project-container03'>
                <h1 className='creator-studio-project-text'>Project One</h1>
                <h1 className='creator-studio-project-text01'>
                  <span>2 Collections, 1500 items</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className='creator-studio-project-buttons'>
              <Link
                to='/add-collection1'
                className='creator-studio-project-navlink button'
              >
                <span className='creator-studio-project-text04'>
                  <span>Add Collection</span>
                  <br></br>
                </span>
              </Link>
              <Link
                to='/add-items-selector'
                className='creator-studio-project-navlink1 button'
              >
                <span className='creator-studio-project-text07'>
                  <span>Add Items</span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className='creator-studio-project-tabs-row'>
          <div className='creator-studio-project-container04'>
            <Link
              to='/creator-studio'
              className='creator-studio-project-navlink2'
            >
              &lt; go back
            </Link>
            <span className='creator-studio-project-text10'>
              My Collections
            </span>
          </div>
        </div>
        <div className='creator-studio-project-collections-container'>
          <div className='creator-studio-project-container05'>
            <Link to='/creator-studio-collection'>
              <div className='creator-studio-project-collection'>
                <div className='creator-studio-project-container06'>
                  <img
                    src='/playground_assets/vlad__foton.is__radix.stream_pirate_crew_member_illustration_352025ba-0bac-4b8e-9a47-9d8da5bb2ceb-200h.png'
                    className='creator-studio-project-image1'
                  />
                </div>
                <div className='creator-studio-project-container07'>
                  <div className='creator-studio-project-container08'>
                    <h1 className='creator-studio-project-text11 Smallest'>
                      <span>Role: Admin</span>
                      <br></br>
                    </h1>
                  </div>
                  <h1 className='creator-studio-project-text14 Heading3'>
                    Collection One
                  </h1>
                  <h1 className='creator-studio-project-text15 Content'>
                    <span>1500 Items</span>
                    <br></br>
                  </h1>
                </div>
              </div>
            </Link>
            <div className='creator-studio-project-collection1'>
              <div className='creator-studio-project-container09'>
                <img
                  src='/playground_assets/vlad__foton.is__radix.stream_pirate_crew_member_illustration_352025ba-0bac-4b8e-9a47-9d8da5bb2ceb-200h.png'
                  className='creator-studio-project-image2'
                />
              </div>
              <div className='creator-studio-project-container10'>
                <div className='creator-studio-project-container11'>
                  <h1 className='creator-studio-project-text18 Smallest'>
                    <span>Role: Admin</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className='creator-studio-project-text21 Heading3'>
                  Collection One
                </h1>
                <h1 className='creator-studio-project-text22 Content'>
                  <span>1500 Items</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className='creator-studio-project-collection2'>
              <div className='creator-studio-project-container12'>
                <img
                  src='/playground_assets/vlad__foton.is__radix.stream_pirate_crew_member_illustration_352025ba-0bac-4b8e-9a47-9d8da5bb2ceb-200h.png'
                  className='creator-studio-project-image3'
                />
              </div>
              <div className='creator-studio-project-container13'>
                <div className='creator-studio-project-container14'>
                  <h1 className='creator-studio-project-text25 Smallest'>
                    <span>Role: Admin</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className='creator-studio-project-text28 Heading3'>
                  Collection One
                </h1>
                <h1 className='creator-studio-project-text29 Content'>
                  <span>1500 Items</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className='creator-studio-project-collection3'>
              <div className='creator-studio-project-container15'>
                <img
                  src='/playground_assets/vlad__foton.is__radix.stream_pirate_crew_member_illustration_352025ba-0bac-4b8e-9a47-9d8da5bb2ceb-200h.png'
                  className='creator-studio-project-image4'
                />
              </div>
              <div className='creator-studio-project-container16'>
                <div className='creator-studio-project-container17'>
                  <h1 className='creator-studio-project-text32 Smallest'>
                    <span>Role: Admin</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className='creator-studio-project-text35 Heading3'>
                  Collection One
                </h1>
                <h1 className='creator-studio-project-text36 Content'>
                  <span>1500 Items</span>
                  <br></br>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <TabsRowWithButtons />
        <CollectionItemsContainer />
      </LayoutWithSidebar>
    </div>
  )
})
