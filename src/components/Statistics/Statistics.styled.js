import styled from 'styled-components';

export const Wrapper = styled.div`
display: grid;
place-content: center;
`;

export const Title = styled.h2`
font-size: 37px;
`;

export const ButtonList = styled.ul`
gap: 10px;
display: flex;
list-style: none;
`;

export const Button = styled.button`
background-color: ${props => props.theme.colors.white};
font-size: 22px;
font-weight: ${props => props.theme.fontWeights.bold};
padding: ${props => props.theme.space[3]}px;
border-radius: ${props => props.theme.radii.big};
border: ${props => props.theme.borders.normal} #d8d8d8;
cursor: pointer;
:hover {
color: ${props => props.theme.colors.white};
background-color: ${props => props.theme.colors.white};
}
`;

export const TextList = styled.ul`
list-style: none;
`;

export const Text = styled.p`
font-size: 20px;
font-weight: ${props => props.theme.fontWeights.semiBold};
`;

export const Item = styled.li``;