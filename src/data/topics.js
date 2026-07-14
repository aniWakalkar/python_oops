const topics = [
  {
    id: 0,
    title: "Introduction to OOP",
    subtopics: [
      {
        id: 0,
        title: "What is OOP?",
        english: "Object-Oriented Programming (OOP) is a programming paradigm that organizes code using objects and classes. It models real-world entities as objects that have properties (attributes) and behaviors (methods).",
        hindi: "Object-Oriented Programming (OOP) एक programming paradigm है जो code को objects और classes का उपयोग करके organize करता है। यह real-world entities को objects के रूप में model करता है जिनमें properties (attributes) और behaviors (methods) होते हैं।",
        example: "# Example of a simple class in Python\nclass Car:\n    brand = 'Toyota'  # Attribute / class Variable\n    \n    def start(self):\n        print('Car started')  # Method / Behaviour\n\n# Creating an object\nmy_car = Car()\nprint(my_car.brand)  # Output: Toyota\nmy_car.start()       # Output: Car started"
      }
    ]
  },
  {
    id: 1,
    title: "Classes & Objects",
    subtopics: [
      {
        id: 1,
        title: "Class",
        english: "A class is a blueprint used to create objects. It defines the properties (variables) and behaviours (methods) of an object.",
        hindi: "Class एक blueprint होती है जिससे objects बनाए जाते हैं। यह object के properties (variables) और behaviours (methods) को define करती है।",
        example: "class Car:\n    brand = 'Toyota'  # Attribute / class Variable\n    \n    def start(self):\n        print('Car started')  # Method / Behaviour"
      },
      {
        id: 2,
        title: "Object",
        english: "An object is an instance of a class. It is created from a class and occupies its own memory.",
        hindi: "Object किसी class का instance होता है। यह class से create होता है और अपनी खुद की memory में space लेता है।",
        example: "# Creating objects from the Car class\ncar1 = Car()  # object / instance of class\ncar2 = Car()  # Another object\n\n# Each object has its own memory space\nprint(car1.brand)  # Output: Toyota\nprint(car2.brand)  # Output: Toyota"
      },
      {
        id: 3,
        title: "Constructor",
        english: "A constructor is a special method that is automatically called when an object is created. It is used to initialize the object's data. It is always defined as __init__()",
        hindi: "Constructor एक special method है जो object बनने पर अपने आप call होता है। इसका उपयोग object के data को initialize करने के लिए किया जाता है। इसे हमेशा __init__() के रूप में define किया जाता है।",
        example: "class Student:\n    def __init__(self):\n        print('Constructor Called')\n        print(self, 'This self references to this object itself, we use this to access variables and methods')\n\n# Constructor is automatically called when object is created\ns1 = Student()  # Output: Constructor Called"
      },
      {
        id: 4,
        title: "Self",
        english: "self refers to the current object of a class. It is used to access the object's variables and methods.",
        hindi: "self current object को represent करता है। इसका उपयोग object के variables और methods को access करने के लिए किया जाता है।",
        example: "class Home:\n    myhome = 'Welcome Home'   # Class variable\n\n    def __init__(self, name, owner):   # Instance Variables\n        self.name = name\n        self.owner = owner\n        print('House Created')\n\n    def getHomeName(self):   # PASSING SELF IS REQUIRED TO ACCESS VARIABLES AND METHODS\n        print('My house name is', self.name)\n\n    def getHomeOwnerName(self):  \n        print('My house owner name is', self.owner)\n\n# Creating object\nh1 = Home('Bhavan', 'Aniket')\nh1.getHomeName()        # Output: My house name is Bhavan\nh1.getHomeOwnerName()   # Output: My house owner name is Aniket"
      }
    ]
  },
  {
    id: 2,
    title: "Variables & Methods",
    subtopics: [
      {
        id: 5,
        title: "Instance Variable",
        english: "An instance variable belongs to an object. Each object has its own copy of instance variables.",
        hindi: "Instance Variable किसी object की होती है। हर object की अपनी अलग value होती है।",
        example: "class Student:\n    def __init__(self, name, age):\n        self.name = name    # Instance Variable\n        self.age = age      # Instance Variable\n\n# Each object has its own copy\ns1 = Student('Aniket', 26)\ns2 = Student('Rahul', 25)\n\nprint(s1.name)  # Output: Aniket\nprint(s2.name)  # Output: Rahul"
      },
      {
        id: 6,
        title: "Class Variable",
        english: "A class variable belongs to the class itself and is shared by all objects of that class.",
        hindi: "Class Variable पूरी class की होती है और उसी class के सभी objects द्वारा साझा (shared) की जाती है।",
        example: "class Home:\n    myhome = 'Welcome Home'   # Class variable - shared by all objects\n\n    def __init__(self, name, owner):\n        self.name = name      # Instance Variable\n        self.owner = owner    # Instance Variable\n\nh1 = Home('Bhavan', 'Aniket')\nh2 = Home('Villa', 'Priya')\n\n# Class variable is shared\nprint(h1.myhome)  # Output: Welcome Home\nprint(h2.myhome)  # Output: Welcome Home\n\n# Changing class variable affects all objects\nHome.myhome = 'New Home'\nprint(h1.myhome)  # Output: New Home\nprint(h2.myhome)  # Output: New Home"
      },
      {
        id: 7,
        title: "Instance Method",
        english: "An instance method works with object data and always takes self as its first parameter.",
        hindi: "Instance Method object के data पर काम करता है और इसका पहला parameter हमेशा self होता है।",
        example: "class Home:\n    def __init__(self, name, owner):\n        self.name = name\n        self.owner = owner\n    \n    def getHomeName(self):   # Instance Method - uses self\n        print('My house name is', self.name)\n    \n    def getHomeOwnerName(self):   # Instance Method - uses self\n        print('My house owner name is', self.owner)\n\nh1 = Home('Bhavan', 'Aniket')\nh1.getHomeName()        # Output: My house name is Bhavan\nh1.getHomeOwnerName()   # Output: My house owner name is Aniket"
      },
      {
        id: 8,
        title: "Class Method",
        english: "A class method works with class data and uses cls as its first parameter.",
        hindi: "Class Method class के data पर काम करता है और इसका पहला parameter cls होता है।",
        example: "class Student:\n    school = 'ABC School'  # Class Variable\n    \n    @classmethod\n    def get_school(cls):   # Class Method - uses cls\n        return cls.school\n\n# Can be called without creating an object\nprint(Student.get_school())  # Output: ABC School"
      },
      {
        id: 9,
        title: "Static Method",
        english: "A static method does not depend on object or class data. It does not use self or cls.",
        hindi: "Static Method object या class के data पर निर्भर नहीं होता। इसमें self या cls का उपयोग नहीं होता।",
        example: "class MathUtils:\n    @staticmethod\n    def add_numbers(a, b):   # Static Method - no self or cls\n        return a + b\n\n# Can be called without creating an object\nresult = MathUtils.add_numbers(5, 3)\nprint(result)  # Output: 8"
      }
    ]
  },
  {
    id: 3,
    title: "OOP Principles",
    subtopics: [
      {
        id: 10,
        title: "Encapsulation",
        english: "Encapsulation is the process of wrapping data and methods into a single unit (class) while restricting direct access to the data.",
        hindi: "Encapsulation वह प्रक्रिया है जिसमें data और methods को एक class में रखा जाता है तथा data की direct access को नियंत्रित किया जाता है।",
        example: "class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance  # Private variable - encapsulated\n    \n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n    \n    def get_balance(self):\n        return self.__balance\n\n# Data is encapsulated - can only be accessed through methods\naccount = BankAccount(1000)\naccount.deposit(500)\nprint(account.get_balance())  # Output: 1500"
      },
      {
        id: 11,
        title: "Inheritance",
        english: "Inheritance allows one class to acquire the properties and methods of another class.",
        hindi: "Inheritance की मदद से एक class दूसरी class के variables और methods को प्राप्त कर सकती है।",
        example: "# Parent class\nclass Vehicle:\n    def __init__(self, brand):\n        self.brand = brand\n    \n    def start(self):\n        print(f\"{self.brand} is starting\")\n\n# Child class inheriting from Vehicle\nclass Car(Vehicle):\n    def __init__(self, brand, model):\n        super().__init__(brand)  # Calling parent constructor\n        self.model = model\n\n# Car inherits all methods and attributes from Vehicle\nmy_car = Car('Toyota', 'Camry')\nmy_car.start()  # Output: Toyota is starting"
      },
      {
        id: 12,
        title: "Polymorphism",
        english: "Polymorphism allows the same method name to perform different behaviors in different classes.",
        hindi: "Polymorphism में एक ही method अलग-अलग classes में अलग-अलग तरीके से कार्य करता है।",
        example: "class Dog:\n    def sound(self):\n        return \"Woof!\"\n\nclass Cat:\n    def sound(self):\n        return \"Meow!\"\n\nclass Cow:\n    def sound(self):\n        return \"Moo!\"\n\n# Same method name 'sound' behaves differently for each class\ndef make_sound(animal):\n    print(animal.sound())\n\ndog = Dog()\ncat = Cat()\ncow = Cow()\n\nmake_sound(dog)  # Output: Woof!\nmake_sound(cat)  # Output: Meow!\nmake_sound(cow)  # Output: Moo!"
      },
      {
        id: 13,
        title: "Abstraction",
        english: "Abstraction hides implementation details and shows only the essential features to the user.",
        hindi: "Abstraction implementation की details छुपाकर केवल आवश्यक features उपयोगकर्ता को दिखाता है।",
        example: "from abc import ABC, abstractmethod\n\nclass Payment(ABC):\n    @abstractmethod\n    def process_payment(self, amount):\n        pass  # Implementation hidden\n\nclass CreditCardPayment(Payment):\n    def process_payment(self, amount):\n        print(f\"Processing ${amount} via Credit Card\")\n        # Complex implementation hidden from user\n\nclass PayPalPayment(Payment):\n    def process_payment(self, amount):\n        print(f\"Processing ${amount} via PayPal\")\n        # Complex implementation hidden from user\n\n# User only sees the abstract interface\npayment = CreditCardPayment()\npayment.process_payment(100)  # Output: Processing $100 via Credit Card"
      }
    ]
  },
  {
    id: 4,
    title: "Inheritance & Polymorphism",
    subtopics: [
      {
        id: 14,
        title: "super()",
        english: "super() is used to access the parent class methods and constructor from the child class.",
        hindi: "super() का उपयोग child class से parent class के methods और constructor को call करने के लिए किया जाता है।",
        example: "class Parent:\n    def __init__(self, name):\n        self.name = name\n        print(f\"Parent constructor: {name}\")\n    \n    def show(self):\n        print(f\"Parent class: {self.name}\")\n\nclass Child(Parent):\n    def __init__(self, name, age):\n        super().__init__(name)  # Calling parent constructor\n        self.age = age\n        print(f\"Child constructor: {age}\")\n    \n    def show(self):\n        super().show()  # Calling parent method\n        print(f\"Child class: {self.age}\")\n\nchild = Child(\"Aniket\", 26)\n# Output: Parent constructor: Aniket\n# Output: Child constructor: 26\nchild.show()\n# Output: Parent class: Aniket\n# Output: Child class: 26"
      },
      {
        id: 15,
        title: "Method Overloading",
        english: "Python does not support true method overloading. Similar behavior can be achieved using default arguments or *args.",
        hindi: "Python में वास्तविक Method Overloading नहीं होती। इसे default arguments या *args की मदद से किया जाता है।",
        example: "# Method overloading using default arguments\nclass Calculator:\n    def add(self, a, b=0, c=0):\n        return a + b + c\n\ncalc = Calculator()\nprint(calc.add(5))      # Output: 5\nprint(calc.add(5, 3))   # Output: 8\nprint(calc.add(5, 3, 2)) # Output: 10\n\n# Method overloading using *args\nclass Math:\n    def sum(self, *args):\n        return sum(args)\n\nmath = Math()\nprint(math.sum(1, 2))        # Output: 3\nprint(math.sum(1, 2, 3))     # Output: 6\nprint(math.sum(1, 2, 3, 4))  # Output: 10"
      },
      {
        id: 16,
        title: "Method Overriding",
        english: "Method overriding occurs when a child class provides its own implementation of a method already defined in the parent class.",
        hindi: "Method Overriding तब होती है जब child class, parent class के method को अपने तरीके से दोबारा define करती है।",
        example: "class Animal:\n    def sound(self):\n        return \"Some sound\"\n\nclass Dog(Animal):\n    def sound(self):  # Overriding parent method\n        return \"Woof!\"\n\nclass Cat(Animal):\n    def sound(self):  # Overriding parent method\n        return \"Meow!\"\n\nanimal = Animal()\ndog = Dog()\ncat = Cat()\n\nprint(animal.sound())  # Output: Some sound\nprint(dog.sound())     # Output: Woof!\nprint(cat.sound())     # Output: Meow!"
      }
    ]
  },
  {
    id: 5,
    title: "Magic Methods",
    subtopics: [
      {
        id: 17,
        title: "Magic Methods",
        english: "Magic methods are special methods that Python automatically calls to perform specific operations.",
        hindi: "Magic Methods विशेष methods होते हैं जिन्हें Python विशेष operations के लिए अपने आप call करता है।",
        example: "class Number:\n    def __init__(self, value):\n        self.value = value\n    \n    def __add__(self, other):  # Magic method for +\n        return self.value + other.value\n    \n    def __str__(self):  # Magic method for string representation\n        return f\"Number: {self.value}\"\n\nn1 = Number(5)\nn2 = Number(3)\nprint(n1 + n2)  # Output: 8 (calls __add__)\nprint(n1)       # Output: Number: 5 (calls __str__)"
      },
      {
        id: 18,
        title: "__init__",
        english: "__init__ is the constructor method that initializes object data when an object is created.",
        hindi: "__init__ constructor method है जो object बनने पर उसके data को initialize करता है।",
        example: "class Student:\n    def __init__(self, name, age):  # Constructor\n        self.name = name\n        self.age = age\n        print(\"Student object created\")\n\n# __init__ is automatically called\ns1 = Student(\"Aniket\", 26)  # Output: Student object created\nprint(s1.name)  # Output: Aniket\nprint(s1.age)   # Output: 26"
      },
      {
        id: 19,
        title: "__str__",
        english: "__str__ returns a human-readable string representation of an object.",
        hindi: "__str__ object का user-friendly string representation return करता है।",
        example: "class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n    \n    def __str__(self):  # User-friendly representation\n        return f\"'{self.title}' by {self.author}\"\n\nbook = Book(\"Python Programming\", \"John Doe\")\nprint(book)  # Output: 'Python Programming' by John Doe"
      },
      {
        id: 20,
        title: "__repr__",
        english: "__repr__ returns the official string representation of an object, mainly used for debugging.",
        hindi: "__repr__ object का official representation return करता है, जिसका उपयोग मुख्य रूप से debugging में होता है।",
        example: "class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n    \n    def __repr__(self):  # Official representation for debugging\n        return f\"Book('{self.title}', '{self.author}')\"\n\nbook = Book(\"Python Programming\", \"John Doe\")\nprint(repr(book))  # Output: Book('Python Programming', 'John Doe')\n# Useful for debugging and logging"
      },
      {
        id: 21,
        title: "__len__",
        english: "__len__ returns the length of an object when len() is called.",
        hindi: "__len__ method len() function द्वारा object की length return करता है।",
        example: "class Playlist:\n    def __init__(self, songs):\n        self.songs = songs\n    \n    def __len__(self):  # Returns length\n        return len(self.songs)\n\nmy_playlist = Playlist([\"Song1\", \"Song2\", \"Song3\"])\nprint(len(my_playlist))  # Output: 3"
      }
    ]
  },
  {
    id: 6,
    title: "Access Modifiers",
    subtopics: [
      {
        id: 22,
        title: "Access Modifiers",
        english: "Access modifiers control how variables and methods can be accessed inside and outside a class.",
        hindi: "Access Modifiers यह नियंत्रित करते हैं कि class के variables और methods को कहाँ और कैसे access किया जा सकता है।",
        example: "class AccessExample:\n    def __init__(self):\n        self.public_var = \"Public\"          # Public\n        self._protected_var = \"Protected\"    # Protected\n        self.__private_var = \"Private\"      # Private\n    \n    def public_method(self):\n        return \"Public method\"\n    \n    def _protected_method(self):\n        return \"Protected method\"\n    \n    def __private_method(self):\n        return \"Private method\"\n\nobj = AccessExample()\nprint(obj.public_var)        # Accessible ✓\nprint(obj._protected_var)    # Accessible ✓ (but not recommended)\n# print(obj.__private_var)   # Error ✗ (not accessible)"
      },
      {
        id: 23,
        title: "Public",
        english: "Public members can be accessed from anywhere inside or outside the class.",
        hindi: "Public members को class के अंदर और बाहर दोनों जगह से access किया जा सकता है।",
        example: "class Car:\n    def __init__(self):\n        self.brand = \"Toyota\"  # Public attribute\n    \n    def start(self):  # Public method\n        return \"Car started\"\n\nmy_car = Car()\nprint(my_car.brand)   # Output: Toyota (accessible from outside)\nprint(my_car.start()) # Output: Car started (accessible from outside)"
      },
      {
        id: 24,
        title: "Protected",
        english: "Protected members are indicated by a single underscore (_) and are intended for internal use within the class and its subclasses.",
        hindi: "Protected members के पहले एक underscore (_) लगाया जाता है। इन्हें class और उसकी child classes के अंदर उपयोग करने के लिए बनाया जाता है।",
        example: "class Animal:\n    def __init__(self):\n        self._name = \"Animal\"  # Protected attribute\n\nclass Dog(Animal):\n    def display(self):\n        return self._name  # Accessible in subclass\n\nanimal = Animal()\ndog = Dog()\n\nprint(dog.display())  # Output: Animal (accessible in subclass)\nprint(animal._name)   # Output: Animal (accessible but not recommended)"
      },
      {
        id: 25,
        title: "Private",
        english: "Private members are declared using double underscores (__) and cannot be accessed directly outside the class.",
        hindi: "Private members को double underscore (__) से declare किया जाता है और इन्हें class के बाहर से सीधे access नहीं किया जा सकता।",
        example: "class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance  # Private attribute\n    \n    def get_balance(self):\n        return self.__balance  # Access through method\n\naccount = BankAccount(1000)\nprint(account.get_balance())  # Output: 1000 (accessed through method)\n# print(account.__balance)    # Error! Cannot access private attribute directly"
      }
    ]
  }
];

export default topics;