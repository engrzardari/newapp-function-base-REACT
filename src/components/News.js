import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {


    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string,
        ApiKey: PropTypes.string,
    }

    static defaultProps = {
        pageSize: 8,
        country: 'us',
        category: 'general',
        ApiKey:'',
    }
    
    capitalizeLetter = (str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    constructor(props){
        super(props);
        console.log('Hi Constructor from news component');
        this.state= {
            articles : [],
            laoding : true,
            page:1,
            stopNext:0,
            totalResults:0,
        }
  
        document.title = `${(this.capitalizeLetter(this.props.category)=='General')? 'Home': this.capitalizeLetter(this.props.category) } - Quick News`;
    }


    async UpdatePage(){
        this.setState({laoding:true})
        this.props.setProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ApiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}` ;
        this.setState({laoding:true})
        this.props.setProgress(30)
        let data = await fetch(url);
        let pareseData = await data.json(data);
        this.props.setProgress(50)
        // console.log(pareseData);
        this.setState({
            articles: pareseData.articles,
            totalResults:pareseData.totalResults,
            laoding : false            
        })
        this.props.setProgress(65)
        this.props.setProgress(75)
        this.props.setProgress(100)
        this.props.getTotalResults(this.state.totalResults);
        
    }

    async componentDidMount(){
        // console.log('Hello CDM');
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ApiKey}&pageSize=${this.props.pageSize}&page=1` ;
        // this.setState({laoding:true})
        // let data = await fetch(url);
        // let pareseData = await data.json(data);
        // // console.log(pareseData);
        // this.setState({
        //     articles: pareseData.articles,
        //     totalResults:pareseData.totalResults,
        //     laoding : false,
        // })
        this.UpdatePage();
    
    }

    fetchMoreData = async () => {
            
        this.setState({page:this.state.page+1});
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ApiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}` ;            
            let data = await fetch(url);
            let pareseData = await data.json(data);
            // console.log(pareseData);
            this.setState({
                articles: this.state.articles.concat(pareseData.articles),
                totalResults:pareseData.totalResults,
                laoding : false,
            })
                        
      };
 

    render() {
        return (
            <>
                <h3 className="my-3 text-center"> Top {(this.capitalizeLetter(this.props.category)!='General') ? this.capitalizeLetter(this.props.category) :''} Headlines</h3>
                 {this.state.laoding && <Spinner/>} 
                <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length!=this.state.totalResults}
                loader={<Spinner/>}
                >
                <div className='container my-5'>
                    <div className="row">
                        {this.state.articles.map((element)=>{                
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
}

export default News
