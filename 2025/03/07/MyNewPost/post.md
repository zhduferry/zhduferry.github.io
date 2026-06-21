print("Runoob")
#标识符：变量名、函数名、类名、模块名等，不能以数字开头，不能包含空格、特殊符号、中文等，区分大小写。可以
'''
['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del',
'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda',
'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
'''
#true
'''if True:
    print ("True")
else:
    print ("False")

      if True:
    print ("Answer")
    print ("True")
else:
    print ("Answer")
print ("False")    # 缩进不一致，会导致运行错误'''

      '''total = item_one + 
        item_two + 
        item_three'''
total = ['item_one', 'item_two', 'item_three','item_four', 'item_five']
#数据类型

      # 1. 数字类型：int、float、complex (复数)# 2. 字符串类型：str'''
Python 中的字符串不能改变。
Python 没有单独的字符类型，一个字符就是长度为 1 的字符串。
字符串切片 str[start:end]，其中 start（包含）是切片开始的索引，end（不包含）是切片结束的索引。
字符串的切片可以加上步长参数 step，语法格式如下：str[start:end:step]
'''
word = '字符串'
sentence = "这是一个句子。"
paragraph = """这是一个段落，
可以由多行组成"""

      str = '1234567890'
print(str[0:5])  # 输出字符串的前 5 个字符
print(str[5:10])  # 输出字符串的第 6 个至第 10 个字符
print(str[0:10:2])  # 输出字符串的前 10 个字符，每两个字符取一个
print(str[::2])  # 输出字符串的每两个字符取一个
print(str[::-1])  # 输出字符串的反转
print(str*2)
print(str + "你好")
print("—————————–")
print('hello\nrunoob')      # 使用反斜杠()+n转义特殊字符
print(r'hello\nrunoob')     # 在字符串前面添加一个 r，表示原始字符串，不会发生转义

      '''记住：空行也是程序代码的一部分。'''
#!/usr/bin/python3

      input("\n\n按下 enter 键后退出。")
#以上代码中 ，\n\n 在结果输出前会输出两个新的空行。一旦用户按下 enter 键时，程序将退出。
#同一行显示多条语句 Python 可以在同一行中使用多条语句，语句之间使用分号 ; 分割，以下是一个简单的实例：
import sys; x = 'runoob'; sys.stdout.write(x + '\n')

      '''
多个语句构成代码组
缩进相同的一组语句构成一个代码块，我们称之代码组。
像if、while、def和class这样的复合语句，首行以关键字开始，以冒号( : )结束，该行之后的一行或多行代码构成代码组。
我们将首行及后面的代码组称为一个子句(clause)。
'''
'''if expression :
   suite
elif expression :
   suite
else :
   suite'''

      #print默认输出是换行的，如果要实现不换行需要在变量末尾加上end=""：
#!/usr/bin/python3

      x="a"
y="b"

      # 换行输出print( x )
print( y )

      print('———')

      # 不换行输出print( x, end=" " )
print( y, end=" " )
print()

      '''
import 与 from…import
在 python 用 import 或者 from…import 来导入相应的模块。

      将整个模块(somemodule)导入，格式为： import somemodule

      从某个模块中导入某个函数,格式为： from somemodule import somefunction

      从某个模块中导入多个函数,格式为： from somemodule import firstfunc, secondfunc, thirdfunc

      将某个模块中的全部函数导入，格式为： from somemodule import *
'''
import sys
print('================Python import mode==========================')
print ('命令行参数为:')
for i in sys.argv:
    print (i)
print ('\n python 路径为',sys.path)

      # 导入 sys 模块的 argv,path 成员from sys import argv,path  #  导入特定的成员

      print('================python from import===================================')
print('path:',path) # 因为已经导入path成员，所以此处引用时不需要加sys.path

      # 3. 列表类型：list# 4. 元组类型：tuple# 5. 字典类型：dict# 6. 集合类型：set、frozenset# 7. 布尔类型：bool#bool 是 int 的子类，因此布尔值可以被看作整数来使用，其中 True 等价于 1。

      # 8. 字节类型：bytes# 9. 字节数组类型：bytearray# 10. 内存视图类型：memoryview# 11. None类型：NoneType'''
Python3 基本数据类型
Python 中的变量不需要声明。每个变量在使用前都必须赋值，变量赋值以后该变量才会被创建。
在 Python 中，变量就是变量，它没有类型，我们所说的"类型"是变量所指的内存中对象的类型。
等号（=）用来给变量赋值。
等号（=）运算符左边是一个变量名,等号（=）运算符右边是存储在变量中的值
'''
a = 10  # 整数
b = 3.14  # 浮点数
c = 1 + 5j  # 复数
d = 'Hello, World!'  # 字符串
e = True  # 布尔值
f = None  # 空值

      print(a,b,c,d)

      #多变量赋值
a, b, c = 1, 2, "john"
print(a, b, c)

      #标准数据类型
'''
Number（数字）
String（字符串）
bool（布尔类型）
List（列表）
Tuple（元组）
Set（集合）
Dictionary（字典）
'''
'''
Python3 的六个标准数据类型中：
不可变数据（3 个）：Number（数字）、String（字符串）、Tuple（元组）；
可变数据（3 个）：List（列表）、Dictionary（字典）、Set（集合）。
'''
#此外还有一些高级的数据类型，如: 字节数组类型(bytes)。

      '''

      > 
      > 
      > 
      5 + 4  # 加法
9

      > 
      > 
      4.3 - 2 # 减法
2.3

      > 
      > 
      3 * 7  # 乘法
21

      > 
      > 
      2 / 4  # 除法，得到一个浮点数
0.5

      > 
      > 
      2 // 4 # 除法，得到一个整数
0

      > 
      > 
      17 % 3 # 取余
2

      > 
      > 
      2 ** 5 # 乘方
32
'''
'''
注意: 在 Python 中，所有非零的数字和非空的字符串、列表、元组等数据类型都被视为 True，只有 0、空字符串、空列表、空元组等被视为 False。
因此，在进行布尔类型转换时，需要注意数据类型的真假性。
'''

      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      #列表
'''
1、列表写在方括号之间，元素用逗号隔开。
2、和字符串一样，列表可以被索引和切片。
3、列表可以使用 + 操作符进行拼接。
4、列表中的元素是可以改变的。
'''
#元组
#元组（tuple）与列表类似，不同之处在于元组的元素不能修改。元组写在小括号 () 里，元素之间用逗号隔开。

      #元组中的元素类型也可以不相同
t = (1, 'a', 3.14, True)
print(t)

      '''
构造包含 0 个或 1 个元素的元组比较特殊，所以有一些额外的语法规则：
'''
tup1 = ()    # 空元组
tup2 = (20,) # 一个元素，需要在元素后添加逗号

      ''''
string、list 和 tuple 都属于 sequence（序列）。
sequence 是一种有序集合，可以用索引（index）访问其中的元素。
索引是从 0 开始的整数。
索引可以是正数、负数或切片（slice）。
索引可以是超出序列范围的，但超出范围的索引不会引发错误，而是返回一个特殊值——None。
1、与字符串一样，元组的元素不能修改。
2、元组也可以被索引和切片，方法一样。
3、注意构造包含 0 或 1 个元素的元组的特殊语法规则。
4、元组也可以使用 + 操作符进行拼接。
'''

      #set(集合)
'''
Python 中的集合（Set）是一种无序、可变的数据类型，用于存储唯一的元素。
集合中的元素不会重复，并且可以进行交集、并集、差集等常见的集合操作。
在 Python 中，集合使用大括号 {} 表示，元素之间用逗号 , 分隔。
另外，也可以使用 set() 函数创建集合。
注意：创建一个空集合必须用 set() 而不是 { }，因为 { } 是用来创建一个空字典。
'''

      bro = {'Google', 'Taobao', 'Runoob', 'Facebook', 'Zhihu', 'Baidu'}
print(bro)   # 输出集合，重复的元素被自动去掉

      # 成员测试if 'Runoob' in bro :
    print('Runoob 在集合中')
else :
    print('Runoob 不在集合中')

      # set可以进行集合运算a = set('abracadabra')
b = set('alacazam')

      print(a)  # 输出集合 a 每次输出都无序
print(b)  # 输出集合 b

      #字典 字典（dictionary）是Python中另一个非常有用的内置数据类型。
'''
列表是有序的对象集合，字典是无序的对象集合。两者之间的区别在于：字典当中的元素是通过键来存取的，而不是通过偏移存取。
字典是一种映射类型，字典用 { } 标识，它是一个无序的 键(key) : 值(value) 的集合。
'''
#键(key)必须使用不可变类型。

      #在同一个字典中，键(key)必须是唯一的。

      #!/usr/bin/python3

      dict = {}
dict['one'] = "1 - 菜鸟教程"
dict[2]     = "2 - 菜鸟工具"

      tinydict = {
    'name': 'runoob',
    'code':1,
    'site': 'www.runoob.com'
    }

      print (dict['one'])       # 输出键为 'one' 的值
print (dict[2])           # 输出键为 2 的值
print (tinydict)          # 输出完整的字典
print (tinydict.keys())   # 输出所有键
print (tinydict.values()) # 输出所有值

      '''

      > 
      > 
      > 
      dict([('Runoob', 1), ('Google', 2), ('Taobao', 3)])
{'Runoob': 1, 'Google': 2, 'Taobao': 3}

      > 
      > 
      {x: x**2 for x in (2, 4, 6)}
{2: 4, 4: 16, 6: 36}

      > 
      > 
      dict(Runoob=1, Google=2, Taobao=3)
{'Runoob': 1, 'Google': 2, 'Taobao': 3}
'''
'''
1、字典是一种映射类型，它的元素是键值对。
2、字典的关键字必须为不可变类型，且不能重复。
3、创建空字典使用 { }。
4、通过键可以获取字典中对应的值。
5、通过键可以设置或修改字典中对应的值。
'''