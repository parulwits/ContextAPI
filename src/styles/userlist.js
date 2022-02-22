import styled from 'styled-components';

export const Container = styled.div`
background-color: palevioletred;
background-size: cover;
min-height: 100vh;
`;
export const StyledContainer = styled.div`
padding: 10px;
`;

export const List = styled.div`
margin: 10px;
display: grid;
grid-gap: 40px;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const Title = styled.div`
font-size: 25px;
margin: 20px;
text-align: center;
`;
