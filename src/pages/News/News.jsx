
import PropTypes from 'prop-types';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Header from '../Shared/Header/Header';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                    <p>{id}</p>
              <h2 className="text-3xl">details news</h2>
                </div>
                <div className=''>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

News.propTypes = {
    
};

export default News;