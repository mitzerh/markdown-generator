# Markdown Generator

A Markdown parser/server using GitHub styles.

Forked/Credit: [https://github.com/jbt/markdown-editor](https://github.com/jbt/markdown-editor)

Running example at:

* Edit Mode: [https://www.hmabesa.com/misc/markdown/editor/edit.html](https://www.hmabesa.com/misc/markdown/editor/edit.html)
* View Mode: [https://www.hmabesa.com/misc/markdown/editor/](https://www.hmabesa.com/misc/markdown/editor/#bVNBbtswELzzFVs4gO3GltpremqTpgkQA0WTnoICoUVSpC1yBXJlJyn69y4pw84hgAnJ5HBmd2Y1gdkPRzfDenndyR1GreawknGrcB/gu3KEUYhvMrkGhqTN0IHRkoaooXOJLoSAj3BJsTu/hxouveInISS500BWg3GdPkGsM3QCHv4xvLGISR8vynQqASPcPKzuMsdVlC3IoEBF7EEWbnCBb1kdy+0OpQJHGXydDxsMpAMlkHyeqfk0lLp+/7qDhPCCAzQyQLIZkQmTEOJ26iEgtIgKJME+OnKhZQLfM2mdcZ2OQPqZFpmlxYJhCfSabMYycUy6M5UQd4jbBZeb/fpQ/DKI+bGWcXy8CvGV28pdTFMh4cqV/gAX55/Z4aenp43cydRE15M4m5khNOQwzOZ/BcDZbKrcbjqvLPluNr0F6VmMt6rp/Iv4x4vvC/FgXQL+PWKAMfA/M0vUp4u6bh3ZYV016OvNmmp/8H6pS/zz3GKnCbisbcA9OAO3U45p/Slus6NUSt7n8rld8ZPTSTmNVazgCnFdMsvyj7krGFlHdRb3UTGmiPcRN7qhVGfcQb2eL8BE9LC3rrEiZ+dC6l2U2YIsw4anRdEozll+ewGXo/Kc/QjjTIhBjfS5xMlkAvc0GJNHWmUOL7e6EI0D/Xi0wNG7Nr05f/s+52jjaXZ7GRMPQ2G85JZWLsY3necufdmqgqZ6vJwblHtdWkkvXP/z0rrWdryIax1NKYzH7WqTjpwJDe15lr0MTjapwtiWvfqIrnU4SI30cDzJc8ufBw7UD1QmENYdNttU5DZpqbTpJOl3HVEybLGVrj7hRpX21fV9pkYDSpI82s1zY3ixIn+MSfwH)


## Running a local Service

You can run a local service by setting this up:

**Install globally:**

```bash
npm install -g git+ssh@github.com:mitzerh/markdown-generator.git
```

**Run the server:**

```bash
# default port is 9500
mdserver start

# run on a different port:
mdserver start --port=9999
```

## Node Dependency Install

Installing as a dependency in your node project.

```bash
npm install git+ssh@github.com:mitzerh/markdown-generator.git
```

**Generate a hash of the markdown string:**

```js
var markdown = require("markdown-editor");

// example markdown string
var sample = "# Example Markdown";
// generates a hash, that you can then pass to the markdown hosted service
var hash = markdown.parseString(sample);

// link to the editor
console.log("http://node.tpa.foxnews.com/markdown/editor/#" + hash);
```

**Generate a hash of a markdown file:**

```js
var markdown = require("markdown-editor"),
	hash = markdown.parseFile("/path/to/markdown/file.md");

// link to the editor
console.log("http://node.tpa.foxnews.com/markdown/editor/#" + hash);
```
