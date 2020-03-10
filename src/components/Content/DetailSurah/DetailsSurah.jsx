import React from 'react'
import PropTypes from 'prop-types'

const DetailsSurah = (props) => {
   return (
      <div className = "content" >
         <h5> {props.infoSurah.surat.nama} </h5>
      <ol>  
         {props.infoSurah.ayat.data.ar.map((item,index) => (
            <li key = {index} style = {{
               marginTop: "20px",
               padding: "20px"
            }}>
               {item.teks}
            </li>
            ))
         }
      </ol>
   </div>
   )
}
DetailsSurah.defaultProps = {
   Surah    : 'surah dalam al-quran',
   infoSurah   : {
      ayat  : {
         data  : {
            arr   : [
               {
                  teks : 'Ini ayat 1'
               },
               {
                  teks : 'Ini ayat 2'
               }
            ]
         }
      }
   }
}
DetailsSurah.propTypes = {
   Surah : PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string 
   ]),
   infoSurah: PropTypes.object
}

export default DetailsSurah