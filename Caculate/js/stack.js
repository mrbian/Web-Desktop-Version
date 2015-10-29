/**
 * Created by bian on 2015/10/29.
 */

var Stack = {
    createNew:function(size){
        var stack = {};
        var maxSize = size;
        var top = -1;
        var st = [];

        stack.Push = function(item){
            if(top == maxSize - 1){
             //   console.log('栈满溢出');
                return false;
            }else{
                st[++top] = item;
                return true;
            }
        };

        stack.Pop = function(next){   //使用item.value进行值的传递
            if(top == -1){
             //   console.log('栈空，不能删除');
                return false;
            }else{
                next(st[top--]);
                return true;
            }
        };

        stack.Top = function(next){
          if(top == -1){
             // console.log("栈为空，不能读取栈顶元素");
              return false;
          }else{
              next(st[top]);
              return true;
          }
        };

        stack.Clear = function(){
            top = -1;
        };

        stack.isEmpty = function(){
            if(top == -1){
                return true;
            }
            return false;
        };
        return stack;
    }
};
