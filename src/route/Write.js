import '../css/Write.css';


const Write = () => {



    return (
        <div className="write_wrap">
            <div className="write_type">
                <select className="page_type">
                    <option>--- page type ---</option>
                    <option>Html</option>
                    <option>Css</option>
                    <option>Javascript</option>
                    <option>ReactJs</option>
                    <option>NodeJs</option>
                    <option>MySQL</option>
                </select>
            </div>
            <div className="write_input">
                <textarea>
                
                </textarea>
            </div>

            <button className="save_button">Save</button>
        </div>
    );
}


export default Write;