import React from "react"
import { default as Header } from '@/components/organisms/Header'
import { Graph } from '@/components/organisms/Graph/';

export default function Layout() {
  return (
    <>
      <Header /> {/* header */}
      <Graph /> {/* グラフ */}
    </>
  )
}