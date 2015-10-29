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
             //   console.log('ջ�����');
                return false;
            }else{
                st[++top] = item;
                return true;
            }
        };

        stack.Pop = function(next){   //ʹ��item.value����ֵ�Ĵ���
            if(top == -1){
             //   console.log('ջ�գ�����ɾ��');
                return false;
            }else{
                next(st[top--]);
                return true;
            }
        };

        stack.Top = function(next){
          if(top == -1){
             // console.log("ջΪ�գ����ܶ�ȡջ��Ԫ��");
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
