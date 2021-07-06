import React from 'react'
import { useSelector } from 'react-redux'
import './Search.css'
import useGoogleSearch from '../useGoogleSearch'
import { Link } from 'react-router-dom'
import Searchh from '../components/Searchh'
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'


const Search = () => {
    const search=useSelector(state=>state.search)
   const {data} =useGoogleSearch(search.term)

  // const {data}=Response

    console.log(data)
    return (
        <div className="searchPage">
             <div className="searchPage-header">
                 <Link to="/">
                 <img className="searchPage-logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
                 </Link>

                 <div className="searchPage-headerBody">
                
                   <Searchh hideButtons/>

                   <div className="searchPage-options">
                   <div className="searchPage-optionsLeft">
                   <div className="searchPage-option">
                         <SearchIcon/>
                         <Link to="/all">All</Link>
                  </div>
                  <div className="searchPage-option">
                         <DescriptionIcon/>
                         <Link to="/news">News</Link>
                  </div>
                  <div className="searchPage-option">
                         <ImageIcon/>
                         <Link to="/images">Images</Link>
                  </div>
                  <div className="searchPage-option">
                         <LocalOfferIcon/>
                         <Link to="/shopping">Shopping</Link>
                  </div>
                  <div className="searchPage-option">
                         <RoomIcon/>
                         <Link to="/maps">Maps</Link>
                  </div>
                  <div className="searchPage-option">
                         <MoreVertIcon/>
                         <Link to="/more">More</Link>
                  </div>
                   </div>
                   <div className="searchPage-optionsRight">
                   <div className="searchPage-option">
                       
                         <Link to="/settings">Settings</Link>
                  </div>
                  <div className="searchPage-option">
                        
                         <Link to="/tools">Tools</Link>
                  </div>
                 
                    </div>
                   </div>
                  </div> 
            </div>

            {
                search.term && (
              <div className="searchPage-results">
            <p className="searchPage-resultCount">
                About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {search.term}
            </p>
            {
                data?.items.map(item=>(
                    <div className="searchPage-result">
                        <a href={item.link}>
                            {
                                item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className="searchPage-resultImage" src={
                                       
                                     item.pagemap?.cse_image?.length>0 &&
                                     item.pagemap.cse_image[0]?.src
                                    } alt=""/>
                                )
                            }
                        {item.displayLink}
                        </a>
                        <a className="searchPage-resultTitle" href={item.link}>
                        <h2>{item.title}</h2>
                        </a>
                        <p className="searchPage-resultSnippet">
                            {item.snippet}
                        </p>
                    </div>
                ))
            }
              </div>
                )
            }
            
        </div>
    )
}

export default Search
