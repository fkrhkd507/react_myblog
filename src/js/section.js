import '../css/section.css';

const Section = ({data}) => {
    return (
        <div>
        {
            data.data.map((blog_list) => {
                return( 
                    <div className="blog">
                        <div className="blog_box">
                            <span className="title">{blog_list.title}</span>
                            <span className="date">{blog_list.date}</span>        
                        </div>
                    </div>
                );
                }
            )
        }
        </div>
    );
}

export default Section
