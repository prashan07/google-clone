import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider'
import useGoogleSearch from '../useGoogleSearch';
import { Link } from 'react-router-dom';
import './SearchPage.css';
import Search from '../components/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { trueFunc } from 'boolbase';

function SearchPage() {

    const [{term}, dispatch] = useStateValue();
    // LIVE API CALL
    const {data} = useGoogleSearch(term); 
    // const data = Response;

    console.log(data);
    return (
        <div className="searchPage">
            {/* Header */}
            <div className="searchPage__header">
                <div className="searchPage__headerTop">
                    <Link to ="/">
                        <img 
                            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                            alt="Google Logo"
                            className="google__logo"
                            />
                    </Link>
                    <div className="searchPage__headerBody">
                        <Search hideButtons/>
                        
                    </div>
                </div>
               
                <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon className="search__inputIcon"/>
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon className="search__inputIcon"/>
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon className="search__inputIcon"/>
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon className="search__inputIcon"/>
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon className="search__inputIcon"/>
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon className="search__inputIcon"/>
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                        <div className="searchPage__option">
                                    <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                    <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    
                </div> 
                
            </div>
            
            {term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultsCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) 
                    </p>
                    {data?.items.map(item=>(
                        <div className="searchPage__result">
                            <a href={item.link} className="searchPage__resultpreview">
                                {item.displayLink}
                            </a>
                            <a target="_blank" className="searchPage__resultTitle" href={item.link}>{item.title}</a>
                            <p className="searchPage__resultSnipper">{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}
          
        </div>
    )
}

export default SearchPage;
