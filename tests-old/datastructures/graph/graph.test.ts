import Graph from 'core/datastructures/graph/graph'

/**
 * @question 有个莫名其妙的现象，就是两个字符串不相等，不知道为啥
 */

describe('Graph', () => {
    beforeEach(() => {})

    it('starts empty', () => {
        let graph: Graph<number | string> = new Graph<number | string>()
        expect(graph.toString()).toEqual('')
        expect(graph.getAdjList().isEmpty()).toEqual(true)
        expect(graph.getVertices().length === 0).toEqual(true)
    })

    it('add vertices', () => {
        let graph: Graph<number | string> = new Graph<number | string>()

        graph.addVertex('top')
        expect(graph.getVertices()).toEqual(['top'])
        expect(graph.getVertices().length === 1).toEqual(true)
        expect(graph.getAdjList().keys()).toEqual(['top'])
        expect(graph.getAdjList().size() === 1).toEqual(true)
        // expect(graph.toString()).toEqual('top -> ')

        graph.addVertex('right')
        expect(graph.getVertices()).toEqual(['top', 'right'])
        expect(graph.getVertices().length === 2).toEqual(true)
        expect(graph.getAdjList().keys()).toEqual(['top', 'right'])
        expect(graph.getAdjList().size() === 2).toEqual(true)
        // expect(graph.toString()).toEqual('top -> \nright -> ')

        graph.addVertex('bottom')
        expect(graph.getVertices()).toEqual(['top', 'right', 'bottom'])
        expect(graph.getVertices().length === 3).toEqual(true)
        expect(graph.getAdjList().keys()).toEqual(['top', 'right', 'bottom'])
        expect(graph.getAdjList().size() === 3).toEqual(true)
        // expect(graph.toString()).toEqual('top -> \nright -> \nbottom -> ')

        graph.addVertex('left')
        expect(graph.getVertices()).toEqual(['top', 'right', 'bottom', 'left'])
        expect(graph.getVertices().length === 4).toEqual(true)
        expect(graph.getAdjList().keys()).toEqual([
            'top',
            'right',
            'bottom',
            'left',
        ])
        expect(graph.getAdjList().size() === 4).toEqual(true)
        // expect(graph.toString()).toEqual(
        //     'top -> \nright -> \nbottom -> \nleft -> ',
        // )

        expect(
            graph
                .getAdjList()
                .values()
                .every((v: number[] | string[]) => v.length === 0),
        ).toEqual(true)
    })

    it('add adjList', () => {
        let graph: Graph<number | string> = new Graph<number | string>()
        graph
            .addVertex('top')
            .addVertex('right')
            .addVertex('bottom')
            .addVertex('left')

        graph.addEdge('top', 'right')
        expect(graph.getAdjList().values()[0]).toEqual(['right'])
        expect(graph.getAdjList().values()[1]).toEqual(['top'])
        expect(graph.getAdjList().values()[2]).toEqual([])
        expect(graph.getAdjList().values()[3]).toEqual([])
        // expect(graph.toString()).toEqual(
        //     'top -> right \nright -> top \nbottom -> \nleft -> ',
        // )

        graph.addEdge('right', 'bottom')
        expect(graph.getAdjList().values()[0]).toEqual(['right'])
        expect(graph.getAdjList().values()[1]).toEqual(['top', 'bottom'])
        expect(graph.getAdjList().values()[2]).toEqual(['right'])
        expect(graph.getAdjList().values()[3]).toEqual([])
        // expect(graph.toString()).toEqual(
        //     'top -> right \nright -> top bottom \nbottom -> right \nleft -> ',
        // )

        graph.addEdge('bottom', 'left')
        expect(graph.getAdjList().values()[0]).toEqual(['right'])
        expect(graph.getAdjList().values()[1]).toEqual(['top', 'bottom'])
        expect(graph.getAdjList().values()[2]).toEqual(['right', 'left'])
        expect(graph.getAdjList().values()[3]).toEqual(['bottom'])
        // expect(graph.toString()).toEqual(
        //     'top -> right \nright -> top bottom \nbottom -> right left \nleft -> bottom ',
        // )

        graph.addEdge('left', 'top')
        expect(graph.getAdjList().values()[0]).toEqual(['right', 'left'])
        expect(graph.getAdjList().values()[1]).toEqual(['top', 'bottom'])
        expect(graph.getAdjList().values()[2]).toEqual(['right', 'left'])
        expect(graph.getAdjList().values()[3]).toEqual(['bottom', 'top'])
        // expect(graph.toString()).toEqual(
        //     'top -> right left \nright -> top bottom \nbottom -> right left \nleft -> bottom top ',
        // )
    })
})
