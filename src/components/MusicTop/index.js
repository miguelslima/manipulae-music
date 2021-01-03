import React from 'react'
import MusicCard from '../MusicCard'
import { Container, Title } from './styles'

export default function MusicTop() {
  return (
    <Container>
      <Title>Músicas Top no Deezer</Title>

      <MusicCard />
    </Container>
  )
}
