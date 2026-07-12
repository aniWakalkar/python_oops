const topics = [
  {
    id: 1,
    title: "Classes & Objects",
    subtopics: [
      {
        id: 1,
        title: "Class",
        english: "A class is a blueprint or template used to create objects. It defines the attributes (variables) and behaviors (methods) of an object.",
        hindi: "Class एक blueprint (नक्शा) होती है जिससे objects बनाए जाते हैं। यह object के variables और methods को define करती है।"
      },
      {
        id: 2,
        title: "Object",
        english: "An object is an instance of a class. It contains its own data and can access the methods defined in the class.",
        hindi: "Object किसी class का instance होता है। इसके पास अपना data होता है और यह class के methods का उपयोग कर सकता है।"
      },
      {
        id: 3,
        title: "Constructor",
        english: "A constructor is a special method (`__init__`) that is automatically called when an object is created. It is used to initialize object data.",
        hindi: "Constructor (`__init__`) एक special method है जो object बनने पर अपने आप call होता है। इसका उपयोग object के data को initialize करने के लिए किया जाता है।"
      },
      {
        id: 4,
        title: "Self",
        english: "`self` refers to the current object of a class. It is used to access the object's variables and methods.",
        hindi: "`self` current object को represent करता है। इसका उपयोग object के variables और methods को access करने के लिए किया जाता है।"
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
        hindi: "Instance Variable किसी object की होती है। हर object की अपनी अलग value होती है।"
      },
      {
        id: 6,
        title: "Class Variable",
        english: "A class variable belongs to the class itself and is shared by all objects of that class.",
        hindi: "Class Variable पूरी class की होती है और उसी class के सभी objects द्वारा साझा (shared) की जाती है।"
      },
      {
        id: 7,
        title: "Instance Method",
        english: "An instance method works with object data and always takes `self` as its first parameter.",
        hindi: "Instance Method object के data पर काम करता है और इसका पहला parameter हमेशा `self` होता है।"
      },
      {
        id: 8,
        title: "Class Method",
        english: "A class method works with class data and uses `cls` as its first parameter.",
        hindi: "Class Method class के data पर काम करता है और इसका पहला parameter `cls` होता है।"
      },
      {
        id: 9,
        title: "Static Method",
        english: "A static method does not depend on object or class data. It does not use `self` or `cls`.",
        hindi: "Static Method object या class के data पर निर्भर नहीं होता। इसमें `self` या `cls` का उपयोग नहीं होता।"
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
        hindi: "Encapsulation वह प्रक्रिया है जिसमें data और methods को एक class में रखा जाता है तथा data की direct access को नियंत्रित किया जाता है।"
      },
      {
        id: 11,
        title: "Inheritance",
        english: "Inheritance allows one class to acquire the properties and methods of another class.",
        hindi: "Inheritance की मदद से एक class दूसरी class के variables और methods को प्राप्त कर सकती है।"
      },
      {
        id: 12,
        title: "Polymorphism",
        english: "Polymorphism allows the same method name to perform different behaviors in different classes.",
        hindi: "Polymorphism में एक ही method अलग-अलग classes में अलग-अलग तरीके से कार्य करता है।"
      },
      {
        id: 13,
        title: "Abstraction",
        english: "Abstraction hides implementation details and shows only the essential features to the user.",
        hindi: "Abstraction implementation की details छुपाकर केवल आवश्यक features उपयोगकर्ता को दिखाता है।"
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
        english: "`super()` is used to access the parent class methods and constructor from the child class.",
        hindi: "`super()` का उपयोग child class से parent class के methods और constructor को call करने के लिए किया जाता है।"
      },
      {
        id: 15,
        title: "Method Overloading",
        english: "Python does not support true method overloading. Similar behavior can be achieved using default arguments or `*args`.",
        hindi: "Python में वास्तविक Method Overloading नहीं होती। इसे default arguments या `*args` की मदद से किया जाता है।"
      },
      {
        id: 16,
        title: "Method Overriding",
        english: "Method overriding occurs when a child class provides its own implementation of a method already defined in the parent class.",
        hindi: "Method Overriding तब होती है जब child class, parent class के method को अपने तरीके से दोबारा define करती है।"
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
        hindi: "Magic Methods विशेष methods होते हैं जिन्हें Python विशेष operations के लिए अपने आप call करता है।"
      },
      {
        id: 18,
        title: "__init__",
        english: "`__init__` is the constructor method that initializes object data when an object is created.",
        hindi: "`__init__` constructor method है जो object बनने पर उसके data को initialize करता है।"
      },
      {
        id: 19,
        title: "__str__",
        english: "`__str__` returns a human-readable string representation of an object.",
        hindi: "`__str__` object का user-friendly string representation return करता है।"
      },
      {
        id: 20,
        title: "__repr__",
        english: "`__repr__` returns the official string representation of an object, mainly used for debugging.",
        hindi: "`__repr__` object का official representation return करता है, जिसका उपयोग मुख्य रूप से debugging में होता है।"
      },
      {
        id: 21,
        title: "__len__",
        english: "`__len__` returns the length of an object when `len()` is called.",
        hindi: "`__len__` method `len()` function द्वारा object की length return करता है।"
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
        hindi: "Access Modifiers यह नियंत्रित करते हैं कि class के variables और methods को कहाँ और कैसे access किया जा सकता है।"
      },
      {
        id: 23,
        title: "Public",
        english: "Public members can be accessed from anywhere inside or outside the class.",
        hindi: "Public members को class के अंदर और बाहर दोनों जगह से access किया जा सकता है।"
      },
      {
        id: 24,
        title: "Protected",
        english: "Protected members are indicated by a single underscore (`_`) and are intended for internal use within the class and its subclasses.",
        hindi: "Protected members के पहले एक underscore (`_`) लगाया जाता है। इन्हें class और उसकी child classes के अंदर उपयोग करने के लिए बनाया जाता है।"
      },
      {
        id: 25,
        title: "Private",
        english: "Private members are declared using double underscores (`__`) and cannot be accessed directly outside the class.",
        hindi: "Private members को double underscore (`__`) से declare किया जाता है और इन्हें class के बाहर से सीधे access नहीं किया जा सकता।"
      }
    ]
  }
];

export default topics;