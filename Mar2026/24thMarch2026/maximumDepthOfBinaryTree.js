class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const maximumDepth = (root) => {
  if (root === null) return 0;
  let leftDepth = maximumDepth(root.left);
  let rightDepth = maximumDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);

console.log(maximumDepth(root));
