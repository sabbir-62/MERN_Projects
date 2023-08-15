import loader from '../../assets/images/loadingImage.svg'

const Loader = () => {
    return (
        <div className='ProcessingDiv'>
            <div className="center-screen">
                <img className='loader-size img-fluid' src={loader} alt="img" />
            </div> 
        </div>
    );
};

export default Loader;