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

export const SolverInfo = styled.p`
    margin-top: 50px;
    color: white;
    font-size: 20px;
    width: 600px;
`;

export const SolverMiddle = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
    border-left: ${({col}) => col%3===0 ? '4px solid black' : '1px solid #333'};
    border-top: ${({row}) => row%3===0 ? '4px solid black' : '1px solid #333'};
    border-bottom: ${({row}) => row===8 ? '4px solid black' : '1px solid #333'};
    border-right: ${({col}) => col===8 ? '4px solid black' : '1px solid #333'};

    &:focus {
        outline: 0;
    }
`;

export const SolveBtn = styled.button`
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

export const LoadingImg = styled.img`
    width: ${({display}) => display ? '200px' : '0px'};
    margin: 125px;
    position: absolute;
`;