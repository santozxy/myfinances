import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    display: flex;
    flex-direction: column;
    flex:1;
    gap: 30px;
    height: 100%;
    background-color: ${props => props.theme.colors.secondary};
    justify-content: center;
    align-items: center;
`
