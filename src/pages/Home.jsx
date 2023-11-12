
import Head from '../components/UI-component/header/Head'
import ThaiFastFood from '../components/UI-component/ThaiFastFood'
import BestFood from '../components/UI-component/BestFood'
import Menu from '../components/UI-component/Menu'
import Delivary from '../components/UI-component/Delivary'
import News from '../components/UI-component/News'
import Watch from '../components/UI-component/Watch'
import Crousals from '../components/UI-component/Crousals'

const Home = () => {
    return (
        <>
            <Head />
          
                <ThaiFastFood />
                <BestFood />
                <Menu />
                <Delivary />
                <News />
                <Watch />
                <Crousals />
           
        </>
    )
}

export default Home