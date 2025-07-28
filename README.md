# PickTerm React Component

Renders text with accented(highlighted) terms.

## Usage
```ts
...
import PickTerm, { PickTerm, PickTermProps } from 'react-pick-term'

const text = 'Čáry máry nech máme 3 dary a 2 zlaté čiary.'

return <PickTerm term="áRy" text={text} />
...

======================================================

<>Č<span class="accent">áry</span> m<span class="accent">áry</span> nech máme 3 d<span class="accent">ary</span> a 2 zlaté či<span class="accent">ary</span>.<>
```

## Installation
```sh
bun i react-pick-term
```

## Package development

### Installation
```sh
bun i
```

### Playbook
```sh
bun run create
```
and set [Props](src/PickTerm.tsx#L15) into [PickTerm.client.tsx](playbook/PickTerm.client.tsx#L10)
