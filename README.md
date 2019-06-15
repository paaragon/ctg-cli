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

## Specify destination file path

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

# Template

Default templates are stored in `templates` folder. To use them, you have to specify the template name when invoking ctg-cli. Available templates are:

- class
- class-ts

## Custom templates

[WIP]

## Templates languaje

By default, ctg-cli assumes that files are JavaScript files. You can change this in your custom template by adding a first line with the extension of the file like this:

```
#!your-extension
// your template
```
