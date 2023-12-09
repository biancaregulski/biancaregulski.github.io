import girl_icon from '../girl_icon.jpeg';

const Home = () => {
    return(
        <div className="main-content">
            <div className='welcome-header'>
                <div>
                    <h1 className="full-name-header">Bianca Regulski</h1>
                    <h4 className='text-secondary'>Software Engineer</h4>
                </div>
                <div className='img-div'>
                    <img src={girl_icon} alt="Profile photograph" />
                </div>
            </div>
            <p className='text-primary'>primary</p>
            <p className=''>regular</p>
        </div>
    );
}

export default Home;