#!/usr/bin/env coffee

> @w5/read
  into-stream:intoStream
  stream/promises > pipeline
  @w5/uridir
  @w5/walk > walkRel
  path > dirname join
  fs > createWriteStream

DIR = uridir(import.meta)
ROOT = dirname DIR
SRC = join ROOT,'src'

await pipeline(
  intoStream do ->
    for await i from walkRel(
      SRC
      (i)=>
        i=='styl'
    )
      if i.endsWith('.svelte')
        yield "import './#{i}';\n"
    #yield await read join(SRC,'mod.js')
  createWriteStream join SRC,'index.js'
)

