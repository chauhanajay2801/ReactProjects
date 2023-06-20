const RestaurantCard = (props) => {
    const {ResData} = props;
    // console.log(ResData)
    const {name,star,cuisine,eta,cost} = ResData
    return(
        <>
        <div className="main-card">
        <div className="res-card">
             <img src="https://b.zmtcdn.com/data/pictures/chains/5/304055/4d6463c05d83c74e8d95183bed9659b7_o2_featured_v2.jpg?output-format=webp" alt="" className="rest-logo" />
             <h3>{name}</h3>
             <h4>Ratings: {star}stars</h4>
             <h4>Cuisine: {cuisine}</h4>
             <h4>Eta: {eta}</h4>
             <h4>Cost for two: {cost}</h4>
            </div>
        </div>
        </>
    )
}

export default RestaurantCard