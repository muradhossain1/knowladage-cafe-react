import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({blog,  handleAddBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img,posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex gap-6'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddBookmark(blog)} className='ml-2'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='text-purple-800 font-bold underline'>Mark AS Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddBookmark : PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}

export default Blog;