import NavBar from "../components/navbar";
import Banner from "../components/Banner/index"
import TimeLine from "../components/timeline/index"
import Projects from "../components/Projects/card/index"
import Form from "../components/form/index"
import Footer from "../components/footer/index"
const Home = () => {
    return (
        <div>
            <NavBar/>
            <main>
                <Banner/>
                <TimeLine/>
                <Projects/>
                <Form/>
            </main>
            <Footer/>
        </div>
    )
}
export default Home;