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

export const Title = styled.h1`
    font-size: 50px;
    color: #fff;
    margin-top: 30px;
`;

export const SolverMiddle = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
`;

export const SolverButtons = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 450px;
`;

export const Cell = styled.input`
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 25px;
`;

export const SolveBtn = styled.button`
    width: 200px;
    height: 100px;
    text-align: center;
    font-size: 30px;
`;

export const ClearBtn = styled.button`
    width: 150px;
    height: 75px;
    text-align: center;
    font-size: 30px;
    margin: 50px;
    margin-top: 0px;
`;

export const TimeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 50px;
    margin-top: 0px;
    max-width: 150px;
`;

export const TimeLabel = styled.h1`
    font-size: 25px;
    color: #fff;
`;

export const Time = styled.h1`
    font-size: 25px;
    color: #ccc;
`;