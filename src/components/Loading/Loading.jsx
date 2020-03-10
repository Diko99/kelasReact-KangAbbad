import React from 'react'
import PropTypes from 'prop-types'

const Loading = ({isLoading}) => { 
   if (isLoading) {
      return (
         <div className="loading__container">
            <div className="loading__bar">
               <img 
                  src = {require('../../asssets/images/loading-bar.svg')}
                  alt="logo"
                />
            </div>
         </div>
      )
   }
   return null
}

Loading.defaultProps= {
   isLoading: false,
}
Loading.propTypes = {
   isLoading : PropTypes.bool
}

export default Loading