# C#学习笔记

# 一、C#特性

## 1.c#访问修饰符

 **using + namespace (命名空间)**

 * *访问修饰符：指定了类及其成员的访问规则* 
 * **类的默认访问修饰符是：internal**
 * **成员的默认访问修饰符是：private**

* public:公有的，能在任意程序集类中和类外访问

 * protected:受保护的，能在任意程序集的类中和子类中访问

 * private:私有的，只能在类中访问

 * internal:只能在当前程序集中的类中和类外访问

 * protected internal: == protected or internal :既可以在任意程序集中的类中和子类中访问，也可以在当前程序集中的类中和类外访问

### 1.1程序集

    * 程序集的数据可以分为：类型元数据，程序元数据，IL代码，资源
    
    * 元数据：一般指的描述自身的数据
    
    * 类型元数据：记录了程序集引用了哪些类，用户自定义了哪些类，字段，属性，数据类型等一系列信息
    
    * 程序元数据：包含了程序集的版本信息，安全信息，签名(函数名)等
    
    * IL代码：MSIL(微软中间代码Micsosf intermediate language),
    
    * C#->IL代码-》保存到程序集中，在被CLR(Common Language Runtime)加载-》由JIT(just in time)编译器(AOT?)-》调用BCL->转换成机器代码运行在CPU上
    
    * 资源：图片，音频，视频等

### 1.2GC(垃圾回收机制)

GC的全称是garbage [collection](https://so.csdn.net/so/search?q=collection&spm=1001.2101.3001.7020)，中文名称垃圾回收，是.net中对内存管理的一种功能。垃圾回收器跟踪并回收托管内存中分配的对象，定期执行垃圾回收以回收分配给没有有效引用的对象的内存。当使用可用内存不能满足内存请求时，GC会***\*自动\****进行

对象代龄

CLR初始化后的第一批被创建的对象被列为0代对象。CLR会为0代对象设定一个容量限制，当创建的对象大小超过这个设定的容量上限时，GC就会开始工作，工作的范围是0代对象所处的内存区域，然后开始搜寻垃圾对象，并释放内存。当GC工作结束后，幸存的对象将被列为第1代对象而保留在第1代对象的区域内。此后新创建的对象将被列为新的一批0代对象，直到0代的内存区域再次被填满，然后会针对0代对象区域进行新一轮的垃圾收集，之后这些0代对象又会列为第1代对象，并入第1代区域内。第1代区域起初也会被设上一个容量限制值，等到第1代对象大小超过了这个限制之后，GC就会扩大战场，对第1代区域也做一次垃圾收集，之后，又一次幸存下来的对象将会提升一个代龄，成为第2代对象。

## 2.类的三大特性(封装继承多态)

### 2.1封装

#### 2.1.1值类型与引用类型

1.在C#中值类型变量是直接存储数据（int,byte,short,long,float,double,char,bool,struct）,值类型变量声明后，不管是否赋值，编译器都会为其分配内存

2.引用类型的变**量持有数据的引用**，数据实际是存储在堆区（class,string）哪些类型是引用类型呢？**其实一个可以称为”类“的类型都是引用类型**。 引用类型总是从**托管堆**上分配的，常用的语法就是New XX(). C#的new 操作符会返回对象的指针 - 也就是指向对象数据的内存地址的一个引用。引用类型的传递其实传递的是对象的指针（***string类型比较特殊***），所以在特定的场景下性能是高于值类型的。一个引用类型在创建时默认为null，也就是说当前变量不指向一个有效的对象，也就是我们常遇到的异常“未将对象引用设置到对象的实例”。

3.当声明一个类时，只在栈中分配一小块内存用于存储地址，而此时并没有为其分配堆区的内存，当使用new创建对象时，才分配内存空间，并且将堆上的内存地址保存到在栈区中分配的小块地址中         

* 总结：
 * 1.值类型的数据存储在栈区，引用类型的数据是存储在堆区
 * 2.值类型存取速度快，引用类型存取速度慢
 * 3.值类型表示的是实际的数据，引用类型表示指向存储在堆区的地址
 * 4.值类型继承自System.ValueType,引用类型继承自System.Object
 * 5.值类型的内存是自动释放，引用类型的内存是通过GC释放

![值类型与引用类型详解](D:/资料文件/C%23编程资料/资源文件/值类型与引用类型详解.jpg)

#### 2.1.2字段与属性

属性是类，结构体以及接口的命名成员，类或结构中成员变量或方法称为域，属性是域的扩展

```c#
//主函数类
class Program
    {
        static void Main(string[] args)
        {
            int value = 0;//值类型
            Box box = new Box();//引用类型
            box.Length = 5;
            Console.WriteLine("length:" + box.Length);
            box.Height = 20;
            Console.WriteLine("height:" + box.Height);
        }

    }
//box类体现封装和属性定义
class Box
    {
    	//成员
        private int length;
    
    	//属性(首字母大写)
        public int Length
        {
            get { return length; }
            set { length = value; }
        }
        public int Height { get; set; }
        private int width=10;
        public int GetWidth()
        {
            return width;
        }
    	//无参构造
        public Box()
        {

        }
    	//有参构造
        public Box(int width)
        {
            this.width = width;
        }
    	//析构函数
        ~Box()//不需要添加访问修饰符
        {
            Console.WriteLine("析构函数被调用");
        }


    }
```

#### 2.1.3静态成员

 * 静态成员
 * 1.存储在静态成员中的信息只有在应用程序退出时才会从内存中释放
 * 2.静态成员不能通过对象访问，只能通过类名进行访问
 * 3.静态成员在内存中只存储一份

```c#
 class Program
    {
        static void Main(string[] args)
        {
            //Box.height = 6;
            //Console.WriteLine("height=" + Box.height);
            Console.WriteLine("height=" + Box.GetHeight());
        }
    }

    class Box
    {
        public int length;
        public int width;
        //静态成员
        private static int height;
		//属性
        public static int GetHeight()
        {
            return height;
        }

        public Box()
        {

        }

        public Box(int width)
        {
            this.width = width;
        }

        ~Box()//不需要添加访问修饰符
        {
            Console.WriteLine("析构函数被调用");
        }

    }

```

### 2.2继承

#### 2.2.1单继承类

```c#
 class Program
    {
        static void Main(string[] args)
        {
            Rectangle rec = new Rectangle(20,30);
        }
    }

//形状基类
class Shape
    {
        protected int width;
        protected int length=10;
        public Shape(int width,int length)
        {
            this.length=length;
            this.width=width;
            Console.WriteLine("length:" + length + "width:" + width);
        }
    }
	//派生类：矩形类
    class Rectangle:Shape
    {
        //在派生类中调用基类的构造函数
        public Rectangle(int width,int length):base(10,20)
        {

        }

        public int Width
        {
            get { return width; }
            set { width = value; }
        }

        public int Length{ get; set; }

        public int GetArea()
        {
            return width * length;
        }

    }
```

#### 2.2.2多继承接口

接口：定义了所有类继承接口时需要遵循语法规则，简而言之就是在接口中声明要做什么，需要在子类去实现具体怎么做的

**interface 默认权限是public**

 * 1.接口里面包含属性，方法，事件成员，不能定义字段

 * 2.接口只能包含成员的声明，不能有定义，因为成员的定义是派生类的责任

 * 3.继承了接口就必须要实现接口中所有的成员

 * 4.**接口中的成员是不需要修饰符修饰，而子类中实现的成员需要用public修饰**

 * 5.继承接口后，要实现的方法名必须与接口定义的方法名保持一致

 * 6.如果一个接口继承了其他接口，那么子类就需要实现所有接口的成员

 * 7.接口具有专一性

**接口污染：如果一个类只是要实现这个接口中的某一个功能时，而不得不去实现接口中其他的方法**

```c#
class Program
    {
        static void Main(string[] args)
        {
            IMyInterfaceTest imt = new MyInterface();
        }
    }

    interface IMyinterface
    {
        int Value
        {
            get;
            set;
        }
        void Test();
    }

    interface IMyInterfaceTest : IMyinterface
    {
        void MyInterfaceTest();
    }

    class MyInterface : IMyInterfaceTest
    {

        public virtual void MyInterfaceTest()
        {
            throw new NotImplementedException();
        }

        public int Value
        {
            get
            {
                throw new NotImplementedException();
            }
            set
            {
                throw new NotImplementedException();
            }
        }

        public void Test()
        {
            throw new NotImplementedException();
        }

    }
```




### 2.3多态

#### 2.3.1静态多态

静态多态：函数响应是发生在编译时，函数重载，运算符重载

函数重载：在同一个范围内对相同的函数名有多个定义，参数列表找那个的参数类型不一致，参数个数不一致，**不能重载只有返回值类型不同的函数声明**

```c#
class Program
    {
        static void Main(string[] args)
        {
            TestData td = new TestData();
            Console.WriteLine("结果为：" + td.Add(1, 2, 3));
        }
    }

class TestData
    {
        public int Add(int a, int b)
        {
            return a + b;
        }
        public int Add(int a, int b, int c)
        {
            return a + b + c;
        }
        public int Add(int a, float b)
        {
            return a + (int)b;
        }
        public float Add(int a, float b, double c)
        {
            return a + b;
        }
    }
```

运算符重载：可以重新定义C#中内置的运算符，operator

可以被重载的运算符：

 * 1.单目运算符：+ - ！~ ++ --

 * 2.双目运算符;+ - * / % 

 * 3.比较运算符: > < >= <= == !=

不能被重载的运算符：

 * 1.条件运算符：&&  ||
 * 2.赋值运算符;+=,*=,/=,%=,-=,=
 * 3.new  sizeof typeof  ?:  .  ->

```c#
class Program
    {
        static void Main(string[] args)
        {
            Box box1 = new Box();
            Box box2 = new Box();
            Box box3 = new Box();
            box3 = box1 + box2;
            Console.WriteLine("box3:" + box3.length);
        }
    }

class Box
    {
        public int length;
        public int width;

        public static Box operator +(Box box1, Box box2)
        {
            Box box = new Box();
            box.length = box1.length + box2.length;
            box.width = box1.width + box2.width;
            return box;
        }
      
    }
```


#### 2.3.2动态多态

动态多态：抽象 abstract  抽象类+虚函数

抽象类也是不能去创建对象的

##### 2.3.2.1 抽象类

抽象类   抽象类以及抽象方法需要采用abstract进行显示声明

 * 1.抽象类是不能被直接实例化，可以在派生类中实现实例化
 * 2.抽象类中抽象方法只声明不实现，但是在子类中必须全部实现
 * 3.抽象类中可以包含非抽象方法，抽象方法只能写在抽象类中
 * 4.抽象方法是不能使用private访问修饰符
 * 5.抽象类中包含抽象方法和普通方法，但是抽象方法只能放在抽象类中

```c#
  class Program
    {
        static void Main(string[] args)
        {   
            Rectangle rec = new Rectangle(1, 2);
            Console.WriteLine("结果为：" + rec.GetArea());
            rec.Draw();
        }
    }

abstract class Shape
    {
        public abstract int GetArea();
        public virtual void Draw()
        {
            Console.WriteLine("基类的画图虚函数被调用！");
        }

    }
    class Rectangle:Shape
    {
        private int length;
        private int width;
        public Rectangle(int length,int width)
        {
            this.length = length;
            this.width = width;
        }
        public override int GetArea()
        {
            return length * width;
        }
        public override void Draw()
        {
            //base.Draw();
            Console.WriteLine("画一个长方形！");
        }

    }
```

##### 2.3.2.2接口与抽象类的异同？

相同点：

 * 1.都可以被继承
 * 2.都不能直接被实例化
 * 3.自身不提供代码的实现
 * 4.派生类做必须实现未实现的方法

不同点：

* 1.抽象类中可以定义字段，属性，方法实现（非抽象方法），接口只能定义属性，事件，方法声明，不能包含字段
 * 2.接口可以多继承，抽象类只能单继承
 * 3.抽象类中实现的方法默认是虚的，接口的类中实现的接口方法默认是非虚的,但是可以显示声明为虚的

## 3.静态类与密封类

### 3.1静态类

* 静态类

 * 1.静态类中的所有成员必须是静态的（字段，属性，方法）,常量

 * 2.静态构造函数是不允许添加访问修饰符

 * 3.静态类是不能被继承的

 * 4.静态构造函数可以存在与普通类或静态类中

 * 5.静态方法也可以存在普通类中

 * 6.静态类是不能创建实例的

 * 7.静态构造函数会在首次访问类中的静态成员时被调用

   ```c#
    class Program
       {
           static void Main(string[] args)
           {
               StaticTest.value = 10;//使用类名调用静态成员
               StaticTest.Func();
   
           }
       }
   	//静态类
       static class StaticTest
       {
           public static int value;
           public static int Test
           {
               get;
               set;
           }
           public const int test = 1;
   
           static StaticTest()
           {
               Console.WriteLine("静态类中的构造函数被调用");
           }
           public static void Func()
           {
               Console.WriteLine("静态类中静态方法被调用");
           }
       }
       class NormalTest
       {
           static NormalTest()
           {
               Console.WriteLine("普通类中的静态构造函数被调用");
           }
           public static void NormalFuncTest()
           {
               Console.WriteLine("普通类中的静态函数被调用");
           }
       }
   
   ```

   

### 3.2密封类

 * 密封类
 * 1.密封类不能作为基类被继承
 * 2.在密封类中不声明受保护的成员或虚成员，因为受保护的成员从派生类进行访问，而虚成员在子类中进行重写
 * 3.由于密封类的不可继承性，因此密封类不能声明为抽象的，即sealed修饰符不能与abstract进行同时使用
 * 4.密封类除了不能被继承外，与非密封类的用法基本一致
 * 5.密封方法只能用于对基类的虚方法进行修饰，并且提供具体的实现，sealed修饰符与override修饰符同时使用

```c#
 class Program
    {
        static void Main(string[] args)
        {
            Apple apple = new Apple();
            apple.Eat();
            Food food = new Apple();
            food.Eat();
            food.Test();
        }
    }

	//抽象类
	abstract class Food
    {
        private int value;
        public abstract void Eat();
        public void Test()
        {
            Console.WriteLine("抽象类中的普通函数被调用");
        }
    }
     class Apple : Food
    {

        public override void Eat()
        {
            Console.WriteLine("子类中实现了eat方法");
        }
        public void AppleTest()
        {
            Console.WriteLine("apple类中的普通方法");
        }
        public virtual void AppleVirtualTest()
        {
            Console.WriteLine("apple类中的虚方法");
        }
    }
    class Water : Apple
    {
        public sealed override void AppleVirtualTest()
        {
        }
    }
```

## 4.c#关键字

### 4.0c#中的数组

```c#
			//C++声明定义数组
			string str[3]={"a","b","c"};

            //数组的第一种写法
            string[] str = { "a", "b", "c" };
            //数组的第二种写法
            string[] str = new string[5] { "a", "b", "c" ,"d","e"};
            //数组的第三种写法
            string[] str = new string[] { "a", "b", "c" };

            //C++多维数组
            int array[2][3]=new int[2][3]{};

            //C#多维数组
            int[,] array = new int[2,3] {{1,2,3},{4,5,6} };
```

### 4.1Foreach

foreach循环遍历数组

语法：foreach (数组类型名 item in 数组名) {}

**for与foreach遍历数组**

```c#
            for (int i = 0; i < str.Length; i++)
            {
                Console.WriteLine("str:" + str[i]);
            }
            foreach (string item in str)
            {
                Console.WriteLine("str:" + item);
            }
            Console.WriteLine("数组的长度：" + array.Length);
            for (int i = 0; i < 2; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    Console.WriteLine("array:" + array[i, j]);
                    array[i, j] = 1;
                    Console.WriteLine("array修改后的值:" + array[i, j]);
                }
            }
            //遍历多维数组
            foreach (int item in array)
            {
                Console.WriteLine("item:" + item);
            }
```

总结：

 * 1.foreach语法简洁;for循环需要给初始值，结束值，步长，而foreach不需要，他是自动遍历集合体中的所有值
 * 2.foreach效率比for高，因为for循环对数组访问的时候，对索引进行有效值检查，而foreach不需要
 * 3.foreach不需要关心数组索引的起始值
 * 4.遍历多维数组只需要一行代码
 * 5.foreach是只读类型，只能进行对数组的遍历，不能对数组中的每一项进行修改
 * 6.foreach循环遍历的时候会造成额外的gc开销
 * **7.数组中的每一项必须要与其他项相同才能进行遍历，foreach即便数组的每一项不同，都能进行遍历(数据结构)**

### 4.2out与ref

相同点：都是址传递，执行方法后，原来的值发生改变

不同点：

 * 1.使用ref时，传入的参数必须要初始化，而使用out时是不需要初始化的
 * 2.ref可以把参数的值传递进函数中，而out是不能把参数的值传递进函数中，即便参数已经赋值也会被清空，退出函数时，所有被out修饰的参数都必须赋值

```c#
			//out与ref
            int c = 4;
            int d = 5;
            refTest(ref c, ref d);
            Console.WriteLine("c=" + c + ",d=" + d);// 1 1

            int x = 5, y = 6;
            outTest(out x, out y);
            Console.WriteLine("x=" + x + ",y=" + y);//1 1
 		static void refTest(ref int a, ref int b)
        {
            Console.WriteLine("ref函数被调用：a=" + a + ",b=" + b);
            a = 1;
            b = a;
        }
        static void outTest(out int a, out int b)
        {
            //Console.WriteLine("out函数被调用：a=" + a + ",b=" + b);
            a = 1;
            b = a;
        }
```

### 4.3base关键字

* base
 * 1.用于在子类中实现对父类中公有或者受保护的成员进行访问，但是只局限于构造函数，实例方法中

```c#
	
	class Program
    {
        static void Main(string[] args)
        {
            //base
            Son son = new Son();
            son.Say();
            Father father = new Father();
            father.Say();
            Father fa = new Son();
            fa.Say();
        }
    }
	//base调用在父类中已经被其他方法重写的方法
    class Father
    {
        public Father()
        {
            Console.WriteLine("父类的构造函数");
        }

        public virtual void Say()
        {
            Console.WriteLine("父类函数被调用");
        }
    }
        

    class Son : Father
    {
        public Son()
            : base()//创建派生类实例时调用基类的构造函数
        {
            Console.WriteLine("子类的构造函数");
        }
        //public override void Say()
        //{
        //    //base.Say();
        //    Console.WriteLine("子类的函数被调用");
        //}
        public override void Say()
        {
            Console.WriteLine("子类的Say函数被调用");
        }
    }

```

### 4.4override与overload

* override:重写，用于重写基类中的虚方法，在派生类中提供新的方法
* overload:重载，提供的一种机制

### 4.5new关键字

new：1.在堆区分配内存，2.调用构造函数进行初始化

覆盖：在子类中用new关键字修饰定义与父类中的同名方法时，就叫覆盖，覆盖是不会改变父类方法的功能

#### 4.5.1 new和override

 * 1.不管是重写还是覆盖都不会影响父类的功能
 * 2.当用子类创建父类的时候，譬如 Father fa = new Son();重写会改变父类的功能，即调用了子类的方法，而覆盖不会，仍然调用父类的方法
 * 3.虚方法，实方法都可以被覆盖,抽象方法不可以被覆盖
 * 4.抽象方法，虚方法都可以被重写，实方法不可以被重写
 * 5.覆盖主要用于对以前无法修改的类进行继承的时候

#### 4.5.2new和overload的区别？

1、方法的覆盖是子类和父类之间的关系，是垂直关系；方法的重载是同一个类中方法之间的关系，是水平关系

2、覆盖只能由一个方法，或只能由一对方法产生关系；方法的重载是多个方法之间的关系。

3、覆盖要求参数列表相同；重载要求参数列表不同。

4、覆盖关系中，调用那个方法体，是根据对象的类型（对象对应存储空间类型）来决定；重载关系，是根据调用时的实参表与形参表来选择方法体的。

## 5.字符串

### 5.1Sting与string

 * 字符串 string  引用类型   System

 * string:关键字，声明一个字符串变量

 * String:类名

#### 5.1.1在C＃中，string str = null 与 string str = “” 请说明其中的区别？

string str = null 是不给他分配内存空间,而string str = "" 给它分配长度为空字符串的内存空间。

```c#
			string str = "123";
            Console.WriteLine(str.Length);
            string str2 = "abc123vfbt453dasds";

            Console.WriteLine("字符串的比较结果：" + String.Compare(str2, str));
            Console.WriteLine("字符串包含的结果：" + str2.Contains("312"));
            Console.WriteLine("字符串子串获取结果：" + str2.Substring(10,5));
            string str1 = String.Empty;//string.Empty == null
            string str3 = "";
            Console.WriteLine("字符串的比较结果：" + String.Compare(str1, str3));
```



### 5.2StringBuilder

字符串变量:StringBuilder  System.Text

```c#
 			StringBuilder sb =new StringBuilder();
            Console.WriteLine("sb的长度：" + sb.Length);
            Console.WriteLine("sb的容量：" + sb.Capacity);
            Console.WriteLine("sb的最大容量：" + sb.MaxCapacity);
            sb.Append("123dajsdmasdasdksadms");
            Console.WriteLine("sb的长度：" + sb.Length);
            Console.WriteLine("sb的容量：" + sb.Capacity);
            Console.WriteLine("sb的最大容量：" + sb.MaxCapacity);
            sb.Remove(10, 5);
            Console.WriteLine("sb的长度：" + sb.Length);
            Console.WriteLine("sb的容量：" + sb.Capacity);
            Console.WriteLine("sb的最大容量：" + sb.MaxCapacity);
            sb.Insert(10, "abcdefg");
            Console.WriteLine("sb的长度：" + sb.Length);
            Console.WriteLine("sb的容量：" + sb.Capacity);
            sb.Append("456");
            Console.WriteLine("sb的长度：" + sb.Length);
            Console.WriteLine("sb的容量：" + sb.Capacity);
            sb.Replace('a', '!');
            Console.WriteLine("sb的长度：" + sb.Length);
            Console.WriteLine("sb的容量：" + sb.Capacity);
            Console.WriteLine("字符串的结果为：" + sb);
```

总结：

* 1.少量的字符串操作，字符串不经常发生改变时，优先使用string,分配在栈区，创建后大小不可修改 
 * 2.stringbuilder创建后是在堆区，大小是可以自由修改

## 6.委托与事件

#### 6.1委托

 委托是存有对某个方法的引用的一种引用变量 , 引用类型, 相当于函数指针

回调：提前注册，需要用的时候调用

 * 委托常用于事件与回调方法

 * delegate 委托返回值类型  委托名（参数列表）

```c#
namespace ConsoleApplication5
{
    //访问修饰符 delegate 委托返回值类型  委托名（参数列表）
    public delegate int MyDelegate(int a, int b);
    
    public delegate void LogString(string str);
    class Program
    {
        static void Main(string[] args)
        {
            //TestData td = new TestData();
            //Console.WriteLine("结果为：" + td.Add(1, 2));
            //MyDelegate mydel = new MyDelegate(td.Add);
            //Console.WriteLine("结果为：" + mydel(1, 2));
            //Console.WriteLine("乘法的结果为：" + td.Multi(3, 4));
            //MyDelegate mydel2 = new MyDelegate(td.Multi);
            //Console.WriteLine("委托调用的结果：" + mydel2(3, 4));
            
            //多播委托
            TestData td=new TestData();
            MyDelegate mydel = new MyDelegate(td.Add);
            MyDelegate mydel2 = new MyDelegate(td.Multi);
            MyDelegate mydel3;
            mydel3 = mydel2;
            mydel3 += mydel;
           // Console.WriteLine(mydel3(1, 2));
            mydel3(1, 2);
            //简写形式
            //MyDelegate mydel = td.Add;
            //mydel += td.Multi;
            //Console.WriteLine(mydel(1, 2));

            //将字符串输出到控制台和文件中
            PrintString ps = new PrintString();
            LogString ls = new LogString(ps.WriteToScreen);
            ls += new LogString(ps.WriteToFile);
            ls("abc");
            ls -= ps.WriteToFile;
            ls("ghj");
        }
    }
    //测试类
    class TestData
    {
        //加法
        public int Add(int a, int b)
        {
            return a + b;
        }
        //乘法
        public int Multi(int a, int b)
        {
            return a * b;
        }
    }
	//打印字符串类
    class PrintString
    {
        //将字符串输出到控制台
        public void WriteToScreen(string str)
        {
            Console.WriteLine("输出字符串：" + str);
        }
        //将字符串输出到文件中
        public void WriteToFile(string str)
        {
            FileStream fs = new FileStream("d:\\message.txt", FileMode.Append, FileAccess.Write);
            StreamWriter sw = new StreamWriter(fs);
            sw.WriteLine(str);
            sw.Flush();
            sw.Close();
            fs.Close();

        }
    }
}

```

#### 6.2匿名函数

匿名函数：提供了一种传递代码块作为委托参数的技术

匿名方法是没有名称，只有主体方法，在匿名方法中是不需要指定返回值类型，系统在主体内的return语句进行推断

```c#
namespace ConsoleApplication1
{
    //定义一个委托
    public delegate int MyDelegate(int a, int b);
    class Program
    {
        static void Main(string[] args)
        {
            //创建一个测试类对象
            TestData td = new TestData();
            //委托的标准形式
            MyDelegate mydel = new MyDelegate(td.Add);
            Console.WriteLine(mydel(1, 2));
            //匿名函数
            MyDelegate mydel2 = delegate(int a, int b)
            {
                return a + b;
            };
            //调用委托
            mydel2(1, 2);
        }
    }
    //测试类
    class TestData
    {
        //加法
        public int Add(int a, int b)
        {
            return a + b;
        }
        //乘法
        public void Multi(int a, string b)
        {
            Console.WriteLine("a={0},b={1}", a, b);
        }
        //增加
        public void Increase(int a)
        {
            a += 1;
        }
    }
    
}
```

#### 6.3Lambda表达式

```c#
			//lambda表达式
            MyDelegate mydel3 = (int a, int b) =>
            {
                return a + b;
            };
            Console.WriteLine("lambda表达式:" + mydel3(1, 2));
```

#### 6.4自带的委托

自带的委托 func 前面的表示参数类型，后面表示返回值类型 

action 是不支持返回值 

predicate 返回值类型是bool(不常用)

```c#
 			//标准形式下的委托，采用系统自带委托类型 func
            Func<int, int, int> funcAdd = new Func<int, int, int>(td.Add);
            Func<int, int, int> funAdd = td.Add;
            Console.WriteLine(funcAdd(1, 2));

            //匿名函数,采用系统自带的委托接收
            Func<int, int, int> funcAdd2 = delegate(int a, int b)
            {
                return a + b;
            };
            Console.WriteLine(funcAdd2(1, 2));

            //lambda表达式，采用系统自带的委托接收
            Func<int, int, int> funcAdd3 = (int a, int b) =>
            {
                return a + b;
            };
            Console.WriteLine(funcAdd3(1, 2));

            //标准形式下的委托，采用系统自带委托类型 action
            Action<int, string> actMulti = new Action<int, string>(td.Multi);
            actMulti(1, "a");

            //匿名函数,采用系统自带的委托接收
            Action<int, string> actMulti2 = delegate(int a, string b)
            {
                Console.WriteLine("匿名函数调用：a={0},b={1}", a, b);
            };
            actMulti2(1, "a");

            //lambda表达式，采用系统自带的委托接收
            Action<int, string> actMulti3 = (int a, string b) =>
            {
                Console.WriteLine("lambda调用：a={0},b={1}", a, b);
            };
            actMulti3(1, "a");

            Action<int> actIncrease = new Action<int>(td.Increase);
            Action<int> actIncrease2 = delegate(int a)
            {
                a += 1;
            };
            Action<int> actIncrease3 = a => a += 1;
```



#### 6.5事件

事件：就是用户操作

 * 事件是基于委托的，事件是一种具有特殊签名的委托

 * 事件是类或者对象向其他类或对象通知发生的事情的一种特殊签名委托

```c#
	class Program
    {
        static void Main(string[] args)
        {
            //事件
            EventTest et = new EventTest();
            SubEventTest se=new SubEventTest();
            et.SetValue(2);
            et.ChangeNum += new EventTest.NumHandle(se.Printf);
            et.SetValue(3);
        }
	}
	
	//事件测试类
	class EventTest
    {
        public delegate void NumHandle();
        public event NumHandle ChangeNum;

        private int value;
        public void OnNumChange()
        {
            if (ChangeNum!=null)
            {
                ChangeNum();
            }
            else
            {
                Console.WriteLine("事件为空！");
            }
        }
        public void SetValue(int a)
        {
            if (value!=a)
            {
                value = a;
                OnNumChange();
            }
        }
    }

    class SubEventTest
    {
        public void Printf()
        {
            Console.WriteLine("函数被调用 ");
        }
    }
```

# 二、C#数据结构

## 1.Array类

### 1.1、普通数组类

数组：是一个存储相同类型元素且大小固定的顺序集合  内存是连续的

```c#
class Program
    {
        static void Main(string[] args)
        {
            //c#定义数组
            int[] array = { 1, 2, 3 };
            int[] array1 = new int[] { 1, 2, 3 };
            int[] array2 = new int[4] { 1, 2, 3, 4 };
            int[] array3 = array2;
            array3[3] = 6;
            Console.WriteLine(array2[3]);
            //多维数组
            int[,] array4 = new int[2, 3] { { 1, 2, 3 }, { 4, 5, 6 } };
            for (int i = 0; i < 2; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    Console.WriteLine(array4[i,j]);
                }
            }
            foreach (int item in array4)
            {
                Console.WriteLine(item);
            }
            //Array类中的方法
            int[] array5 = new int[] { 45, 23, 67, 98, 23 };
            Console.Write("起始数组：");
            foreach (int item in array5)
            {
                Console.Write(item+"   ");   
            }
            Console.WriteLine();
            Array.Reverse(array5);
            Console.Write("逆序后的数组：");
            foreach (int item in array5)
            {
                Console.Write(item+"   ");
            }
            Console.WriteLine();
            Array.Sort(array5);
            Console.Write("排序后的数组：");
            foreach (int item in array5)
            {
                Console.Write(item + "   ");
            }
            Console.WriteLine("");
        }
}
```

### 1.2、ArrayList

ArrayList:动态数组  System.Collections

```c#
 			ArrayList al = new ArrayList();
            Console.WriteLine("数组的大小：" + al.Count);
            Console.WriteLine("数组的容量：" + al.Capacity);
            al.Add(1);
            Console.WriteLine("数组的大小：" + al.Count);
            Console.WriteLine("数组的容量：" + al.Capacity);
            al.Add(2);
            al.Add(3);
            al.Add(4);
            Console.WriteLine("数组的大小：" + al.Count);
            Console.WriteLine("数组的容量：" + al.Capacity);
            al.Add(5);
            Console.WriteLine("数组的大小：" + al.Count);
            Console.WriteLine("数组的容量：" + al.Capacity);
			//可以添加任意类型
            al.Add("abc");
            al.Add(true);
            al.Add(6.3);
            al.Add(p);
            Console.WriteLine("数组的大小：" + al.Count);
            Console.WriteLine("数组的容量：" + al.Capacity);
            for (int i = 0; i < al.Count; i++)
            {
                Console.WriteLine(al[i]);
            }
            foreach (var item in al)
            {
                Console.WriteLine(item);
            }
```

arraylist之所以能存储任意类型的数据，因为将所有的数组作为object进行存储

#### 1.2.1、装箱与拆箱(分配内存，拷贝数据;类型不安全)

 * 装箱：从值类型转换到object类型,值类型=》引用类型
 * 拆箱：将object类型转到值类型 引用类型=》值类型

**能被拆箱的数据是一定经过装箱的** 

装箱：

对值类型在堆中分配一个对象实例，并将该实例复制到新的对象中

 * 1.新分配堆区的内存大小（值类型的实例大小+方法表指针和索引）

 * 2.将值类型的实例字段拷贝到新分配的内存中

 * 3.返回在堆区中新分配的对象地址

拆箱：

 * 1.获取在堆中属于值类型那部分字段的地址

 * 2.将引用对象中的值拷贝到栈中的值类型实例中

### 1.3、List

List 命名空间： System.Collections.Generic

```c#
			//List<T>
			List<int> list = new List<int>();
            Console.WriteLine("list的大小：" + list.Count);
            Console.WriteLine("list的容量：" + list.Capacity);
            list.Add(1);
            Console.WriteLine("list的大小：" + list.Count);
            Console.WriteLine("list的容量：" + list.Capacity);
            list.Add(3);
            list.Add(10);
            list.Add(9);
            list.Add(5);
            for (int i = 0; i < list.Count; i++)
            {
                Console.Write(list[i] + "  ");
            }

            Console.WriteLine("未插入的数据：" + list[4]);
            list.Insert(4, 10);//插入位置，内容
            Console.WriteLine("插入的数据：" + list[4]);
            for (int i = 0; i < list.Count; i++)
            {
                Console.Write(list[i] + "  ");
            }

            list.Remove(10);//删除指定的数据，当有相同数据时，移除的是第一个的
            for (int i = 0; i < list.Count; i++)
            {
                Console.Write(list[i] + "  ");
            }
            list.RemoveAt(2);//删除某个位置的数据
            for (int i = 0; i < list.Count; i++)
            {
                Console.Write(list[i] + "  ");
            }
            Console.WriteLine();

            list.Reverse();//反转
            for (int i = 0; i < list.Count; i++)
            {
                Console.Write(list[i] + "  ");
            }
            Console.WriteLine();
            list.Sort();//排序：默认升序，可以重写方法为降序
            for (int i = 0; i < list.Count; i++)
            {
                Console.Write(list[i] + "  ");
            }
```



### 1.4、LinkedList

LinkedList:双向链表  

命名空间：System.Collections.Generic

插入，删除效率高，查询比较慢

```c#
			//LinkedList<T>
			LinkedList<string> ll = new LinkedList<string>();
            ll.AddFirst("a");//头插
            ll.AddFirst("b");
            //for (int i = 0; i < ll.Count; i++)
            //{
            //    Console.Write(ll[i]);
            //}
            foreach (string item in ll)
            {
                Console.Write(item);
            }
            ll.AddLast("c");//尾插
            ll.AddLast("d");
            foreach (string item in ll)
            {
                Console.Write(item);
            }

            LinkedListNode<string> currentNode = ll.Find("a");
            ll.AddBefore(currentNode, "e");//在a前面加上e
            foreach (string item in ll)
            {
                Console.Write(item);
            }
            ll.AddAfter(currentNode, "f");//在之后加上f
            foreach (string item in ll)
            {
                Console.Write(item);
            }

```



### 1.5Array类总结

**数组：**

 * 1.在声明数组的时候必须指定数组的大小，过长浪费内存，过短会造成内存溢出
 * 2.在数组中两个数之间插入数据比较麻烦

**ArrayList:**

 * 1.可以插入不同的数据类型
 * 2.在数据检索以及存储时会存在装箱与拆箱的操作，带来性能损耗
 * 3.类型不安全

**List:**

* 1.在声明的时候需要指定其数据类型
 * 2.避免了装箱与拆箱类型
 * 3.list是不需要声明大小的，且在相同类型情况下，性能和数组基本一致

**LinkedList:**

 * 1.双向链表 
 * 2.插入与删除快
 * 3.索引比较慢







