import Graph from 'core/datastructures/graph/graph'
import { MyObj } from 'core/node'

describe('Graph', () => {
    beforeEach(() => {})

    it('starts empty', () => {
        let graph: Graph<number | string> = new Graph<number | string>()
        expect(graph.toString()).toEqual('')
        expect(graph.getAdjList().isEmpty()).toEqual(true)
        expect(graph.getVertices().length === 0).toEqual(true)
    })
})
