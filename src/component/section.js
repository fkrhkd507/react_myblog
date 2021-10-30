import '../css/section.css';

const Section = ({id, title, date}) => {
    return (
        <>
            <div className="blog" id={id}>
                <div className="blog_box">
                    <span className="title">{title}</span>
                    <span className="date">{date}</span>        
                </div>
            </div>
        </>
    );
}

export default Section
