import React, { useEffect,useState } from 'react';
// import{ Component } from 'react'; ------------------for class based copmponent
import NewsItem from './NewsItem';
import Spinner from './Spinner';
// import { PropTypes } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";


// this is for class based component
// export class News extends Component {
 
//   // articles = [
//   //   {
//   //     "source": { "id": "reuters", "name": "Reuters" },
//   //     "author": "Reuters",
//   //     "title": "Russia calls pilot killed in Spain after defecting to Ukraine a \"moral corpse\" - Reuters",
//   //     "description": "Lorem ipsum dolor sit amet, consectetur adip ex ea commodo consequ  id ",
//   //     "url": "https://www.reuters.com/world/europe/russian-spy-chief-killed-russian-pilot-was-moral-corpse-defecting-2024-02-20/",
//   //     "urlToImage": null,
//   //     "publishedAt": "2024-02-20T12:19:00Z",
//   //     "content": null
//   //   },
//   //   {
//   //     "source": { "id": null, "name": "BBC News" },
//   //     "author": null,
//   //     "title": "Brightest and hungriest black hole ever detected - BBC.com",
//   //     "description": "Astronomers report an object that shines with a brightness equivalent to 500 trillion suns.",
//   //     "url": "https://www.bbc.com/news/science-environment-68346725",
//   //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DF8D/production/_132692275_eso2402a.jpg",
//   //     "publishedAt": "2024-02-20T10:31:00Z",
//   //     "content": "By Jonathan AmosScience correspondent\r\nArtwork: The bright core of J0529-4351 is powered by a supermassive black hole\r\nThe most luminous object ever detected has been spied in the distant Universe.\r\n… [+1724 chars]"
//   //   },
//   //   {
//   //     "source": { "id": null, "name": "CNBC" },
//   //     "author": "Melissa Repko",
//   //     "title": "Home Depot beats earnings, sales estimates even as consumers take on smaller home improvement projects - CNBC",
//   //     "description": "Home Depot has seen sales slow as consumers buy fewer big-ticket items and spend on experiences instead of goods.",
//   //     "url": "https://www.cnbc.com/2024/02/20/home-depot-hd-q4-2023-earnings.html",
//   //     "urlToImage": "https://image.cnbcfm.com/api/v1/image/106844173-1614086172633-gettyimages-1231329942-HOME_DEPOT_EARNS.jpeg?v=1708434387&w=1920&h=1080",
//   //     "publishedAt": "2024-02-20T10:30:01Z",
//   //     "content": "Home Depot on Tuesday said quarterly sales declined nearly 3% year over year, but it surpassed Wall Street's earnings and revenue expectations despite the cooler demand.\r\nThe home improvement retaile… [+3329 chars]"
//   //   },
//   //   {
//   //     "source": { "id": "axios", "name": "Axios" },
//   //     "author": "Axios",
//   //     "title": "OpenAI's Sora brings movie-making magic, directed by AI - Axios",
//   //     "description": "Lorem ipsum dolor sit amet, consectetur adip ex ea commodo consequ  id",
//   //     "url": "https://www.axios.com/2024/02/20/openai-movies-sora-chatgpt-hollywood",
//   //     "urlToImage": null,
//   //     "publishedAt": "2024-02-20T10:22:07Z",
//   //     "content": null
//   //   },
//   //   {
//   //     "source": { "id": "politico", "name": "Politico" },
//   //     "author": null,
//   //     "title": "Biden campaign touts $42M raised in January - POLITICO",
//   //     "description": "The Democratic president and DNC ended January with $130 million cash on hand.",
//   //     "url": "https://www.politico.com/news/2024/02/20/biden-campaign-fundraising-00142130",
//   //     "urlToImage": "https://static.politico.com/c8/be/ab9dad6e45ad83b166ec405106af/biden-40198.jpg",
//   //     "publishedAt": "2024-02-20T10:01:00Z",
//   //     "content": "The presidents political operation continues to stockpile cash reserves, saying it had $130 million cash on hand across all entities as of the end of January, up from $117 million at the end of Decem… [+933 chars]"
//   //   },
//   //   {
//   //     "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
//   //     "author": "John Psaropoulos",
//   //     "title": "Julian Assange appeals in ‘most important press freedom case in the world’ - Al Jazeera English",
//   //     "description": "A court will decide if Julian Assange may appeal extradition to the US, where relatives say he could die in jail.",
//   //     "url": "https://www.aljazeera.com/news/2024/2/20/julian-assange-appeals-in-most-important-press-freedom-case-in-the-world",
//   //     "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/02/2024-02-20T085001Z_1296975595_RC2866A5WVT1_RTRMADP_3_BRITAIN-USA-ASSANGE-1708421725.jpg?resize=1920%2C1440",
//   //     "publishedAt": "2024-02-20T09:54:12Z",
//   //     "content": "Londons High Court has scheduled two days of hearings on Tuesday and Wednesday to decide whether WikiLeaks founder Julian Assange may appeal a United States request for extradition to stand trial on … [+6521 chars]"
//   //   },
//   //   {
//   //     "source": { "id": null, "name": "Variety" },
//   //     "author": "Nick Vivarelli",
//   //     "title": "Martin Scorsese to Play Dante Alighieri’s Mentor in Julian Schnabel’s Upcoming ‘In the Hand of Dante’ (EXCLUSIVE) - Variety",
//   //     "description": "Martin Scorsese has a small but powerful role as a sage who advises Dante Alighieri in Julian Schnabel’s upcoming film ‘In the Hands of Dante.'",
//   //     "url": "https://variety.com/2024/film/global/martin-scorsese-acting-role-julian-schnabel-in-the-hand-of-dante-1235916565/",
//   //     "urlToImage": "https://variety.com/wp-content/uploads/2024/02/Martin-Scorsese.jpg?w=1000&h=563&crop=1",
//   //     "publishedAt": "2024-02-20T09:41:00Z",
//   //     "content": "Martin Scorsese will soon be seen on the big screen, and he won’t be playing himself.\r\nThe master director, who is being feted with Berlin Film Festival‘s Honorary Golden Bear on Tuesday night, has a… [+3645 chars]"
//   //   },
//   //   {
//   //     "source": { "id": null, "name": "CoinDesk" },
//   //     "author": "Omkar Godbole",
//   //     "title": "Bitcoin Order Books Are Most Liquid Since October as Market Depth Nears $540M - CoinDesk",
//   //     "description": "Order book liquidity indicates how easy it is to buy and sell large quantities at stable prices.",
//   //     "url": "https://www.coindesk.com/markets/2024/02/20/bitcoin-order-books-are-most-liquid-since-october-as-market-depth-nears-540m/",
//   //     "urlToImage": "https://www.coindesk.com/resizer/mgUnE6w3m0maRCSVHvOoBCfmNSk=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/XUUQSURJJBDJROESHB2SMLG4PE.jpg",
//   //     "publishedAt": "2024-02-20T09:35:00Z",
//   //     "content": "Please note that ourprivacy policy,terms of use,cookies, anddo not sell my personal informationhas been updated.\r\nThe leader in news and information on cryptocurrency, digital assets and the future o… [+652 chars]"
//   //   },
//   //   {
//   //     "source": { "id": null, "name": "SciTechDaily" },
//   //     "author": null,
//   //     "title": "Warning: High Levels of Niacin (Vitamin B3) Linked to Heart Disease - SciTechDaily",
//   //     "description": "Excess niacin fuels inflammation, cardiovascular disease through newly discovered pathway. Cleveland Clinic researchers have identified a new pathway that contributes to cardiovascular disease associated with high levels of niacin, a common B vitamin previous…",
//   //     "url": "https://scitechdaily.com/warning-high-levels-of-niacin-vitamin-b3-linked-to-heart-disease/",
//   //     "urlToImage": "https://scitechdaily.com/images/Heart-Rate-Disease-Concept.jpg",
//   //     "publishedAt": "2024-02-20T09:17:53Z",
//   //     "content": "A team from the Cleveland Clinic has identified a new contributor to cardiovascular disease: 4PY, a byproduct of excess niacin (vitamin B-3). Their research shows that high levels of 4PY are linked t… [+5577 chars]"
//   //   },
//   //   {
//   //     "source": { "id": null, "name": "BBC News" },
//   //     "author": null,
//   //     "title": "China coast guard caused 'panic' by boarding tourist boat, says Taiwan - BBC.com",
//   //     "description": "This comes a day after Beijing said it would step up patrols following the death of two fishermen last week.",
//   //     "url": "https://www.bbc.com/news/world-asia-68345292",
//   //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9B27/production/_132691793_7a1e5a16c61fef8c8261eb26c82ab048e538660f0_0_5500_36671000x667.jpg",
//   //     "publishedAt": "2024-02-20T08:01:06Z",
//   //     "content": "Kinmen lies just 3km away from China's south-eastern coast, placing it on the frontline of tensions between China and Taiwan.\r\nTaiwan has accused China's coast guard of triggering \"panic\", after six … [+2179 chars]"
//   //   },
//   //   {
//   //     "source": { "id": "cnn", "name": "CNN" },
//   //     "author": "Elizabeth Wolfe",
//   //     "title": "Part of Los Angeles could see record rainfall as flood alerts span almost all of California - CNN",
//   //     "description": "Nearly the entire population of California is under flood alerts Tuesday as the latest round of rainfall soaks the state, prompting road closures, evacuation warnings and water rescues. In Los Angeles, which faces significant flood threats, the city is close …",
//   //     "url": "https://www.cnn.com/2024/02/19/weather/california-storm-rain-flooding-tuesday/index.html",
//   //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2024053575.jpg?c=16x9&q=w_800,c_fill",
//   //     "publishedAt": "2024-02-20T06:51:14Z",
//   //     "content": "Nearly the entire population of California is under flood alerts Tuesday as the latest round of rainfall soaks the state, prompting road closures, evacuation warnings and some water rescues. In Los A… [+4929 chars]"
//   //   },
//   //   {
//   //     "source": { "id": null, "name": "MarketWatch" },
//   //     "author": "Emily Bary",
//   //     "title": "Why Capital One plans to buy Discover in a megamerger of credit giants - MarketWatch",
//   //     "description": "The just-announced $35 billion deal is seen as a way to build scale, with Discover’s payments network currently the smallest of the four U.S.-based ones",
//   //     "url": "https://www.marketwatch.com/story/why-capital-one-plans-to-buy-discover-in-a-megamerger-of-credit-giants-0d3cb985",
//   //     "urlToImage": "https://images.mktw.net/im-876873/social",
//   //     "publishedAt": "2024-02-20T06:31:00Z",
//   //     "content": "Capital One Financial Corp. intends to purchase Discover Financial Services in an all-stock deal that one analyst notes would effectively create the largest card issuer in the U.S. Capital One \r\n COF… [+3003 chars]"
//   //   },
//   //   {
//   //     "source": { "id": "axios", "name": "Axios" },
//   //     "author": "Axios",
//   //     "title": "Trump's reaction to Navalny death: Haley blasts absent Putin critique - Axios",
//   //     "description": "Lorem ipsum dolor sit amet, consectetur adip ex ea commodo consequ  id",
//   //     "url": "https://www.axios.com/2024/02/19/trump-alexei-navalny-comment",
//   //     "urlToImage": null,
//   //     "publishedAt": "2024-02-20T06:08:53Z",
//   //     "content": null
//   //   },
//   //   {
//   //     "source": { "id": null, "name": "BBC News" },
//   //     "author": null,
//   //     "title": "Israel-Gaza war: US calls for temporary ceasefire in UN text - BBC.com",
//   //     "description": "Its draft resolution features tougher language, echoing comments made by President Joe Biden.",
//   //     "url": "https://www.bbc.com/news/world-us-canada-68346027",
//   //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B7B5/production/_132692074_rafah-gettyimages-2013000418.jpg",
//   //     "publishedAt": "2024-02-20T05:12:33Z",
//   //     "content": "By Nada Tawfik and James FitzGeraldBBC News, New York and London\r\nRafah is sheltering more than a million people who have been forced to flee other parts of the Gaza Strip\r\nThe US has proposed a draf… [+2988 chars]"
//   //   },
//   //   {
//   //     "source": { "id": "associated-press", "name": "Associated Press" },
//   //     "author": "JENNIFER PELTZ",
//   //     "title": "Welcome to the 'Hotel California' case: The trial over handwritten lyrics to an Eagles classic - The Associated Press",
//   //     "description": "An unusual criminal trial is set to open over the handwritten lyrics to a classic rock blockbuster: the Eagles' “Hotel California.” A noted rare-book dealer, a former Rock & Roll Hall of Fame curator and a collectibles seller are charged with conspiring to ow…",
//   //     "url": "https://apnews.com/article/hotel-california-lyrics-manuscript-trial-eagles-henley-973e74e795416821e6f022895b47b78e",
//   //     "urlToImage": "https://dims.apnews.com/dims4/default/02bb156/2147483647/strip/true/crop/5582x3140+0+350/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F16%2F62%2Fa10df38bc2bb64cdb97d638caf25%2F7a3d5b72030c43419a23f1beacca216d",
//   //     "publishedAt": "2024-02-20T05:09:00Z",
//   //     "content": "NEW YORK (AP) In the mid-1970s, the Eagles were working on a spooky, cryptic new song. \r\nOn a lined yellow pad, Don Henley, with input from band co-founder Glenn Frey, jotted thoughts about a dark de… [+6516 chars]"
//   //   },
//   //   {
//   //     "source": { "id": null, "name": "YouTube" },
//   //     "author": null,
//   //     "title": "Iowa State Cyclones vs. Houston Cougars | Full Game Highlights | ESPN College Basketball - ESPN",
//   //     "description": "Check out these highlights as the No. 2 Houston Cougars defeat the No. 6 Iowa State Cyclones. Jamal Shead dropped 26 PTS, 6 AST & 4 REB to lead the Cougars t...",
//   //     "url": "https://www.youtube.com/watch?v=osoarQnDXOY",
//   //     "urlToImage": "https://i.ytimg.com/vi/osoarQnDXOY/maxresdefault.jpg",
//   //     "publishedAt": "2024-02-20T04:51:42Z",
//   //     "content": null
//   //   },
//   //   {
//   //     "source": { "id": "associated-press", "name": "Associated Press" },
//   //     "author": "THE ASSOCIATED PRESS",
//   //     "title": "Navalny's widow vows to continue his fight against the Kremlin and punish Putin for his death - The Associated Press",
//   //     "description": "The widow of Russian opposition leader Alexei Navalny has vowed to continue his fight against the Kremlin. Meanwhile, authorities denied his mother access to a morgue where his body is believed to be held after his death last week in an Arctic penal colony. I…",
//   //     "url": "https://apnews.com/article/russia-navalny-death-56d3cf1d114e6be452465d5e312b4fad",
//   //     "urlToImage": "https://dims.apnews.com/dims4/default/7c13a53/2147483647/strip/true/crop/5500x3094+0+290/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe4%2Ff5%2Fdf3095ca1242cce4794fd136e265%2Fe34f3f398770499282f0e1ac5c245c2c",
//   //     "publishedAt": "2024-02-20T04:27:00Z",
//   //     "content": "The widow of Russian opposition leader Alexei Navalny vowed on Monday to continue his fight against the Kremlin, while authorities denied his mother access to a morgue where his body is believed to b… [+7108 chars]"
//   //   },
//   //   {
//   //     "source": { "id": null, "name": "NBCSports.com" },
//   //     "author": "John Newby",
//   //     "title": "What drivers said after William Byron won Daytona 500 - NBC Sports",
//   //     "description": "The 2024 Daytona 500 featured three cautions for on-track incidents and two for stage breaks.",
//   //     "url": "https://www.nbcsports.com/nascar/news/what-drivers-said-after-william-byron-won-daytona-500",
//   //     "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/f849f57/2147483647/strip/true/crop/3699x2081+0+193/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Ff8%2F1b%2F6440eda04d40931d253ff317dd35%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2024029209",
//   //     "publishedAt": "2024-02-20T03:04:44Z",
//   //     "content": "Heres what drivers were saying after the 2024 Daytona 500. \r\nWilliam Byron Winner: Just so proud of this team, whole Axalta team. 40th anniversary, to the day (of Hendrick Motorsports first race) on … [+11752 chars]"
//   //   },
//   //   {
//   //     "source": { "id": null, "name": "Deadline" },
//   //     "author": "Armando Tinoco",
//   //     "title": "/'When Harry Met Sally Director Turned Film s Sad Ending To A Happy Ending After Finding Love In Real Life - Deadline",
//   //     "description": "The ending of When Harry Met Sally was not how it was initially conceived, and director Rob Reiner is opening up about what changed his mind.",
//   //     "url": "http://deadline.com/2024/02/when-harry-met-sally-director-changed-ending-1235831361/",
//   //     "urlToImage": "https://deadline.com/wp-content/uploads/2024/02/when-harry-met-sally.jpg?w=1024",
//   //     "publishedAt": "2024-02-20T02:43:00Z",
//   //     "content": "The ending of When Harry Met Sally was not how it was initially conceived, and director Rob Reiner is opening up about what changed his mind.\r\nIn a new interview for Who’s Talking to Chris Wallace, R… [+1262 chars]"
//   //   },
//   //   {
//   //     "source": { "id": "associated-press", "name": "Associated Press" },
//   //     "author": "JOHN HANNA",
//   //     "title": "Burnsville shooting: Minnesota suspect wasn't allowed to have guns - The Associated Press",
//   //     "description": "Court records show that a man who died after fatally shooting two police officers and a firefighter in a wooded suburban-Minneapolis neighborhood wasn’t legally allowed to have guns. He also was entangled in a yearslong dispute over the custody and financial …",
//   //     "url": "https://apnews.com/article/officers-firefighter-killed-burnsville-minnesota-shooter-gooden-c6e27aa84e577c27d5e44f5f2c9c4004",
//   //     "urlToImage": "https://dims.apnews.com/dims4/default/366c213/2147483647/strip/true/crop/5733x3225+0+299/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa5%2Fab%2F0a138b3e54e8ab598888f28d9049%2F60c4caea33dd434e8a98bf4d9d48a180",
//   //     "publishedAt": "2024-02-20T02:15:00Z",
//   //     "content": "A man who died after fatally shooting two police officers and a firefighter in a wooded Minneapolis-area neighborhood wasnt legally allowed to have guns after a previous assault conviction and was en… [+3599 chars]"
//   //   }
//   // ]
// static defaultProps = {
//   pageSize:6,
//   country: "in",
//   category:"general"
// }
// static propTypes ={
//   // pageSize: PropTypes.number,
//   // country: PropTypes.string
// }

//   constructor() {
//     super();
//     console.log('hello i am constructor from News Component');
//     this.state = {
//       // articles : this.articles,
//       articles : [],
//       loading: false,
//       page:1,
//       totalResults: 0,
//       // pagesize:9
//     }
//     // console.log(this.state.articles);
//   };

//   async componentDidMount() {
//     console.log('cdm component');

//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ec4cfa4f83944cb8843fa44a70527d78&page=${this.state.page}&pagesize=${this.props.pageSize}`;
//     this.setState({loading:true});
//     let data =  await fetch(url);
//     let parsedata =await data.json();
//     console.log(parsedata); 
//     this.setState({
//       articles:parsedata.articles,
//       totalResults: parsedata.totalResults,
//       loading: false,
//       // page:this.state.page+1, 
//     });
//   };

// //   handlePrevFunc = async () => {
// //     console.log("prev");
// //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ec4cfa4f83944cb8843fa44a70527d78&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
// //     this.setState({loading:true});
// //     let data =  await fetch(url);
// //     let parsedata =await data.json();
// //     console.log(parsedata); 
// //     // this.setState({articles:parsedata.articles});
// //     this.setState({
// //       page:this.state.page-1,
// //       articles:parsedata.articles,
// //       loading:false
// //   })

// //   };

// //   handleNextFunc = async () => {
// //     console.log("Next");

// //     if((this.state.page < Math.ceil(this.state.totalResults/this.props.pageSize))){

// //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ec4cfa4f83944cb8843fa44a70527d78&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
// //     this.setState({loading:true});
// //     let data =  await fetch(url);
// //     let parsedata =await data.json();
// //     console.log(parsedata); 
// //     // this.setState({articles:parsedata.articles});
// //     this.setState({
// //       page:this.state.page+1,
// //       articles:parsedata.articles,
// //       loading:false
// //   })
// //   }else{

// //   }
// // };

// fetchMoreData = async () => {
//   this.setState({
//           page:this.state.page+1,   
//       })
//   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ec4cfa4f83944cb8843fa44a70527d78&page=${this.state.page}&pagesize=${this.props.pageSize}`;
//   this.setState({loading:true});
//   let data =  await fetch(url);
//   let parsedata =await data.json();
//   console.log(parsedata); 
//   this.setState({
//     articles:parsedata.articles.concat(parsedata.articles),
//     totalResults: parsedata.totalResults,
//     loading: false
//   });
// };


//   render() {
//     return (
//         <>
//       <div className='container my-4'>
//           <h2 className='text-center'>Top Headlines -- NewsMonkey</h2>
//           {/* {this.state.articles.map((element)=>{console.log(element)})} */}
//           {/* {this.state.loading && <Spinner/>} */}



//           <InfiniteScroll
//             dataLength={this.state.articles.length}
//             next={this.fetchMoreData}
//             hasMore={this.state.articles.length !== this.state.totalResults}
//             loader={<Spinner/>}
//             >
//           <div className="row">
//           { this.state.articles.map((element)=>{
//             return <div className="col-md-4 my-2" key={element.url} >
//             <NewsItem  title={element.title?element.title.slice(0, 45):""} descreption={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage?element.urlToImage:"https://img.etimg.com/thumb/msid-107869509,width-1200,height-630,imgsize-27810,overlay-etmarkets/photo.jpg"} newsurl={element.url} author ={element.author} publishedDate={element.publishedAt}/>
//           </div>
//           })}
            
//             {/* <div className="col-md-4">  
//               <NewsItem  title="my tityle" descreption="my descrp" imageurl/>
//             </div> */}
            
//           </div>
//           </InfiniteScroll>
//       </div>
//        {/* <div className='container d-flex justify-content-between my-2'>
//             <button disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handlePrevFunc}>&larr; Prev</button>
//             <button  disabled={this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-dark' onClick={this.handleNextFunc}>Next &rarr;</button>
//        </div> */}
//       </>
//     )
//   }
// }





// ******************this is for funtional based component***********************************


const News =(props)=> {
 

  News.defaultProps = {

  pageSize:6,
  country: "in",
  category:"general"
}
//  creating states
  const [articles,setArticles]= useState([]);
  const [loading,setLoading]= useState(true);
  const [page,setPage]= useState(1);
  const [totalResults,setTotalResults]= useState(0);

  const updatenews = async ()=> {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ec4cfa4f83944cb8843fa44a70527d78&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true)
    let data =  await fetch(url);
    let parsedata =await data.json();
    console.log(parsedata); 
    setArticles(parsedata.articles)
    setTotalResults(parsedata.totalResults)
    setLoading({loading:false})
    } catch (error) {
      console.log("error: " + error)
    }
    
  }
  useEffect(()=>{
    updatenews()
  },[])

  // const  componentDidMount= async ()=> {
  //   updatenews()
  // };

//   

const fetchMoreData = async () => {
  setPage({page:page+1})
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ec4cfa4f83944cb8843fa44a70527d78&page=${page}&pagesize=${props.pageSize}`;
  setLoading({loading:true});
  let data =  await fetch(url);
  let parsedata =await data.json();
  console.log(parsedata); 
  setArticles(parsedata.articles.concat(parsedata.articles))
  setTotalResults(parsedata.totalResults)
  setLoading(false)
  
};

    return (
        <>
      <div className='container my-4'>
          <h2 className='text-center'>Top Headlines -- NewsSite</h2>
          {/* {this.state.articles.map((element)=>{console.log(element)})} */}
          {/* {this.state.loading && <Spinner/>} */}



          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
            >
          <div className="row">
          { articles.map((element)=>{
            return <div className="col-md-4 my-2" key={element.url} >
            <NewsItem  title={element.title?element.title.slice(0, 45):""} descreption={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage?element.urlToImage:"https://img.etimg.com/thumb/msid-107869509,width-1200,height-630,imgsize-27810,overlay-etmarkets/photo.jpg"} newsurl={element.url} author ={element.author} publishedDate={element.publishedAt}/>
          </div>
          })}
            
          </div>
          </InfiniteScroll>
      </div>
       {/* <div className='container d-flex justify-content-between my-2'>
            <button disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handlePrevFunc}>&larr; Prev</button>
            <button  disabled={this.state.page > Math.ceil(this.state.totalResults/props.pageSize)} className='btn btn-dark' onClick={this.handleNextFunc}>Next &rarr;</button>
       </div> */}
      </>
    )
}
export default News;