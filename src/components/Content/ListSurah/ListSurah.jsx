import React from 'react'
import PropTypes from 'prop-types'

const ListSurah = (props) => {
   return(
      <div className="surah">
         {props.dataSurah.map((item, index) => (
               <div 
               key={index}
               className="surah__box"
               >
               <p className="surah__asma surah__text--center" >
                  {item.asma}
               </p>
               <p className="surah__name surah__text--center" >
                  {item.nama}
               </p>
               </div>
         ))}
      </div>
   )
}
ListSurah.defaultProps = {
   dataSurah   : []
}
ListSurah.propTypes = {
   dataSurah   : PropTypes.array 
}



export default ListSurah