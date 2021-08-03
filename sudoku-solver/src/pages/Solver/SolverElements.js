import styled from 'styled-components'

export const SolverContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    position: relative;
    z-index: 1;
    padding-bottom: 20%;
`;

export const Board = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
`;

export const Cell = styled.input`
    width: 11%;
    height: 11%;
`;