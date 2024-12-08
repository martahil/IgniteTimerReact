import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">I will work on</label>
          <TaskInput 
            id="task" 
            placeholder="Give your project a name" 
          />

          <label htmlFor="">during</label>
          <MinutesAmountInput 
            type="number" 
            id="minutesAmount"  
            placeholder="00" 
          />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          Start
          <Play size={24} />
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}