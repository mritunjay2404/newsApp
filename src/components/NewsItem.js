// import React, { Component } from 'react'
import React from 'react'

const NewsItem =(props)=> {
  
  
    let {title,descreption,imageurl,newsurl,author,publishedDate}= props;
    return (
      <>
      <div className="card" >
        <img src={imageurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          {/* <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.descreption}</p> */}
          {/* if we use object destructing, we can write direct like below: */}
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{descreption}</p>
          <p ><small className='text-muted'>By {author?author:"Unknown"} on {new Date(publishedDate).toGMTString()  }</small></p>
          <a href={newsurl} target='__blank' className="btn btn-dark">Read More..</a>
        </div>
      </div>
      </>
    )
}

export default NewsItem