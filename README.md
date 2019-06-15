# ctg-cli
Custom Template Generator: NodeJs cli command to create files from templates.

# Instalation

[WIP]

# Usage

```bash
$ ctg-cli -t <template> <file-name>
```

## Example

```bash
$ ctg-cli -t class foo
```

This will create the following file tree

```
/-
 |_ foo.js
```

And the content of `foo.js` will be

```typescript
export default class Foo {

    constructor() { }
}
```

# File path

You can specify the path of the destination file like this:

 ```bash
 $ ctg-cli -t class <path>/<to>/foo
 ```

This will create the following file tree

```
/-
 |_ path
    |_ to
       |_ foo.js
```