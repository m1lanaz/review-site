import { useEffect } from "react";
import ResturantFinder from "../apis/ResturantFinder";

const ResturantList = () => {

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await ResturantFinder.get("/");
                console.log(response);
            } catch (error) {
                
            }
        };

        fetchData();
    }, []);

    return(
        <div className="d-flex flex-wrap justify-content-center">
            <div className="d-flex flex-column align-items-center">
                <h2>Mcdonalds</h2>
                <h4>£££</h4>
                <p>This si sa fehfiuhe fhei woedwj di wwdiwdfdfie</p>
                <button className="btn btn-primary">View More</button>
            </div>
        </div>
    )
}

export default ResturantList;