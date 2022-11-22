import TrendingCards from "./TrendingCards";
import '../TrendingPages/trending.scss'

export default function TrendingPages(){
    return(
        <section className="trending">
        <div className="trending-text">
            <span>Trending</span>
            <h1>Trending Right Now</h1>
            </div>
            <div className="my-container">
                <div className="row align-items-center">
                 <TrendingCards/>
                 <TrendingCards/>
                 <TrendingCards/>
                 <TrendingCards/>
                </div>
               


            </div>
            

    </section>
    )
}
     