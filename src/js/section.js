import '../css/section.css';

const Section = ({title, date}) => {
    return (
        <div className="blog">
            <span>{title}</span>
            <span>{date}</span>
        </div>
    );
}

export default Section;
