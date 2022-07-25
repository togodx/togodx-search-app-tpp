import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';
import Styled from 'styled-components';
import { SearchBar } from "@/components/molecules/SearchBar";
import {NavigationPane} from './NavigationPane';
import Dashboard from './dashboard';

const StyledGraph = Styled.div`
  background: -moz-linear-gradient(top, #EAF2ED, #FFF);
  background: -webkit-linear-gradient(top, #EAF2ED, #FFF);
  background: linear-gradient(to bottom, #EAF2ED, #FFF);
  width: 73%;
  max-height: 600px;
  min-width: calc(100% - 345px);
  padding-top: 50px;
  overflow: hidden;
`;

const SWrapper = Styled.div`
  // padding-top: 10px;
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Graph = () => {
  const [jsonActiveId, setJsonActiveId] = useState(null);
  const [nodeLabelShow, setNodeLabelShow] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const [jsonData, setJsonData] = useState(null);
  const [hits, setHits] = useState([]);
  const [graph, setGraph] = useState(null);
  const [pairs, setPairs] = useState(null);
  const [datasets, setDatasets] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [counts, setCounts] = useState(null);


  async function fetchHits(searchWord) {
    const url = 'https://tpp-api.il3c.com'
    const response = await fetch(url + `?q=${searchWord}`)
    const result = await response.json()
    return (result)
  }

  const ref = React.useRef(null);
  // attributes.json
  useEffect(() => {
    (async () => {
      const response = await fetch('https://raw.githubusercontent.com/togodx/togodx-config-tpp/main/config/attributes.json')
      const jsonData = await response.json()
      setDatasets(jsonData.datasets)
      setAttributes(jsonData.attributes)
      setJsonData(jsonData)
    })();
  }, []);

  // attributesCount.json
  useEffect(() => {
    (async () => {
      const response = await fetch('/attributesCount.json')
      const jsonData = await response.json()
      setCounts(jsonData)
    })();
  }, []);


  useEffect(() => {
    if (!graph && jsonData && counts) {

      // Enhancement active-node
      G6.registerBehavior('activate-node', {
        getEvents() {
          return {
            'node:click': 'onNodeClick',
          }
        },
        onNodeClick(e) {
          setJsonActiveId(e.item._cfg.id)
          setNodeLabelShow(true)
        },
      })

      // Display graph
      // ReactDOM.findDOMNodeが古い書き方らしく、書き換えたい
      // eslint-disable-next-line
      const container = ReactDOM.findDOMNode(ref.current)
      const graph = new G6.Graph({
          container,
          width: container.scrollwidth,
          height: 1000,
          modes: {
            default: [
              // 'drag-node',
              'click-select',
              'activate-node',
              'drag-canvas',
              'activate-edge',
              {
                // zoom
                // TODO: ボタンで操作できるようにしたい
                type: 'zoom-canvas',
              }
            ],
          },
          layout: {
            type: 'dagre',
            nodesep: 30,
            ranksep: 15
          },
          defaultNode: {
            type: 'ellipse',
            size: [130, 80],
            labelCfg: {
              positions: 'center',
              style: {
                fontSize: 18,
                color: '#999999',
                fontFamily: '"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", sans-serif',
              }
            }
          },
          defaultEdge: {
            labelCfg: {
              style: {
                fontSize: 22,
                color: '#999999',
                fontFamily: '"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", sans-serif',
              }
            },
          },
          nodeStateStyles: {
            selected: {
              stroke: '#34A9B9',
              fill: '#E3FEFF',
              lineWidth: 1,
            },
          }
        });

      const Nodes = []
      const Edges = []

      // edges
      Edges[0] = {
        source: 'chebi',
        target: 'knapsack',
      }
      Edges[1] = {
        source: 'chebi',
        target: 'biosample',
      }
      Edges[2] = {
        source: 'chebi',
        target: 'taxonomy',
      }
      Edges[3] = {
        source: 'knapsack',
        target: 'biosample',
      }
      Edges[4] = {
        source: 'knapsack',
        target: 'taxonomy',
      }
      Edges[5] = {
        source: 'biosample',
        target: 'taxonomy',
      }

      Object.keys(datasets).forEach(key => {
        Nodes[Nodes.length] = {
          id: key,
          label: datasets[key].label,
          tag: 'dataset',
        }
      })

      Object.keys(attributes).forEach(key => {
        Nodes[Nodes.length] = {
          id: key,
          label: attributes[key].label,
          tag: 'attribute',
        }
        if (attributes[key].dataset in datasets) {
          let edgeLabel = ''
          const result = counts.find(e => (key in e))
          if (result) {
            edgeLabel = result[key]
          }
          Edges[Edges.length] = {
            label: edgeLabel,
            source: key,
            target: attributes[key].dataset
          }
        }
      })

      const data = {
        nodes: Nodes,
        edges: Edges,
      }

      data.nodes.forEach((i) => {
        i.style = Object.assign(i.style || {}, {
          fill: i.tag == 'attribute' ? 'white' : '#EAF2ED',
          stroke: i.tag == 'attribute' ? '#5F9873' : '#0DBE4B',
          lineWidth: 3,
        });
      });
      data.edges.forEach((i) => {
        i.style = Object.assign(i.style || {}, {
          lineWidth: 3,
        });
      });
      graph.data(data)
      graph.render()
      graph.zoom(0.7, { x: 100, y: 100 })
      setGraph(graph)
    }
  }, [jsonData, counts, jsonData]);

  useEffect(() => {
    if (hits.length !== 0) {
      // 重複を削除した'_index'のみの配列
      const index_arr = Array.from(new Set(hits.map(item => item['_index'])))

      const _pairs = []
      graph.emit('canvas:click')
      index_arr.forEach(index => {
        const found = hits.find(item => item['_index'] == index)
        const filterd = hits.filter(item => item['_index'] == index)

        // dataset of attribute
        const type = index.split('-')[index.split('-').length - 1]
        if (graph) {
          if (type == 'dataset') {
            const node = graph.findById(found._source.type);
            graph.emit('node:click', { item: node, from: 'hit', newLabel: `${filterd.length}(${filterd.length})` })
          } else if (type == 'attribute') {
            const node = graph.findById(found._source.type);
            graph.emit('keydown', { key: 'shift' });
            graph.emit('node:click', { item: node, from: 'hit', newLabel: `${filterd.length}(${filterd.length})`},)
            _pairs.push({
              source: jsonData.attributes[found._source.type].dataset,
              target: jsonData.attributes[found._source.type].label,
              list: filterd,
              hitNumber: filterd.length,
            })
          }
        }
      })
      setPairs(_pairs)
      setNodeLabelShow(false)
    } else if (hits.length) {
      console.log('not found')
    }
  }, [hits]);

  useEffect(() => {
    (async () => {
      if (searchWord) {
        const res = await fetchHits(searchWord)
        setHits(res.hits)
      }
    })();
  }, [searchWord]);

  return <>
    <SWrapper>
      <SearchBar setSearchWord={setSearchWord}/>
      <StyledGraph
        ref={ref}
        id="graph-root"
      />
      <NavigationPane
        id={jsonActiveId}
        show={nodeLabelShow}
        datasets={datasets}
        attributes={attributes}
      />
    </SWrapper>
    <Dashboard
      pairs={pairs}
    />
  </>;
};
