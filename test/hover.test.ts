import { runTests } from './utils.js'
import { fromHover, toHover } from '../index.js'

runTests(fromHover, toHover)(
  {
    lsp: {
      range: {
        start: { line: 0, character: 10 },
        end: { line: 2, character: 20 }
      },
      contents: { kind: 'markdown', value: 'This is markdown' }
    },
    monaco: {
      range: {
        startLineNumber: 1,
        startColumn: 11,
        endLineNumber: 3,
        endColumn: 21
      },
      contents: [{ value: 'This is markdown' }]
    }
  },
  {
    lsp: {
      range: undefined,
      contents: { kind: 'markdown', value: 'This is markdown' }
    },
    monaco: {
      range: undefined,
      contents: [{ value: 'This is markdown' }]
    }
  }
)