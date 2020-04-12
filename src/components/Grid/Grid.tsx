import React, { FC, useRef, useState, useEffect } from 'react'
import styled from '@emotion/styled'

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`

interface ColumnProps {
  left?: number
  right?: number
  width: number
}

export const Column = styled.div`
  width: ${({ width }: ColumnProps) =>
    width &&
    `calc(((100% - 11 * 30px) / 12) * ${width} + ${width - 1} * 30px);`}

    margin-left: ${({ left }: ColumnProps) =>
      left && `calc(((100% - 11 * 30px) / 12) * ${left} + ${left} * 30px);`}

  &:not(:first-child) {
    margin-left: 30px;
  }
`
