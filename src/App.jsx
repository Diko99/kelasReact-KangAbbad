import React, { Component } from 'react'
import axios from 'axios'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import NavSearch from './components/NavSearch/NavSearch'

class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         dataSurah      : [],    //state.surah
         infoSurah       : null, //state.infoSurah
         surah          : '',    //state.surah
         isFetch        : false, //state.isFetch
         searchedSurah  : [],     //state.searchSurah
      }
   }
   componentDidMount(){
      console.log('component didmount')
      this.getDataQuran()
   }
   // function getDataQuran berfungsi memanggil API surah 
   getDataQuran = () => {
      console.log('getDataQuran')
      axios.get('https://api.banghasan.com/quran/format/json/surat')
      .then( result => {
         this.setState({
            dataSurah: result.data.hasil
         }, () => 
            console.log(this.state.dataSurah, 'get dataQuran!')
         )
      }).catch( err => console.log('') );
   }
   // function getSurahQuran berfungsi memanggil API surah 
   getSurahQuran = (numberOfSurah) => {
      console.log('getSurahQuran')
      this.setState({
         isFetch: true
      },()=>{
         axios.get(`https://api.banghasan.com/quran/format/json/surat/${numberOfSurah}/ayat/1-10`)
         .then( result => {
            this.setState ({  
               infoSurah   : result.data,
               isFetch     : false,
               surah       : ''
            }, () => 
               console.log('surah : ',this.state.infoSurah.surat.nama  )
            )
         }).catch( err => console.log('getSurahQuran failed! :', err) );
      })
   }
   // function untuk menghandle tag input pada form searchBar
   onHandleInput = (e) => {
      this.setState({
         surah : e.target.value
      },()=>{
         if(!this.state.isFetch){
            const searchedSurah = this.state.dataSurah.filter(item=>{
               return item.nama.toLowerCase().indexOf(this.state.surah.toLowerCase()) > -1
            })
            this.setState({searchedSurah}, () => {
               // console.log(this.state.searchedSurah, "searchedSurah onclick")
            })
         }
      })
   }

   onHandleHome = () => {
      console.log('tombol button home diklik');
      this.setState({
         infoSurah: null
      },()=>console.log('tombol home diklik' , this.state.infoSurah))
   }

   render() {
      // destructor assignments supaya lebih simple dan rapih slurr :)
      const { dataSurah, infoSurah, isFetch, searchedSurah, surah,  } = this.state
      const { onHandleInput, getSurahQuran,onHandleHome } = this

      return (
         <div className='container-fluid bg-light'>
            {/* Header */}
            <Header />
            {/* search bar */}
            <NavSearch
               searchedSurah  = {searchedSurah}
               surah          = {surah}
               onHandleInput  = {onHandleInput}
               getSurahQuran  = {getSurahQuran}
               onHandleHome   = {onHandleHome}

            />
            {/* content */}
            <Content
               tombolReset =  {onHandleHome}
               isFetch     =  {isFetch}
               dataSurah   =  {dataSurah} 
               infoSurah   =  {infoSurah} 
             />
         </div>
      )
   }
}

export default App
