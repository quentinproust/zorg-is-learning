import React from 'react'
import Head from 'next/head'
import { Container, Grid, Header, Segment, List, Button, Input, Divider, SegmentGroup, Icon } from 'semantic-ui-react';


const N = ({ value }) => {
  if (value < 10) {
    return <span style={{ fontFamily: 'monospace' }}>&nbsp;{value}</span>;
  }
  return <span style={{ fontFamily: 'monospace' }}>{value}</span>;
};

const Line = ({ line }) => {
  return (
    <List.Item>
      <strong style={{ marginRight: 20 }}>{line.name}</strong>
      <List horizontal>
        {line.values.map((i, index) => {
          //if (index < line.values.length - 1) {
          //  return <><N value={i} /><span> - </span></>;
          //}
          return <List.Item><N value={i} /></List.Item>;
        })}
      </List>
    </List.Item>
  );
};

const Lines = ({ lines }) => {
  return (
    <List>
      {lines.map(line => <Line line={line} />)}
    </List>
  );
};

function getNumbers() {
  return ['A', 'B', 'C', 'D']
    .map(lineName => ({
      name: lineName,
      values: [0, 0, 0, 0, 0].map(_ => Math.floor(Math.random() * 100)),
    }));
}

const NumberExercices = () => {

  const [numberLines, setNumberLines] = React.useState(getNumbers());

  const refreshNewNumbers = () => {
    setNumberLines(getNumbers());
  };

  return (
    <>
      <SegmentGroup>
        <Segment>
          <Header as='h2' color='violet'>Les règles</Header>
          <List ordered textAlign="left">
            <List.Item>Je lis les nombres</List.Item>
            <List.Item>Je dis le nombre qui vient avant</List.Item>
            <List.Item>Je dis le nombre qui vient après</List.Item>
            <List.Item>J'écris les nombres en lettre</List.Item>
            <List.Item>Je décompose</List.Item>
          </List>
        </Segment>
        <Segment>
          <Header as='h2' color='violet'>Les nombres</Header>
          <Lines lines={numberLines} />
        </Segment>
      </SegmentGroup>
      <Button onClick={refreshNewNumbers} color="violet">Nouveaux nombres</Button>
    </>
  );
}

const Home = () => (
  <div>
    <Head>
      <title>Zaira et les mathématiques !</title>
      <link rel='icon' href='/static/favicon.ico' />
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
    </Head>

    <Grid style={{ height: '100vh', paddingTop: 20 }} textAlign="center">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='violet' textAlign='center'>
          <Icon name="child" />
          Zaira et les mathématiques !
        </Header>
        <Container>
          <NumberExercices />
        </Container>
      </Grid.Column>
    </Grid>
  </div>
)

export default Home
