#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the minimumSwaps function below.


def find(arr, a):
    for i in range(len(arr)):
        if (arr[i] == a):
            return i


def minimumSwaps(q, n):
    orilist = [j for j in range(1, n+1)]
    maxx = 0
    cnt = 0

    # for k in range(n, -1, -1):
    #     if
    # 把最大的換位子
    # for迴圈的第二個參數不會碰到
    # while (orilist != q):
    for k in range(n - 1, -1, -1):
        print(k, orilist[k], q[k])

        if (orilist[k] != q[k]):
            index = find(q, orilist[k])
            temp = q[k]
            q[k] = q[index]
            q[index] = temp
            # l.append([k,i,q])
            # if(q[i] > q[i+1]):
            #     # print(q[i+1], q[i], i , cnt, continuous)
            #     temp = q[i]
            #     q[i] = q[i+1]
            #     q[i+1] = temp
            cnt += 1

    return q


if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # n = int(input())
    n = 5

    # arr = list(map(int, input().rstrip().split()))
    arr = [2, 3, 4, 1, 5]
    res = minimumSwaps(arr, n)
    print(res)

    # fptr.write(str(res) + '\n')

    # fptr.close()
