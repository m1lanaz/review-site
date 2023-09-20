import Header from '../components/Header';
import FindResturant from '../components/FindResturant';
import ResturantList from '../components/ResturantList';

const Home = () => {
    return(
        <div>
            <Header/>
            <FindResturant/>
            <ResturantList/>
        </div>
    )
}

export default Home;