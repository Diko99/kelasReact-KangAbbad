import React from 'react'
import DetailsSurah from '../Content/DetailSurah/DetailsSurah'
import Loading from '../Loading/Loading'
import ListSurah from './ListSurah/ListSurah'

const Content = (props) => {
   return(
      <div className="container">
         {
         (props.dataSurah.length && !props.infoSurah)
            ? <ListSurah className="container" dataSurah={props.dataSurah} />
               : props.infoSurah && (
                  <DetailsSurah className="container bg-dark" infoSurah={props.infoSurah} />
               )
         }
         <Loading isLoading={props.isFetch} />
      </div>
   )
}

export default Content  