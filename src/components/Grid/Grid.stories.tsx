import * as React from 'react'
import styled from '@emotion/styled'

import { storiesOf } from '@storybook/react'

import { Grid, Column as ColumnSyled, Row } from './Grid'

const Column = styled(ColumnSyled)`
  background-color: #fee5e5;
  height: 200px;
`

storiesOf('Grid', module).add('default', () => (
  <Grid>
    <Row>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
    </Row>
    <Row>
      <Column width={2}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
    </Row>
    <Row>
      <Column width={3}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
      <Column width={1}></Column>
    </Row>
    <Row>
      <Column width={3}></Column>
      <Column width={3}></Column>
      <Column width={6}></Column>
    </Row>
  </Grid>
))
