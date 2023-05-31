import React, { useState } from 'react'

import './settings-trait.css'

const SettingsTrait = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="settings-trait-container"
    >
      {isVisible && (
        <div className="settings-trait-hover-icon">
          <svg
            viewBox="0 0 1024 1024"
            className="settings-trait-icon fill-color-white"
          >
            <path d="M640 384v-256h86v86h170v84h-170v86h-86zM896 554h-426v-84h426v84zM298 384h86v256h-86v-86h-170v-84h170v-86zM554 896h-84v-256h84v86h342v84h-342v86zM128 214h426v84h-426v-84zM128 726h256v84h-256v-84z"></path>
          </svg>
        </div>
      )}
    </div>
  )
}

export default SettingsTrait
