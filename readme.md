# node-consumer

This project is just an example node project that is a consumer of another node module. The point of this node project
is to illustrate how to properly embed *.d.ts ambient module declarations in a node module and a common pitfall many
people run into, including myself, multiple times. :-(

## Run and build

### Correct version

```
git clone git@github.com:adamcarr/node-consumer.git
cd node-consumer
npm install
npm run build
```

### Incorrect version

```
git clone git@github.com:adamcarr/node-consumer.git
cd node-consumer
git fetch
git checkout incorrect
npm install
npm update node-dependency
npm run build
```