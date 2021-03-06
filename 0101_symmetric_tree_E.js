// https://leetcode.com/problems/symmetric-tree/submissions/
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
// 1
// / \
// 2   2
// / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
// 1
// / \
// 2   2
// \   \
// 3    3

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
  if (!root) {
    return true;
  }
  const result = helper(root.left, root.right);
  return result;
};

const helper = (left, right) => {
  if (!left && !right) {
    return true;
  }
  if (!left || !right) {
    return false;
  }
  if (left.val === right.val) {
    return helper(left.left, right.right) && helper(left.right, right.left);
  }
  return false;
};
