import styled from 'styled-components';

export const StyledContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;
background-color: #f8f9fd;
`;

export const Form = styled.div`
width: 50vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: white;
padding: 2rem;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Title = styled.div`
font-size: 25px;
margin-bottom: 20px;
`;

export const InputContainer = styled.div`
width: 40vh;
display: flex;
flex-direction: column;
gap: 8px;
margin: 10px;
`;

export const Input = styled.input`
height: 25px;
border: 1px solid rgba(0, 0, 0, 0.2);
`;


export const Error = styled.div`
color: red;
font-size: 12px;
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
.button_submit{
    margin-top: 10px;
    font-size: 15px;
    background: #01d28e;
    border: 1px solid #01d28e;
    color: #fff;
    padding: 10px 20px;
}
`;
