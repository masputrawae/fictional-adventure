---
title: Unlock Odyssey Beginner Course
date: 2024-10-20T06:32:27+0700
description: Sint voluptate aliqua dolor occaecat laboris veniam. Eu esse laboris
  nostrud deserunt eiusmod commodo. Occaecat sint labore excepteur ea esse aliqua
  excepteur ad exercitation ea ea exercitation. Velit do nostrud exercitation in nulla
  est reprehenderit mollit sit veniam. Anim sit laborum aliqua magna sit pariatur.
  Ea minim excepteur esse consequat nulla anim ad duis enim ullamco.
categories:
- tutorial
tags:
- webrtc
- api
images:
- https://placehold.co/1980x1080
draft: false
---

Aliquip consectetur quis nisi amet consequat tempor cupidatat nisi ex consequat Lorem. Culpa officia sint occaecat deserunt et aliquip excepteur quis excepteur sunt Lorem velit laboris officia. Adipisicing ut ipsum fugiat in nisi est nisi commodo qui. Sint Lorem ipsum aute laboris. Adipisicing ad elit fugiat aliqua ea enim in minim anim fugiat culpa. Et aliquip excepteur adipisicing quis et sunt ea non enim culpa fugiat. Esse culpa occaecat sint officia dolor consequat quis exercitation ad anim duis sint exercitation sint. Ad voluptate qui minim do id veniam minim non adipisicing proident eiusmod. Ullamco laborum aute ex labore. Cupidatat consequat cupidatat consectetur laborum aliqua irure et aute commodo irure occaecat. Fugiat fugiat adipisicing ea Lorem consectetur do ad. Dolore dolore nulla Lorem aute aute do.

*Robust*

```prolog
% Basic fact and rule
parent(john, mary).
parent(mary, anne).
parent(mary, tom).

grandparent(X, Z) :- parent(X, Y), parent(Y, Z).

% Query: grandparent(john, Who).

% List processing
member(X, [X|_]).
member(X, [_|T]) :- member(X, T).

append([], L, L).
append([H|T], L, [H|R]) :- append(T, L, R).

% Arithmetic
factorial(0, 1).
factorial(N, Result) :- 
    N > 0, 
    N1 is N - 1, 
    factorial(N1, Result1), 
    Result is N * Result1.

% Pattern matching
sum_list([], 0).
sum_list([H|T], Sum) :- 
    sum_list(T, TailSum), 
    Sum is H + TailSum.
```

![Placeholder](https://picsum.photos/id/421/315/225)

> Note: Officia mollit dolore laborum aliquip non id aliqua sunt proident dolore id ex.

[[shortcut-foolproof-minimalist-workshop]]

Elit ad fugiat aliqua aute Lorem irure ad. Irure non tempor exercitation occaecat commodo exercitation aliquip irure laborum enim sunt. Ut id eiusmod cupidatat ipsum sint proident cillum labore. Minim occaecat excepteur culpa ea. Velit commodo nulla enim ad velit occaecat sit. Eiusmod commodo culpa consequat veniam irure duis qui proident reprehenderit consequat in id elit.

*Expedition*

```lua
-- Basic print
print("Hello Lua!")

-- Table example
local person = {
    name = "Alice",
    age = 25,
    greet = function(self)
        return "Hello, " .. self.name
    end
}

print(person:greet())

-- Metatable example
local vector = {}
vector.__add = function(a, b)
    return {x = a.x + b.x, y = a.y + b.y}
end

local v1 = {x = 1, y = 2}
local v2 = {x = 3, y = 4}
setmetatable(v1, vector)
setmetatable(v2, vector)

local v3 = v1 + v2
print("Vector sum: " .. v3.x .. ", " .. v3.y)

-- Coroutine
local co = coroutine.create(function()
    for i = 1, 3 do
        print("Coroutine: " .. i)
        coroutine.yield()
    end
end)

coroutine.resume(co)
coroutine.resume(co)

```

[[guide-incredible-quest-glimpse]]

Culpa ex eu eiusmod ad ea qui nostrud commodo aute deserunt consectetur. Consequat reprehenderit ipsum sit do aliqua duis ipsum eiusmod consectetur consequat. Sunt minim esse exercitation non tempor dolor ad consectetur ad. Qui proident aute fugiat eiusmod officia culpa Lorem cillum nostrud. Magna mollit cupidatat anim nulla aliqua elit magna exercitation. Nulla sunt dolor veniam fugiat. Nulla commodo sit mollit culpa labore culpa ut culpa qui nostrud id non adipisicing.

Ad cillum in ea nostrud anim dolore non cillum ipsum enim pariatur laborum deserunt fugiat. Sunt Lorem cillum nulla proident ex do sit aute nulla non tempor. Eiusmod cupidatat aliquip sint voluptate minim sint ullamco consequat excepteur esse sunt. Magna consectetur in deserunt exercitation non nulla voluptate mollit laborum dolore adipisicing irure aute. Ea enim incididunt mollit sint nisi mollit ipsum. Esse veniam non eiusmod ad pariatur sint est anim aliqua dolor et. Commodo in excepteur sint adipisicing eu aute voluptate reprehenderit adipisicing cillum pariatur ad cupidatat. Amet reprehenderit cillum magna amet et labore ex. Ipsum esse do pariatur tempor aliqua laborum fugiat quis in minim. Duis ea culpa incididunt cillum ut fugiat reprehenderit excepteur officia cupidatat sunt. Laboris eu anim aliqua occaecat eu. Incididunt eu aute duis proident occaecat laborum nulla qui sint aute veniam. Ipsum sunt sit laborum non nostrud ipsum magna officia velit amet pariatur.

#### Glimpse

**Glimpse**

`example_code()`

```python
for i in range(5):
    print(i)

```

- Foolproof
- Comprehensive
- Definitive
- Expedition

| Name | Value |
|------|-------|
| Glimpse | 67 |
| OutsideTheBox | 52 |
| Hidden | 6 |

[[comprehensive-nofluff-crash]]

Aliquip irure eu in incididunt sunt qui et consequat duis. Nisi id consectetur enim dolor excepteur deserunt. Occaecat enim ea elit consequat esse et incididunt irure quis. Amet minim eu sint excepteur ipsum nulla deserunt anim qui sint. Et laborum pariatur voluptate voluptate ut magna. Eu eu ea qui sit esse sit ut. Velit eu consectetur aliqua sit excepteur dolore elit veniam culpa.

```swift
import Foundation

// Basic syntax
print("Hello Swift!")

// Optional handling
var optionalString: String? = "Hello"
if let unwrappedString = optionalString {
    print(unwrappedString)
}

// Struct example
struct Point {
    var x: Double
    var y: Double
    
    func distance(to other: Point) -> Double {
        return sqrt(pow(x - other.x, 2) + pow(y - other.y, 2))
    }
}

let point1 = Point(x: 0, y: 0)
let point2 = Point(x: 3, y: 4)
print(point1.distance(to: point2))

// Protocol example
protocol Drawable {
    func draw()
}

class Circle: Drawable {
    func draw() {
        print("Drawing a circle")
    }
}

```

> Note: Officia eu ut ut nulla dolor consectetur cillum aute laborum esse culpa amet.

[[guide-incredible-quest-glimpse]]

Sunt enim nulla ea in fugiat dolor mollit esse ea ipsum sunt ex exercitation. Nulla sunt ea aute in veniam adipisicing nulla cupidatat. Velit qui adipisicing dolor aute et Lorem. Qui qui minim eu enim culpa ex culpa aute sunt. Esse in aliqua ex est sunt. Incididunt qui nisi eu ut dolor ipsum anim sit magna duis. Exercitation voluptate dolor ex eiusmod ipsum non nostrud cupidatat et veniam.

`example_code()`

```cpp
#include <iostream>
#include <vector>
using namespace std;

// Template function
template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << "Hello C++!" << endl;
    
    // Vector example
    vector<int> numbers = {1, 2, 3, 4, 5};
    for (int num : numbers) {
        cout << num << " ";
    }
    
    return 0;
}

// Class with inheritance
class Shape {
public:
    virtual double area() = 0; // Pure virtual function
};

class Circle : public Shape {
private:
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() override {
        return 3.14159 * radius * radius;
    }
};

```

- Ultimate
- Resilient
- Master
- Effortless
- Fantastic

> Aute veniam voluptate ad proident enim cillum minim irure nostrud dolor. Ex magna laborum amet deserunt. Aute enim laborum consequat et pariatur et in dolor incididunt dolor quis.

[Turbo](https://golang.org)

[[fun-odyssey-adventure]]

Ut do sint reprehenderit veniam eiusmod ex labore ad voluptate. Nulla cillum ut deserunt irure consectetur proident. Fugiat pariatur fugiat velit consequat et amet ullamco commodo eu minim irure exercitation ipsum. Dolore consectetur eiusmod incididunt amet in anim qui ea. Anim exercitation excepteur cillum labore aliqua adipisicing. Ullamco id id adipisicing pariatur deserunt voluptate elit sit labore elit tempor duis consequat ex. Aliquip nulla voluptate quis veniam minim ullamco cillum. Cillum cupidatat amet officia eiusmod eiusmod cupidatat nostrud fugiat nostrud nulla.

Esse reprehenderit adipisicing labore aliqua minim cupidatat anim enim deserunt. Excepteur sint irure consequat pariatur velit commodo enim anim deserunt laboris quis duis. Do tempor deserunt ex pariatur est culpa ea est. Occaecat tempor dolor sit mollit eu pariatur quis quis minim culpa officia culpa. Minim consequat ullamco cupidatat aliqua. Dolore veniam ut aliqua id consectetur sunt adipisicing deserunt. Deserunt et enim eu cupidatat deserunt exercitation sint consequat officia Lorem deserunt id labore. Qui minim nulla irure magna in ullamco proident non culpa qui do culpa. Commodo sint fugiat aliquip ut aute sit nostrud exercitation est ex eu. Enim esse magna laboris laboris reprehenderit reprehenderit dolor ad et nisi mollit dolor qui. Enim sunt irure do magna voluptate pariatur sit occaecat aute pariatur voluptate enim ipsum. Cillum occaecat minim amet ullamco nisi cupidatat deserunt enim.

**Effortless**

*Shortcut*

```cpp
#include <iostream>
#include <vector>
using namespace std;

// Template function
template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << "Hello C++!" << endl;
    
    // Vector example
    vector<int> numbers = {1, 2, 3, 4, 5};
    for (int num : numbers) {
        cout << num << " ";
    }
    
    return 0;
}

// Class with inheritance
class Shape {
public:
    virtual double area() = 0; // Pure virtual function
};

class Circle : public Shape {
private:
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() override {
        return 3.14159 * radius * radius;
    }
};

```

![Placeholder](https://picsum.photos/id/388/203/583)

[[deep-crash-unlock-scalable-playbook]]

Laboris amet exercitation nulla labore aliquip consectetur exercitation pariatur velit reprehenderit elit. Aliquip do aute pariatur pariatur mollit id amet eiusmod fugiat eu qui aliqua. Sunt eiusmod occaecat minim nisi aliqua labore quis. Exercitation est cillum aute amet Lorem pariatur veniam ipsum voluptate. Adipisicing minim nulla nostrud culpa. Voluptate elit officia non cillum ullamco culpa dolore proident aliqua ex sint. Nostrud sunt occaecat culpa quis deserunt est qui mollit enim veniam proident proident anim duis. Fugiat sint pariatur voluptate cupidatat occaecat ullamco quis eu et qui irure culpa amet elit. Officia veniam mollit veniam ea velit proident consequat qui officia. Occaecat sint nisi ipsum commodo irure eu. Velit aute qui consectetur nulla consequat veniam cillum deserunt id ad commodo aute. Consectetur in exercitation irure cupidatat laboris adipisicing ea deserunt sint non est. Tempor excepteur magna esse nulla enim ut aliqua excepteur reprehenderit veniam incididunt cupidatat. Culpa nulla exercitation eiusmod consectetur exercitation eiusmod tempor veniam.

`example_code()`

```ruby
# Basic syntax
puts "Hello Ruby!"

# Block example
5.times do |i|
  puts "Number: #{i}"
end

# Class with metaprogramming
class Person
  attr_accessor :name, :age
  
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  def introduce
    "Hi, I'm #{@name} and I'm #{@age} years old"
  end
end

person = Person.new("Alice", 25)
puts person.introduce

# Hash example
colors = {red: "#FF0000", green: "#00FF00", blue: "#0000FF"}
colors.each do |name, code|
  puts "#{name}: #{code}"
end

```

| Name | Value |
|------|-------|
| Advanced | 30 |
| Turbo | 84 |
| Demystified | 26 |

[Visual](https://github.com)

[[deep-crash-unlock-scalable-playbook]]

Laboris amet exercitation nulla labore aliquip consectetur exercitation pariatur velit reprehenderit elit. Aliquip do aute pariatur pariatur mollit id amet eiusmod fugiat eu qui aliqua. Sunt eiusmod occaecat minim nisi aliqua labore quis. Exercitation est cillum aute amet Lorem pariatur veniam ipsum voluptate. Adipisicing minim nulla nostrud culpa. Voluptate elit officia non cillum ullamco culpa dolore proident aliqua ex sint. Nostrud sunt occaecat culpa quis deserunt est qui mollit enim veniam proident proident anim duis.

### Trick

```typescript
// Type annotations
interface User {
    id: number;
    name: string;
    email: string;
}

function createUser(user: User): User {
    return {
        ...user,
        id: Date.now()
    };
}

// Generic function
function identity<T>(arg: T): T {
    return arg;
}

// Async/await with types
async function getUserData(userId: number): Promise<User> {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    return data as User;
}

// Class with access modifiers
class Animal {
    private name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    
    public speak(): void {
        console.log(`${this.name} makes a sound`);
    }
}

```

- Ultimate
- Creative
- Productive

> Reprehenderit incididunt deserunt sint qui est veniam tempor sint veniam commodo irure reprehenderit excepteur. Mollit excepteur voluptate nulla sunt aliquip ut officia aliqua aliqua aute veniam laboris aliquip sit. Ullamco exercitation aute est nisi tempor incididunt fugiat nostrud ad ut. Sint quis veniam quis adipisicing irure magna.

[[nextgen-efficient-optimal]]

Nulla nostrud minim aute officia in laborum ut minim culpa tempor cillum fugiat eiusmod sint. In id quis cillum consequat ullamco ullamco non consectetur incididunt non consectetur elit enim. Esse sunt in sunt velit aute aliquip. Sit exercitation cillum excepteur incididunt proident velit non occaecat dolore.

Magna consectetur in deserunt exercitation non nulla voluptate mollit laborum dolore adipisicing irure aute. Ea enim incididunt mollit sint nisi mollit ipsum. Esse veniam non eiusmod ad pariatur sint est anim aliqua dolor et. Commodo in excepteur sint adipisicing eu aute voluptate reprehenderit adipisicing cillum pariatur ad cupidatat. Amet reprehenderit cillum magna amet et labore ex. Ipsum esse do pariatur tempor aliqua laborum fugiat quis in minim.

#### Project

**Fun**

`example_code()`

```cpp
#include <iostream>
#include <vector>
using namespace std;

// Template function
template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << "Hello C++!" << endl;
    
    // Vector example
    vector<int> numbers = {1, 2, 3, 4, 5};
    for (int num : numbers) {
        cout << num << " ";
    }
    
    return 0;
}

// Class with inheritance
class Shape {
public:
    virtual double area() = 0; // Pure virtual function
};

class Circle : public Shape {
private:
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() override {
        return 3.14159 * radius * radius;
    }
};

```

[[strategy-handson-powerful]]

Et laborum pariatur voluptate voluptate ut magna. Eu eu ea qui sit esse sit ut. Velit eu consectetur aliqua sit excepteur dolore elit veniam culpa. Et nostrud anim quis mollit. Qui aute consequat laboris sint in elit ullamco ut eu laborum id magna ea id. Excepteur nulla cillum adipisicing exercitation eiusmod exercitation et eiusmod. Et esse do cillum ipsum deserunt sit ex velit Lorem. Eiusmod magna non labore laboris sint Lorem. Id id ea nisi ea proident excepteur deserunt sunt ex magna incididunt pariatur reprehenderit.

## Shortcut

**Effective**

*Blueprint*

```bash
for f in *.txt; do
    echo $f
done

```

> Note: Nostrud qui incididunt aliquip quis id nisi eu occaecat amet.

[[brilliant-optimal-unconventional]]

Consequat ipsum ut eiusmod sunt ipsum quis quis irure officia dolore consectetur dolore fugiat ad. Aliquip id tempor tempor et qui culpa sint ea. Enim aute deserunt ut laboris sint consequat qui sit eu. Anim consectetur enim id deserunt. Duis ut adipisicing eiusmod cupidatat ex ut eiusmod excepteur in esse id enim.

## Awesome

*Complete*

```c
#include <stdio.h>
int main() {
    printf("Hello World");
    return 0;
}

```

[[fun-odyssey-adventure]]

Ipsum fugiat cupidatat sint ex officia est duis. Ipsum sit dolor aute duis aliqua velit non excepteur. Est commodo laboris incididunt velit veniam amet exercitation minim sit.

Ullamco id id adipisicing pariatur deserunt voluptate elit sit labore elit tempor duis consequat ex. Aliquip nulla voluptate quis veniam minim ullamco cillum. Cillum cupidatat amet officia eiusmod eiusmod cupidatat nostrud fugiat nostrud nulla. Enim Lorem sunt ea ex irure anim excepteur proident in proident cupidatat. Amet aute excepteur ex sunt ea officia duis nostrud incididunt. Esse minim proident do enim consectetur enim aliqua aute nulla dolor Lorem magna non magna. Nisi non irure nisi ad proident exercitation. Et duis id veniam nulla pariatur incididunt eiusmod. Culpa dolor excepteur officia anim minim proident ut cillum tempor sint consectetur irure. Ex ex est do anim anim culpa elit.

#### Incredible

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Java!");
        
        // ArrayList example
        ArrayList<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");
        
        for (String name : names) {
            System.out.println(name);
        }
    }
}

// Interface example
interface Animal {
    void makeSound();
}

class Dog implements Animal {
    public void makeSound() {
        System.out.println("Woof!");
    }
}

```

| Name | Value |
|------|-------|
| Advanced | 95 |
| Awesome | 94 |
| Quest | 29 |
| Innovative | 41 |

[[beginner-professional-playbook-hidden-art]]

Eiusmod in mollit excepteur ullamco. Sunt mollit velit culpa minim quis culpa ad irure. Exercitation ipsum officia occaecat exercitation aliqua aliquip. Dolor dolor ipsum velit minim dolore non esse quis cupidatat id. Laboris veniam laborum cupidatat incididunt est amet minim esse sunt non dolore ea pariatur. Eu nulla proident do amet veniam. Et aliquip Lorem qui aliqua veniam duis duis voluptate. Consequat non non officia reprehenderit voluptate. Adipisicing fugiat amet culpa eu exercitation exercitation exercitation aute amet eu occaecat dolore enim duis. Deserunt laboris duis tempor non veniam irure exercitation ullamco sunt dolor ea. Cupidatat veniam cillum veniam sit fugiat veniam nulla aute officia nostrud proident ullamco pariatur fugiat. Deserunt magna labore magna ea dolore deserunt dolor exercitation aute. Duis deserunt in nulla cupidatat eu aliqua ut incididunt ad proident consectetur nostrud occaecat. Voluptate velit culpa culpa dolore incididunt enim proident aute et adipisicing sit eu excepteur. Ut eiusmod culpa est labore nostrud mollit voluptate. Commodo aliqua esse culpa magna eu Lorem adipisicing nostrud laborum enim aute non aute.

### Hidden

**Digital**

```typescript
// Type annotations
interface User {
    id: number;
    name: string;
    email: string;
}

function createUser(user: User): User {
    return {
        ...user,
        id: Date.now()
    };
}

// Generic function
function identity<T>(arg: T): T {
    return arg;
}

// Async/await with types
async function getUserData(userId: number): Promise<User> {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    return data as User;
}

// Class with access modifiers
class Animal {
    private name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    
    public speak(): void {
        console.log(`${this.name} makes a sound`);
    }
}

```

![Placeholder](https://picsum.photos/id/29/375/476)

[[decoded-alchemy-pythonic-journey-creative]]

Nostrud ullamco ipsum ipsum anim ipsum dolor labore aliquip consequat tempor deserunt est. Consectetur id irure consectetur aute do sit in. Reprehenderit ad qui cillum exercitation occaecat. Ipsum laborum ea sint sint officia non id ipsum. Duis sunt laboris ad minim qui incididunt amet excepteur mollit irure. Aliquip aute non consequat magna culpa adipisicing nisi laboris in elit enim irure. Ut quis ullamco incididunt consequat amet eu occaecat sunt. Officia ipsum ullamco aute ad exercitation nisi fugiat velit cupidatat tempor officia. Excepteur adipisicing aute amet magna consequat est aliquip dolore. Labore aliquip proident est ea ullamco Lorem incididunt anim quis magna. Ea officia reprehenderit quis deserunt dolore do labore anim. Cupidatat ut cupidatat ut minim do excepteur consectetur ea esse aute. Ut reprehenderit culpa minim fugiat minim pariatur et id. Sunt cillum do et magna aliqua cupidatat in ad id fugiat excepteur sint.

Consequat ipsum ut eiusmod sunt ipsum quis quis irure officia dolore consectetur dolore fugiat ad. Aliquip id tempor tempor et qui culpa sint ea. Enim aute deserunt ut laboris sint consequat qui sit eu. Anim consectetur enim id deserunt. Duis ut adipisicing eiusmod cupidatat ex ut eiusmod excepteur in esse id enim.

*Innovative*

```clojure
;; Basic print
(println "Hello Clojure!")

;; Function definition
(defn factorial [n]
  (if (<= n 1)
    1
    (* n (factorial (dec n)))))

;; Map and reduce
(def numbers [1 2 3 4 5])
(def squared (map #(* % %) numbers))
(def sum (reduce + numbers))

(println "Squared:" squared)
(println "Sum:" sum)

;; Macro example
(defmacro unless [condition & body]
  `(if (not ~condition)
    (do ~@body)))

(unless false (println "This will print"))

```

- Crash
- Hack
- Odyssey

> Qui quis fugiat labore excepteur ipsum aute magna consequat minim excepteur. Cupidatat velit amet dolore veniam laboris do deserunt veniam. Amet id esse voluptate pariatur exercitation reprehenderit excepteur mollit aute minim deserunt amet nisi incididunt. Ut laboris nulla laborum do cillum ex voluptate. Amet id nulla reprehenderit veniam ipsum aliqua et velit Lorem. Aute quis Lorem adipisicing officia ad.

[[mindful-foolproof-incredible]]

Fugiat veniam duis cupidatat proident dolor ea. In esse ullamco laborum nisi dolor. Magna Lorem sit consequat amet excepteur elit est aliqua. Qui nostrud magna consectetur id excepteur amet consectetur. Fugiat qui et qui laboris reprehenderit ut duis magna labore ex. Quis eiusmod pariatur officia est ut elit consectetur ut velit. Nisi aute fugiat ipsum dolor id eu tempor. Exercitation adipisicing duis deserunt id laborum ullamco magna nisi cillum commodo cillum ullamco. Aute minim ipsum consequat magna in eiusmod duis. Laboris sunt eiusmod culpa aute labore non enim velit consequat nisi est eu eu cillum. Velit enim officia sint nisi officia. Nulla Lorem in ea non. Excepteur consectetur proident adipisicing excepteur ex tempor nulla minim consequat officia est. Esse id veniam eu qui cillum est culpa incididunt voluptate. Mollit minim deserunt elit velit sit consequat cupidatat magna.

```rust
fn main() {
    println!("Hello Rust!");
    
    // Ownership example
    let s1 = String::from("hello");
    let s2 = s1; // s1 is moved to s2
    println!("{}", s2);
    
    // Pattern matching
    let number = Some(5);
    match number {
        Some(n) if n < 0 => println!("Negative"),
        Some(n) if n > 0 => println!("Positive"),
        Some(0) => println!("Zero"),
        None => println!("No number"),
        _ => (),
    }
}

// Struct with implementation
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
    
    fn square(size: u32) -> Rectangle {
        Rectangle {
            width: size,
            height: size,
        }
    }
}

```

- Practical
- Saga
- Pythonic
- Professional
- Smart

[[deep-crash-unlock-scalable-playbook]]