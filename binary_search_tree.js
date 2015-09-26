function Node(val){
	this.value = val;
	this.left = null;
	this.right = null;
}

function BinarySearchTree(){
	this.root = null;
}

BinarySearchTree.prototype.insert = function(value){
	var current;
	var node = new Node(value);
	if(this.root === null){
		this.root = node;
	} else {
		current = this.root;
		while(true){
			if(value < current.value) {
				if(current.left === null) {
					current.left = node;
					break;
				} else {
					current = current.left;
				}
			} else if (value > current.value) {
				if(current.right === null) {
					current.right = node;
					break;
				} else {
					current = current.right;
				}
			//if the new value is equal to current, ignore
			} else {
				break;
			}
		}
	}
}

BinarySearchTree.prototype.contains = function(value){
	var found = false;
	var current = this.root;

	while(!found && current){
		if(value < current.value){
			current = current.left;
		} else if (value > current.value){
			current = current.right;
		} else {
			found = true;
		}
	}

	return found;
}

BinarySearchTree.prototype.print = function(){
	var node = this.root;
	var result = [];
	print_help(node);
	return result;

	function print_help(node){
		if(node != null){
			if(node.left != null){
				print_help(node.left);
			}
			result.push(node.value);
			if(node.right != null){
				print_help(node.right);
			}
		}
	}
}




var bst = new BinarySearchTree();
bst.insert(44);
bst.insert(1);
bst.insert(90);
bst.insert(22);
bst.insert(6);
bst.insert(5);
console.log(bst.contains(5));
console.log(bst.print());