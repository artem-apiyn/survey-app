import styled from "styled-components";

export const OptionItemWrapper = styled.label` 
    cursor: pointer;
    justify-content: space-between;
    padding: 10px;

    &:hover {
        background-color: rgb(242, 242, 242);
    }
`;

export const AnswerOptionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 16px 0;
    max-height: 300px;
    overflow-x: hidden; 
    overflow-y: auto;

`;

export const SkipButtonWrapper = styled.button`
    border: none;
    display: flex;
    margin: auto;
    padding: 16px 8px;
    border-radius: 3px;
    background-color: rgb(var(--bg));
    color: rgba(133, 133, 133, 1);
    cursor: pointer;
    &:hover {
        background-color: rgba(224, 224, 224, 1);
    }
`

export const ProgressContainer = styled.div`
    display: flex;
    padding: 4px;
    margin-top: 30px;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    background-color: #e6e6e6;
    border: 1px solid rgba(var(--border), 1);
    overflow: hidden;
`;

export const ProgressFill = styled.div<{ $percent: number }>`
    height: 100%;
    width: ${({ $percent }) => $percent}%;
    background: repeating-linear-gradient(
        45deg,
        rgba(137, 194, 137, 0.8) 0px,
        rgba(137, 194, 137, 0.8) 17px,
        rgba(137, 194, 137, 1) 17px,
        rgba(137, 194, 137, 1) 34px
    );
    transition: width 0.3s ease;
`;

export const NextButton = styled.button`
    height: 100%;
    &:disabled {
        color: rgba(224, 224, 224, 0.9);
        background-color: rgba(123, 140, 157, 0.9);
        cursor: default;

    }
`;

export const ShareLinkWrapper = styled.button`
    height: 30px;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: white;
    border: none;
    color: #326fffff;
    font-size: 14px;
    cursor: pointer
`
export const RepeatWrapper = styled.button`
  margin-top: 20px;
  height: 30px;
`
export const AnswerTypeWrapper = styled.div`
  gap: 10px;
  padding: 10px 0;
  &::before{
    content: '';
    width: 3px;
    height: 20px;
    background-color: rgba(137, 194, 137, 0.5);
  }
`
export const OptionTypeWrapper = styled.div`
  font-size: 14px;
  color: rgba(var(--border), 0.8);

`