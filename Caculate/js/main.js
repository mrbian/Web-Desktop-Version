/**
 * Created by bian on 2015/10/29.
 */
var stack = Stack.createNew();
var a = 0, b,c;
stack.Push(a);
stack.Top(function(data){
    b = data;
});
stack.Pop(function(data){
    c = data;
});

var s = "1+9*(5-2)";
var exp = s.split("");

var stack1 = Stack.createNew(20);

function compare(a,b){
    switch(a){
        case '+':
            if(b == '*' || b == '/'){
                return '<';
            }else{
                return '=';
            }
            break;
        case '-':
            if(b == '*' || b == '/'){
                return '<';
            }else{
                return '=';
            }
            break;
        case '*':
            if(b == '+' || b == '-'){
                return '>';
            }else{
                return '=';
            }
            break;
        case '/':
            if(b == '+' || b == '-'){
                return '>';
            }else{
                return '=';
            }
            break;
    }
}

function translate(exp){
    var i = 0;
    var x;
    var pfexp="";
    while(exp[i]){
        if(Number(exp[i])){      //ÅÐ¶ÏÊÇ²»ÊÇÊý
           pfexp = pfexp + exp[i];
           i++;
        }else{
          // pfexp = pfexp + " ";
           if(exp[i] == '('){   //ÅÐ¶Ï¿ªÀ¨ºÅ
               stack1.Push(exp[i]);
               i++;
           }else if(exp[i] == ')'){     //ÅÐ¶Ï±ÕÀ¨ºÅ
               if(stack1.isEmpty()){
                   stack1.Clear();
                   return false;
               }else{
                   if(!stack1.Pop(function(data){
                       x = data;
                   })){
                       stack1.Clear();
                       return false;
                   }
                   while(x !== '('){
                       pfexp = pfexp + x;
                       if(!stack1.Pop(function(data){
                            x = data;
                       })){
                           stack1.Clear();
                           return false;
                       }
                   }
               }
               i++;
           }else{        //ÅÐ¶ÏÔËËã·û
               while((stack1.Top(function(data){ x = data; })  && compare(exp[i],x) == '<')) {
                   stack1.Pop(function (data) {
                       x = data;
                   });
                   pfexp = pfexp + x;
               }
               stack1.Push(exp[i]);
               i++;
           }
        }
    }
    while(stack1.Pop(function(data){ x = data; })){
        if(x !== '(')
        pfexp = pfexp + x;
        else{
            stack1.Clear();
            return false;
        }
    }
    return pfexp;
}


console.log(translate('54+66'));

var stack2 = Stack.createNew(20);

function cal(n1,n2,e){
    n1 = Number(n1);
    n2 = Number(n2);
    switch (e){
        case '+':
            return n1 + n2;
        break;
        case '-':
            return n1 - n2;
        break;
        case '*':
            return n1 * n2;
        break;
        case '/':
            return n1 / n2;
    }
}

function caculate(pfexp){
    pfexp = pfexp.split("");
    var i = 0;
    var n1,n2;
    while(pfexp[i]){
        if(Number(pfexp[i])){
            stack2.Push(pfexp[i]);
            i++;
        }else{
            stack2.Pop(function(data){
                n1 = data;
            });
            stack2.Pop(function(data){
                n2 = data;
            });
            stack2.Push(cal(n2,n1,pfexp[i]));
            i++;
        }
    }
    stack2.Top(function(data){
        x = data;
    });
    return x;
}

console.log(caculate(translate(exp)));