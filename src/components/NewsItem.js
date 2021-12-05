import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

        let {title,desc,imageurl,newsurl,author,publishedAt,source} = this.props;

        return (
            <div>
                <div className="card">
                    <img src={imageurl} className="card-img-top" alt={title}/>                
                    <div className="card-body">
                    <h5 className="card-title">
                        {title}
                        <span style={{zIndex:"1"}} className="position-absolute top-0  translate-middle badge rounded-pill bg-success">
                            {source}   
                        </span>
                    </h5>
                    <p className="card-text">{desc}</p>
                    <p className="card-text"><small className="text-muted">By:{author} On { new Date(publishedAt).toDateString() }</small></p>
                    <a rel="noopener noreferrer" href={newsurl} className="btn btn-dark btn-sm" target="_blank">Read More</a>                    
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
