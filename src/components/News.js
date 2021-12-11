import React, {useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props)=> {

    const [articles, setarticles] = useState([]);
    const [laoding, setlaoding] = useState(true);
    const [page, setpage] = useState(1);
    //const [stopNext, setstopNext] = useState(0);
    const [totalResults, settotalResults] = useState(0);
    //const [Progress, setProgress] = useState(0);
    
    const capitalizeLetter = (str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
   
    document.title = `${(capitalizeLetter(props.category)=='General')? 'Home': capitalizeLetter(props.category) } - Quick News`;

    const UpdatePage = async ()=>{
        setlaoding(true);
        //setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApiKey}&pageSize=${props.pageSize}&page=${page}` ;
        
        setlaoding(true);
        props.setProgress(30);
        let data = await fetch(url);
        let pareseData = await data.json(data);
        props.setProgress(50);
        // console.log(pareseData);
        setarticles(pareseData.articles);
        props.getTotalResults(pareseData.totalResults);
        settotalResults(pareseData.totalResults);
        setlaoding(false);
        props.setProgress(65);
        props.setProgress(75);
        props.setProgress(100);
    
        
    }


    useEffect(() => {
        UpdatePage();
    }, [])

    const fetchMoreData = async () => {
            
           
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApiKey}&pageSize=${props.pageSize}&page=${page+1}` ;            

            console.log(page);    

            setpage(page+1);
            let data = await fetch(url);
            let pareseData = await data.json(data);
            console.log(pareseData.totalResults);
            setarticles(articles.concat(pareseData.articles));
            props.getTotalResults(pareseData.totalResults);
            settotalResults(pareseData.totalResults);
            setlaoding(false);
       
      };
 

    
        return (
            <>
                <h3 className="my-3 text-center" style={{ marginTop: "85px !important" }}> Top {(capitalizeLetter(props.category)!='General') ? capitalizeLetter(props.category) :''} Headlines</h3>
                 {laoding && <Spinner/>} 
                <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length!=totalResults}
                loader={<Spinner/>}
                >
                <div className='container my-5'>
                    <div className="row">
                        {articles.map((element)=>{                
                            return <div key={element?element.url:''} className="col-md-4 my-2">
                                <NewsItem title ={element ? element.title:''} desc={element?element.description:''} imageurl={element?element.urlToImage:''}  newsurl={element?element.url:''} author={element?element.author:'Unknown'} publishedAt={element?element.publishedAt:''} source={element?element.source.name:''}/>
                            </div>
                        })}
                    </div>
                </div>
                </InfiniteScroll>
            </>
        )
    
}

News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
    ApiKey: PropTypes.string,
}

News.defaultProps = {
    pageSize: 8,
    country: 'us',
    category: 'general',
    ApiKey:'',
}


export default News
