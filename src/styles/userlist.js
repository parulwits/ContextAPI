import styled from 'styled-components';

export const Container = styled.div`
background-color: palevioletred;
`;
export const StyledContainer = styled.div`
padding: 10px;
`;

export const List = styled.div`
max-width: 1200px;
margin: 10px;
display: grid;
grid-gap: 20px;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const Title = styled.div`
font-size: 25px;
margin: 20px;
text-align: center;
`;
