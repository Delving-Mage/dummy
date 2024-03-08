import { useLocation } from 'react-router-dom';

const HomePage=()=>{
    const location = useLocation()
    console.log(location)
    return(
        <>
        Welcome HomePage
        </>
    )
}

export default HomePage;