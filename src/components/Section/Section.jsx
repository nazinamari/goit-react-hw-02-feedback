import PropTypes from 'prop-types'; 
import { Title } from './Section.styles';

export const Section = ({ title, children }) => (
    <>
        <Title>{title}</Title>
        {children}
    </>
);

Section.propTypes = {
  title: PropTypes.string,
};