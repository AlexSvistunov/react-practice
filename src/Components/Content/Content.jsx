import PropTypes from 'prop-types';
export default function Content({text}){
    return(
        <p className={toggleState === 1 ? "work__content active" : "work__content"}>{text}</p>
    )
}

Content.propTypes = {
    text: PropTypes.string.isRequired,
};