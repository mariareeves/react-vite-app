import './App.css';
import { Table, Container, TabNav } from "@radix-ui/themes";
// import { PlusCircledIcon, TrashIcon } from "@radix-ui/react-icons"
import data from '../src/data.json';

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

};

const calculateDuration = (start: string, finish: string) => {
  const startTime = new Date(start).getTime();
  const finishTime = new Date(finish).getTime();
  const durationSeconds = Math.floor((finishTime - startTime) / 1000);

  const minutes = Math.floor(durationSeconds / 60);
  const seconds = durationSeconds % 60;

  return `${minutes}m ${seconds}s`;
};



const App: React.FC = () => {

  return (
    <div className='app-container'>
      <TabNav.Root size="2" justify="end" color="green">
        <TabNav.Link href="#" active>
          Account
        </TabNav.Link>
        <TabNav.Link href="#">Documents</TabNav.Link>
        <TabNav.Link href="#">Settings</TabNav.Link>
      </TabNav.Root>
      <Container align="center">
        {/* Table Component */}
        <Table.Root mt="4" variant="surface">
          <Table.Header style={{ backgroundColor: 'var(--green-9)' }}>
            <Table.Row>
              <Table.ColumnHeaderCell>Filaname</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Size</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Upload Start</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Upload FInish</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Duration</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>File Type</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body style={{ backgroundColor: 'var(--green-2)' }}>
            {data.map((item) => (
              <Table.Row key={item.id}>
                <Table.RowHeaderCell>{item.filename}</Table.RowHeaderCell>
                <Table.Cell>{item.fileSize}</Table.Cell>
                <Table.Cell>{formatDate(item.uploadStart)}</Table.Cell>
                <Table.Cell>{formatDate(item.uploadFinish)}</Table.Cell>
                <Table.Cell>{calculateDuration(item.uploadStart, item.uploadFinish)}</Table.Cell>
                <Table.Cell>{item.fileExtension}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Container>
    </div>

  );
};



export default App;
