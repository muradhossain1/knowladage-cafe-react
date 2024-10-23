import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 pt-4">
            <div>
                <h2 className="text-2xl">Reading Time : {readingTime}</h2>
            </div>
            <h2 className='text-xl text-center bg-gray-300'>Bookmarks Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks : PropTypes.object.isRequired,
    readingTime : PropTypes.object.isRequired
}

export default Bookmarks;