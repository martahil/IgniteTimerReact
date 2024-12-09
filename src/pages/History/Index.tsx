import { HistoryContainer, HistoryList } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>My history</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Read "A Song of Ice and Fire"</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Work on Project C</td>
              <td>50 minutes</td>
              <td>1 month ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Get a quote for a new air conditioner for the house</td>
              <td>30 minutes</td>
              <td>1 month ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Clean the kitchen</td>
              <td>40 minutes</td>
              <td>2 month ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Play with the dog</td>
              <td>20 minutes</td>
              <td>3 month ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Write the script for project F</td>
              <td>30 minutes</td>
              <td>1 month ago</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}