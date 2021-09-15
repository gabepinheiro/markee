import { Button } from 'ui/button'

import { ReactComponent as PlusIcon } from 'resources/assets/plus-symbol.svg'

function App () {
  return (
    <>
      <Button>
        <PlusIcon />
        Adicionar arquivo
      </Button>
    </>
  )
}

export { App }
