function Node(val){
	this.value = val;
	this.next = null;
}

function SinglyLinkedList(){
	this.head = null;
	this.length = 0;
}

SinglyLinkedList.prototype.push = function(val){
	var current;
	var node = new Node(val);
	if(!this.head){
		this.head = node;
	} else {
		current = this.head;
		while(current.next){
			current = current.next;
		}
		current.next = node;
	}
	this.length++;
}

SinglyLinkedList.prototype.item = function(index){
	var i = 0;
	var current;
	if(index > -1 && index < this.length){
		current = this.head;
		while(i < index){
			current = current.next;
			i++;
		}
		return current.value;
	} else {
		return null;
	}
}

SinglyLinkedList.prototype.remove_val = function(val){
	var current = this.head;
	var previous;
	if(current.value == val){
		this.head = current.next;
		current.next = null;
	} else {
		while(current && current.value != val){
			previous = current;
			current = current.next;
		}
		previous.next = current.next;
		current.next = null;
		this.length--;
	}
}

SinglyLinkedList.prototype.remove_index = function(index){
	var i = 0;
	var current = this.head;
	var previous;
	if(index > -1 && index < this.length){
		if(index == 0){
			this.head = current.next;
			current.next = null;
		} else {
			while(current && i++ < index){
				previous = current;
				current = current.next;
			}
		}
		previous.next = current.next;
		current.next = null;
		this.length--;
	} else {
		return null;
	}
}

SinglyLinkedList.prototype.reverse = function(){
	var current = this.head;
	var previous = null;
	var save;

	while(current){
		save = current.next;
		current.next = previous;
		previous = current;
		current = save;
	}
	this.head = previous;
}

SinglyLinkedList.prototype.print = function(){
	var current = this.head;
	var result = [];
	while(current){
		result.push(current.value);
		current = current.next;
	}
	return result;
}


var sll = new SinglyLinkedList();
sll.push("Red");
sll.push("Orange");
sll.push("Yellow");
sll.push("Green");
sll.push("Blue");
sll.push("Black");
sll.push("Indigo");
sll.push("Pink");
sll.push("Violet");
console.log(sll.print());
console.log(sll.item(0));
console.log(sll.item(1));
console.log(sll.item(5));
sll.remove_val("Black");
console.log(sll.print());
console.log(sll.item(6));
sll.remove_index(6);
console.log(sll.print());
sll.reverse();
console.log(sll.print());