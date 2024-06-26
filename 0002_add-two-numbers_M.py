# https://leetcode.com/problems/add-two-numbers/


# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        List = ListNode(0)
        head = List
        sum = 0
        carry = 0

        while l1 or l2 or sum > 0:
            if l1:
                sum += l1.val
                l1 = l1.next
            if l2:
                sum += l2.val
                l2 = l2.next
            if sum >= 10:
                carry = 1
                sum -= 10

            head.next = ListNode(sum)
            head = head.next

            sum = carry
            carry = 0
        return List.next
