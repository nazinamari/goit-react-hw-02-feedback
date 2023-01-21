import PropTypes from 'prop-types';
import { TextList, Text, Wrapper, Item } from './Statistics.styled';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => (
    <Wrapper>
        <TextList>
            <Item>
                <Text>Good: {good}</Text>
            </Item>
            <Item>
                <Text>Neutral: {neutral}</Text>
            </Item>
            <Item>
                <Text>Bad: {bad}</Text>
            </Item>
            <Item>
                <Text>Total: {total}</Text>
            </Item>
            <Item>
                <Text>
                    Positive feedback: {positivePercentage ? positivePercentage : 0}%
                </Text>
            </Item>
        </TextList>
    </Wrapper>
);

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};