import "./style.css";


const section = ({ title, body, extraHeaderContent }) => (
    <section className="section ">
        <header className="section__header--container">
            <h2 className="section__header">{title}</h2>
            {extraHeaderContent}
        </header>
        <div className="section__container">
            {body}

        </div>

    </section>
);


export default section;