import girl_icon from '../girl_icon.jpeg';

const Home = () => {
    function linesForTesting(): any {
        let numbers: number[] = []
        for (let i = 0; i < 50; i++) {
            numbers.push(i);
        }
        return numbers.map((number) =>
            <div>{number}</div>
        );
    }

    return(
        <>
            <div className='welcome-header'>
                <div>
                    <h1 className="full-name-header">Bianca Regulski</h1>
                    <h4 className='text-secondary'>Software Engineer</h4>
                </div>
                <div className='img-div'>
                    <img src={girl_icon} alt="Profile photograph" />
                </div>
            </div>
            <p className='text-primary'>This website will be available soon.</p>
        </>
    );
}

export default Home;