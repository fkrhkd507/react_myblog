import '../css/section.css';

const Section = ({id, title, date, detail}) => {

    const detail_style = {
        'display' : 'none'
    }
    
    const detail_toggle = (e) => {
        
        let detail = document.querySelector(`.blog_detail[data-id='${e.currentTarget.id}']`);
        if(detail.style.display == "none"){
            detail.style.display = "block";
        }else{
            detail.style.display = "none";
        };
    };

    return (
        <>
            <div className="blog" id={id} onClick={detail_toggle}>
                <div className="blog_box">
                    <span className="title">{title}</span>
                    <span className="date">{date}</span>        
                </div>
            </div>
            <div className="blog_detail" data-id={id} style={detail_style}>
                {detail}
            </div>
        </>
    );
}

export default Section
