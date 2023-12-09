import React from 'react'
import { parseDiff, Diff, Hunk, RenderToken } from 'react-diff-view'
import 'react-diff-view/style/index.css'
import 'prismjs/themes/prism.css'
import 'prism-color-variables/variables.css'
import 'prism-color-variables/themes/duracula.css'
import './DiffViewer.css'
import { tokenizeHunks } from './utils'

type Props = {
  diffText: string
  oldSource: string
}

const DiffViewer: React.FC<Props> = ({ diffText, oldSource }) => {
  const files = parseDiff(diffText)
  const renderToken: RenderToken = (token, defaultRender, i) => {
    switch (token.type) {
      case 'space':
        console.log(token)
        return (
          <span key={i} className="space">
            {token.children &&
              token.children.map((token, i) =>
                renderToken(token, defaultRender, i),
              )}
          </span>
        )
      default:
        return defaultRender(token, i)
    }
  }
  const hunks = files.flatMap((item) => item.hunks)
  const tokens = React.useMemo(() => tokenizeHunks(hunks, 'js', oldSource), [])

  return (
    <Diff
      viewType="split"
      diffType={'modify'}
      hunks={hunks || []}
      tokens={tokens}
      renderToken={renderToken}
    >
      {(hunks) => hunks.map((hunk) => <Hunk key={hunk.content} hunk={hunk} />)}
    </Diff>
  )
}

export default DiffViewer
