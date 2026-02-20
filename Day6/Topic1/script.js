// function prointDOMTREE 

function printDOMTree(node,depth=0){
    if(!node) return;

    const indent =" ".repeat(depth);
    console.log(`${indent}${node.tagName} `||`${node.nodeName}`);

    node.childNodes.forEach(child=>{
        if(child.nodeType===1){
            printDOMTree(child,depth+1);
        }
    })
}

// printDOMTree(document.documentElement);

// Find Deepest Nested Node

function findDeepestNode(root){
    let maxDepth=0;

    let deepestNode=null;

    function traverse(node,depth){
        if(node.nodeType !== 1){
            return;
        }

        if(depth>maxDepth){
            maxDepth=depth;
            deepestNode=node;
        }
        console.log(node);
        const arr=Array.from(node.children);
        arr.forEach(child=> traverse(child,depth+1));

        
    }

    traverse(root,0);

    return {deepestNode,maxDepth};
}

// console.log(findDeepestNode(document.body));

//Count All Clickable Elements Dynamically

function countClickableElements() {
  const all = document.querySelectorAll("*");

  let count = 0;

  all.forEach(el => {
    const isClickable =
      el.tagName === "A" ||
      el.tagName === "BUTTON" ||
      (el.tagName === "INPUT" && el.type === "button") ||
      el.onclick !== null ||
      el.getAttribute("role") === "button" ||
      window.getComputedStyle(el).cursor === "pointer";

    if (isClickable) count++;
  });

  return count;
}

console.log("Clickable Elements:", countClickableElements());


// Detect Empty Nodes
function findEmptyNodes(root) {
  const emptyNodes = [];

  function traverse(node) {
    if (node.nodeType !== 1) return;

    const isEmpty =
      node.children.length === 0 &&
      node.textContent.trim() === "";

    if (isEmpty) emptyNodes.push(node);

    const arr=Array.from(node.children)
    arr.forEach(traverse);
  }

  traverse(root);
  return emptyNodes;
}

console.log(findEmptyNodes(document.body));




