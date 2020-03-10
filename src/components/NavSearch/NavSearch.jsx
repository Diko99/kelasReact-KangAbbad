import React, { Component } from 'react'

export class NavSearch extends Component {
   render(props) {
      return (
      <div className="search">
         <nav className="search__container">
            <input 
               type        = "search" 
               placeholder = "Cari Surah" 
               name        = "input-surah"
               value       = {this.props.surah}
               onChange    = {this.props.onHandleInput} 
               className   = " search__input-box" 
            />

               {/* list suggestion form input*/}
               { this.props.surah && this.props.searchedSurah.length
                  ? (
                     <div className="search__suggest__container">
                        <ul>
                           {this.props.searchedSurah.map((item, index) => {
                              return (
                                 <ol key = {index}>
                                    <button
                                       onClick  = { ()=> this.props.getSurahQuran(item.nomor)}
                                       className = "search__suggest__btn">
                                       Q.S {item.nama.toUpperCase()}
                                    </button>
                                 </ol>
                              )
                           })}
                        </ul>
                     </div>
                  ) : null
               }
                  <button className="search__button" onClick={this.props.onHandleHome} >
               Home
            </button>
         </nav>
      </div>
      )
   }
}


export default NavSearch
