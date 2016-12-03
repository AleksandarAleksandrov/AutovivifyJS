#Autovivification for javaScript using Proxy objects

After creating an object using Autovivify you can use it as :

```javascript
    let obj = Autovivify();

    obj.test.test = "Test";
    obj.uses.proxy.arr = ["Proxy"];
    obj.uses.proxy.for.autovivification = { autovivify: "for the win"};
```

This creates an object with properties which are proxy objects which point to
the correct variable. The code above creates an object which can be used as if
you created the object:

```javascript
    let obj = {
      test: {
        test: "Test"
      },
      uses: {
        proxy : {
          arr: ["Proxy"],
          for: {
            autovivification : {
              autovivify: "for the win"
            }
          }
        }
      }
    }
```
