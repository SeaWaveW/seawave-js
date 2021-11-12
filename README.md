# seawave-js

## throttle
```
throttle(ff,2000)
```

## debounce
```
debounce(ff,2000)
```

## hump
```
const test1 = 'a-b' => hump(test1,'-') => AB
const test2 = 'aB' => hump(test1,'-') => 'a-b'
```

## allEmpty
```
const test1 = {} => allEmpty(test1) => true
const test2 = {a:''} => allEmpty(test2) => true
const test3 = {a:'1'} => allEmpty(test3) => false
```

## deepClone
```
const test = { a:1 }
const newObj = deepClone(test) => newObj !== test
```

## sort
```
sote([1,5,3],true) => [1,3,5]
sote([1,5,3],false) => [5,3,1]
```

## intersection
```
const arr1 = [1,3,2,0]
const arr2 = [8,2,1,5]
intersection(arr1,arr2) => [1,2]
```

## polling
```
polling.start('a',1000,10,function)
polling.end('a')
```
