import './App.css'
import { Flex, Text, Button } from "@radix-ui/themes";

function App() {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5f5f5",
        padding: "1rem",
      }}
    >
      <Text size="4" weight="bold">
        Hello from Radix Themes :)
      </Text>
      <Button onClick={() => alert('Let’s go!')} color="violet">Let's go</Button>
    </Flex>
  );
}

export default App;
