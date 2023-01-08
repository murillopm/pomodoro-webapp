import styled from 'styled-components'

export const TimerWrapper = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 50%;
  border: 10px solid ${(props) => props.theme.backgroundRed};

  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 5rem;
  }
`

interface StartButtonProps {
  hasStarted: boolean
}

export const StartButton = styled.button<StartButtonProps>`
  margin: 20px 0 0;
  border: 0;
  cursor: pointer;
  background: #0ea5e9;
  text-transform: uppercase;
  font-size: 1.375rem;
  font-weight: bold;
  color: ${(props) => props.theme.backgroundSlate};
  width: 200px;
  height: 55px;
  border-radius: 6px;
  box-shadow: ${(props) => (!props.hasStarted ? '0 6px 0 0 #0284c7;' : '')};
  transform: ${(props) => (props.hasStarted ? 'translateY(6px)' : '')};
`
