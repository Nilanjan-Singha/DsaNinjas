// if anybody is reading this js filw, ignore the comments, i wrote it to figure out what is actually going on coz i forget shit quickly


// const start= document.querySelector(".intro");
// console.log(start);

//solutions

const solutions = {
    
   sol1: ` PYTHON FUNCTION<br> <br>
               <code><pre> def longestSatisfactionStreak(satisfaction):
               max_streak = 0  # Initialize the maximum streak length
               current_streak = 0  # Initialize the current streak length
               for rating in satisfaction:
                  if rating > 7:
                        current_streak += 1
                        max_streak = max(max_streak, current_streak)
                  else:
                        current_streak = 0
               return max_streak
                   </pre></code>
            `,
   
   sol2: 'Yes there is a syntax error in the code. The syntax 0 [arr] and 1 [arr] are not valid in C++. The correct syntax to access array elements is arr[0] and arr[1].',
   
   
   
   sol4: `PYTHON <br>
         C and C++ are statically typed languages, meaning variable types are determined at compile time.
         Java is also statically typed, as types are explicitly declared and checked at compile time.
         Python is dynamically typed, meaning variable types are determined at runtime`,
   
   sol5: `HINT:
   A. Sort arr in ascending order and return arr[k-1]. Time Complexity:  O(nlogn)
   B. Use a max-heap to keep the k smallest elements. Time Complexity: O(nlogk)
   C. Use a min-heap to extract the smallest element k times. Time Complexity: O(klogn)
   D. Use the Quickselect algorithm, which has an average Time Complexity of 
   O(n)`,
   
   sol6: ` c) O(1) <br><br>
            Explanation: A hash table provides constant-time average performance for search operations, 
            meaning the time to search for an element does not depend on the number of elements in the table. 
            This is because a hash function is used to compute an index where the element is stored, and accessing
            that index directly takes constant time.`,
   
   sol7: `b) The array must be sorted <br><br>
            Explanation: Binary search works by repeatedly dividing the search interval in half. To do this efficiently, the array must be sorted (either in ascending or descending order) so that you can decide whether to search the left or right half based on the comparison with the middle element. <br><br>
            Also, Binary search can work on arrays containing any type of comparable elements (integers, floats, strings, etc.), as long as the array is sorted. Binary search can work on arrays with duplicate elements.
             The number of elements in the array (even or odd) does not impact the ability to perform binary search.`,
   
   sol8: `The output will be: N ! <br><br>
         Explanation:
         - "Noobuild!"[0] accesses the first character of the string "Noobuild!", which is 'N'. <br>
         - "Noobuild!"[8] accesses the ninth character (index 8) of the string, which is '!'.`,
   
   sol9: `All of them are correct. <br><br>
      Explanation: <br>
         1. Arrays have better cache locality than linked lists because their elements are stored in contiguous memory locations.<br>
         2. Insertion and deletion are easier with linked lists since there’s no need to shift other elements. <br>
         3. Arrays allow random access through indexing, whereas linked lists do not support direct access to elements.<br>
         4. Static arrays have a fixed size, while linked lists can dynamically grow or shrink, reducing memory wastage and the risk of overflow.`,
   
   sol10: `Stack <br><br>
            Explanation: Recursion uses the stack data structure to store function calls. The stack follows the LIFO principle, which makes it ideal for storing function calls because the last function call gets executed first.`,
   
   sol11: ` c) A binary tree that's completely filled, except for the bottom level, which is filled left to right. <br><br>
            Explanation:<br>
            👉 Tree: A non-linear data structure that represents a hierarchical model of nodes connected by edges. <br>
            👉 Binary Tree: A tree in which each node has a maximum of two children.<br>
            👉 Full Binary Tree: A binary tree where each node has either zero or exactly two children.<br>
            👉 Complete binary tree:  A binary tree, which is completely filled, with the possible exception of the bottom level. The bottom level may or may not be completely filled & if it is partially filled then the filling is done strictly from left to right`,
   
   sol12: `10 Bytes <br><br>
   Explanation: On 16-bit system an integer data takes up 2 bytes. So, an array of 5 integers will take up 5*2 = 10 bytes.`,
   
   sol13: ` c) Class-based object.<br><br>
            Explanation: In C++, the string type is part of the Standard Template Library (STL) and is implemented as a class (std::string) . That's why we can call different methods like size() , substr() , .find() etc. on a string.<br>
            👉 C: Strings are arrays of characters with a null terminator ( '\0' ) at the end.<br>
            👉 C++: string is an object of the std::string class, part of the Standard Template Library (STL).<br>
            👉 Java: String is an object of the String class defined in java.lang.String package .`,
   
   sol14: ` Linked lists <br><br>
            Explanation: Linked lists can represent polynomials efficiently because each node can store a term's coefficient and exponent. This structure allows traversal, term-by-term addition, and insertion of terms at any position.`,
   
   sol15: `Stack <br><br>
            Explanation: When checking for balanced parentheses, the stack data structure efficiently allows us to: <br>
            * Push each opening parenthesis onto the stack.<br>
            * Pop a matching opening parenthesis from the stack when encountering a closing parenthesis.<br>
            If, at the end of the expression, the stack is empty and all characters were matched correctly, the parentheses are balanced. This Last-In-First-Out (LIFO) behavior of stacks is ideal for this type of matching problem.`,
   
   sol16: `Answer: 4, 6, 2, 5, 1, 7, 3, 8 <br><br>
               Explanation: In an inorder traversal, we visit nodes in the following order:<br>
               1. Left subtree  
               2. Root node
               3. Right subtree <br><br>
               1. Start at node 1:
                  - Go to the left subtree (2).<br>
               2. At node 2: 
                  - Go to the left subtree (4).<br>
               3. At node 4:
                  - Visit 4.
                  - Go to the right subtree (6) and visit it. <br>
               4. Return to 2 and visit it.
                  - Go to the right subtree (5) and visit it.<br>
               5. Return to the root 1 and visit it.
                  - Go to the right subtree (3).<br>
               6. At node 3:
                  - Go to the left subtree (7) and visit it.
                  - Return to 3 and visit it.
                  - Go to the right subtree (8) and visit it.`,
   
   sol17:`O(n)<br><br>
               Explanation: The insertion or deletion of an element at the beginning of an array has a time complexity of O(n).
               In the case of insertion, all other elements must be shifted one position to the right to create space for the new element.
               Similarly, for deletion, all other elements must be shifted one position to the left.`,
   
   sol18:`O(n)<br><br>
                Explanation: Reversing a string using swapping requires n/2 iterations, as it swaps characters from both ends toward the center. In contrast, the copy method processes all n characters to create a new reversed string. Both approaches have a time complexity of O(n) , but swapping is more efficient due to fewer iterations and operations.`,
   
   sol19:`None of the above <br><br>
               Explanation: To reverse a linked list, we need to traverse the whole linked list and update the pointers, which will take O(n) time.`,
   
   sol20:`Stack <br><br>
               Explanation: Recursion uses the call stack to store information about function calls, including local variables and return addresses.`,
   
   
   sol21: `O(log n) <br><br>
                  Explanation: The height of a complete binary tree with n nodes is [ log₂(n) ],
                  which is O(log n).`,
   
   sol22:`Wastage of memory if the elements inserted in an array are lesser than the allocated size. <br><br>
                  Explanation: For example, if we have an array of size 10 elements and we have inserted only 5 elements in an array then there is a wastage of 5 memory blocks which cannot be utilized by another variable.`,
   
   sol23:`9 <br><br>
               Explanation: The given code calculates the sum of elements at even indices (0, 2, 4) in the array a initialized as {1, 2, 3, 4, 5}. Using a for loop, it iterates through the array, and the if (i % 2 == 0) condition ensures that only elements at even indices are added to sum. Specifically, the elements a[0] = 1, a[2] = 3, and a[4] = 5 are added, resulting in a total sum of 1 + 3 + 5 = 9. Thus, the output of the program is 9.`,
   
   sol24: `Answer: Stack <br><br>
               Explanation: Stacks are used for palindrome checking because they reverse the order of characters due to their LIFO nature. By pushing characters onto the stack and popping them, you can compare the original string with its reverse efficiently`,
   
   sol25: `Access of elements in linked list takes less time than compared to arrays <br><br>
            Explanation: To access an element in a linked list, we need to traverse every element until we reach the desired element. This will take more time than arrays as arrays provide random access to its elements.`,
   
   sol26:`Counting Sort <br><br>
            Explanation: Counting sort sorts an array in O(n) time complexity, taking up an extra space complexity of O(max(a[i])) .`,
   
   sol27: `Collision <br><br>
            Explanation: Well, there is no explanation. It's just a definition; you have to remember it. <br><br>
   
               A) Clustering:
               Occurs when multiple keys are assigned to adjacent slots in a hash table, often due to poor hash function or collision resolution methods like linear probing.<br>
   
               B) Collation:
               Not directly related to hashing; it refers to arranging data in a specific order, typically for sorting or comparison.<br>
   
               C) Collision:  
               Occurs when two or more distinct keys hash to the same index in a hash table.<br>
   
               D) Chaining:  
               A collision resolution technique where multiple elements hashing to the same index are stored in a linked list or similar data structure at that index.
               `,
   
   sol28:`-18 <br><br>
               Explanation: <br>
               6 3 2 4 + - *   (2 + 4 = 6) <br>
               = 6 3 6 - *     (3 - 6 = -3)    <br> 
               = 6 -3 *         (6 * -3 = -18)   <br>
               = -18`,
   
   sol29: ` Queue <br><br>
            Explanation: Level-order traversal involves visiting nodes level by level, from left to right at each level.
            A queue follows the FIFO (First In, First Out) principle, which helps in processing nodes in the same order they appear at each level.`,
   
   sol30: `Single-source shortest path problem <br><br>
               Explanation : Dijkstra's algorithm finds the shortest path from a single source vertex to all other vertices in a graph`,
   
   sol31: `Floyd-Warshall algorithm <br><br>
               Explanation: The Floyd-Warshall algorithm is specifically designed to solve the all-pairs shortest path problem by finding shortest paths between every pair of vertices in a weighted graph.`,
   
   sol32 : `O(n) <br><br>
               Explanation: Function for finding the height of a binary tree: <br><br>
               <code>
               int findHeight(TreeNode* root) { <br>
                  if (!root) return -1; // Base case: empty tree <br>
                  return max(findHeight(root->left), findHeight(root->right)) + 1;}</code>`,
   
   sol33: `T(n) = T(n-1) + O(n) <br><br>
               Explanation: The worst case of Quick Sort occurs when the pivot is the smallest or largest element, leading to highly unbalanced partitions.`,
   
   sol34: `O(n) <br><br>
               Explanation: The recursive function reduces the input size by half at each step and makes two recursive calls. At each level of recursion, the number of calls doubles while the input size decreases. The recurrence T(n) = 2T(n/2) + O(1) shows that the total work at each level is proportional to n. Adding up the work across all levels gives the overall time complexity as O(n).`,
   
   sol35: `All of the above <br><br>
               Explanation: <br>
               1. LinkedLists can implement stacks and queues using head or tail operations.  <br>
               2. Binary trees use nodes with references to left and right children, which can be implemented using a LinkedList structure. <br>  
               3. LinkedLists simulate dynamic arrays by allowing dynamic memory allocation.`,
   
   sol36: `Use two pointers to find the boundaries of the unsorted subarray. or
               Use a stack to find the boundaries of the unsorted subarray. <br><br>
               Explanation: The problem can be efficiently solved using either the two-pointer approach or a stack, both of which operate in  time. The two-pointer method works by identifying the boundaries of the unsorted subarray in a single pass from both ends. Similarly, using a stack helps efficiently track indices of out-of-order elements to determine the boundaries. These approaches are optimal compared to sorting or nested loops, which are slower and do not meet the  constraint.`,
   
   sol37: `O(n²) <br><br>
               Explanation: The algorithm contains two nested loops, each running n times. The inner loop executes once for every iteration of the outer loop, resulting in a total of n x n =n² iterations. Since the operation inside the loop is O(1), the overall time complexity is O(n²).`,
   
   sol38: `O(n) <br><br>
               Explanation: The outer loop starts with i = n and halves i in each iteration   (i /= 2), making it logarithmic in nature. It runs approximately log₂(n) times.The inner loop runs from j = 0 to j < i. For each value of i, the inner loop executes i times.The total number of iterations is the sum of the inner loop's executions over all outer loop iterations: 
               n+(n/2)+(n/4).....=2n. <br>
               This is a geometric series summing to O(n).Therefore, despite the logarithmic outer loop, the overall complexity is dominated by the linear sum of the inner loop's iterations, resulting in O(n).`,
   
   sol39: `10 <br><br>
               Explanation: The given code has nested loops, where the outer loop runs with i from 0 to 3. For each value of i, the inner loop runs from j = i to j = 3. When i = 0, the inner loop executes 4 times (j = 0, 1, 2, 3), when i = 1, it runs 3 times (j = 1, 2, 3), for i = 2, it runs 2 times (j = 2, 3), and for i = 3, it runs once (j = 3). Thus, the total number of iterations of the inner loop is 4 + 3 + 2 + 1 = 10. Therefore, the value of count after the loop completes will be 10, and the correct answer is 10.`,
   
   sol40: `When the graph contains negative edge weights. <br><br>
   Explanation: Dijkstra's algorithm fails when the graph contains negative edge weights because it assumes that once the shortest distance to a node is found, it cannot be updated. Negative weights can later lead to shorter paths, making this assumption invalid.`,
   
   sol46:`The rear pointer points to the last occupied position in the queue. <br><br>
   
            Explanation: In  circular queue we maintain two pointers: front and rear. <br>
            - Front pointer: Points to the front element of the queue. <br>
            - Rear pointer: Points to the position where the next element will be inserted. It does not point to the last occupied position in the queue. <br>
            The key concept in a circular queue is that when the rear pointer reaches the end of the array, it wraps around to the beginning (index 0), making efficient use of the array space`,
   
   sol48: `Number of ways to climb n stairs starting from the 0th stair, if you can take 1 or 2 steps at a time. <br><br>
               Explanation:
               The mystery function does not compute the Fibonacci series because mystery(0) = 1, whereas for Fibonacci, F(0) should be 0.<br>
               Now, consider the second option, which relates to the climbStairs problem.<br>
               If n == 0, it means you want to remain on the 0th stair starting from the 0th stair. There is only one way to achieve this, which is to do nothing. <br>
               If n == 1, it means you want to reach the 1st stair starting from the 0th stair. Again, there is only one way to do this, which is by taking a single step.<br>
               Thus, in both cases (n == 0 and n == 1), the function correctly returns 1.`,
   
   sol49: `Sorting the elements in ascending order & counting the number of nodes.
   
               Explanation: <br>
               1. In-order traversal of a BST provides the elements in ascending order. Remember it.
               2. Finding the height of BST(or any tree) requires a different method, DFS.
               3. We cannot directly balance a BST using in-order traversal. However, in-order traversal gives elements in sorted order, which can be used to reconstruct the tree into a balanced one.
               4. 'Counting the nodes', can be done using any traversal method, whether it is in-order, pre-order, post-order, or level-order`,
   
   sol51: `Use two pointers, one moving 1 step and the other 2 steps at a time. <br><br>
            Explanation: <br>
            👉 Option 1: Using a HashSet requires additional O(n) space to store visited nodes, which violates the O(1) space constraint.  <br>
            👉 Option 2: The two-pointer approach (also known as Floyd’s Cycle Detection Algorithm) is optimal. It detects a cycle in O(n) time and O(1) space. The slow pointer moves one step at a time, while the fast pointer moves two steps. If there is a cycle, the two pointers will eventually meet.  <br>
            👉 Option 3: Reversing the list modifies the list structure and does not reliably detect cycles.  <br>
            👉 Option 4: Counting the number of nodes visited is inefficient and does not provide an accurate way to detect cycles without knowing the total number of nodes, which is not always available.`,
               
   sol52: `Perform a level-order traversal using a queue and track the width at each level. <br><br>
            Explanation: <br>
            👉The first three options use a DFS approach, which contradicts our goal of finding the maximum width (or breadth). While DFS can be used, it requires additional logic, such as a HashMap, to track the level of each node. This results in a time complexity of O(n) and a space complexity of O(n) + O(n) (due to the HashMap and recursion stack).<br>
            👉 In contrast, level-order traversal follows a BFS approach, which directly aligns with the requirement and allows us to find the maximum width in O(n) time and O(n) space.`,
   
   sol53: `O(2^n) <br><br>
            Explanation : <br>
            The time complexity of the recursive Fibonacci function is O(2^n) because the function makes two recursive calls for each input n (fibonacci(n-1) and fibonacci(n-2)), creating a binary tree of calls. Each level doubles the number of calls, resulting in an exponential number of computations.`,
   
   sol55: `2 <br><br>
               Explanation : The given function implements the Boyer-Moore Voting Algorithm, which finds the majority element in an array. It iterates through the array, maintaining a candidate element and a count to track its majority status. When the count reaches zero, it updates the candidate. For the input {3, 2, 3, 2, 2, 2, 1}, the function will return 2 as the majority element, since it appears more times than any other number.`,
   
   sol56: `0 (zer0) <br><br>
               Explanation: The function first computes a sum by iterating through pairs of elements and adding (arr[i] + arr[j]) % 3, resulting in sum = 3. Then, it calculates the result by iteratively multiplying (sum - arr[i]) % 5. For the input {2, 1, 3}, the final result after all calculations is 0.`,
   
   sol62: ` The time complexity for search and insertion increases. <br><br>
            As the load factor exceeds 1 in a hash table with chaining, the linked lists grow longer, causing search, insertion, and deletion operations to increase in time complexity from O(1) to O(n) in the worst case.`,
   
   sol66: `D)deque <br><br>
            A deque, or double-ended queue, is a data structure that allows efficient insertion and deletion of elements at both ends. This is because deques support operations like AddFront and AddRear for adding elements to the front and rear, respectively, and similarly for removing elements from both ends. <br>
            A stack follows the Last In First Out (LIFO) principle, allowing elements to be added and removed only from the top. A queue follows the First In First Out (FIFO) principle, allowing elements to be added to the rear and removed from the front. While linked lists can support insertion and deletion at any position, they are not specifically optimized for operations at both ends like a deque is.`,
   
   sol67: `option A O(1) <br><br>
            Accessing an element by its index in an array takes constant time, regardless of the size of the array. This is because arrays store elements in contiguous memory locations, allowing direct access using the index to calculate the memory address of the desired element`,
   
   sol68: `Stack <br><br>
            A stack follows the Last-In-First-Out (LIFO) principle, meaning that the most recently added item is the first one to be removed. This is achieved through operations like "push" to add elements to the top and "pop" to remove them from the top`,
   
   sol69: `B) First-In-First-Out (FIFO) <br><br>
            n a standard queue, elements are added to the rear (enqueue) and removed from the front (dequeue), following the FIFO principle. This means the first element that was added to the queue is the first one to be removed`,
   
   sol70: `C) The topmost node in the tree <br><br>
            The root of a tree is the topmost node, from which all other nodes branch out. It is the starting point for traversals and other operations on the tree`,
   
   sol71: `C) Simple Graph <br><br>
               A simple graph is a type of graph where there is at most one edge between any two vertices. This means that there are no multiple edges between the same pair of vertices, and there are no self-loops (edges that connect a vertex to itself). <br>
               For the other options, A weighted graph is one where each edge has a weight or label associated with it, but it can have multiple edges between vertices if it's not simple. 
               A directed graph is one where edges have direction, but it can also have multiple edges between vertices if it's not simple. A cyclic graph is one that contains at least one cycle (a path that starts and ends at the same vertex), but this does not restrict the number of edges between vertices.`,
   
   sol72: `Isolated vertex <br><br>
            An isolated vertex in a graph is a vertex that has no edges incident on it, meaning it is not connected to any other vertex in the graph. <br>
             Adjacent vertex: Two vertices are adjacent if they are connected by an edge. This term does not describe a vertex with no edges. Incident vertex: This term is not commonly used in this context. Instead, an edge is said to be incident on a vertex if it connects to that vertex.
               Pendant vertex: A pendant vertex is a vertex with exactly one edge incident on it, making it connected to only one other vertex.`,
   
   sol73: ` 7 <br><br> 
            When using the Lomuto partition scheme in QuickSort with the pivot always chosen as the last element, the worst-case scenario (e.g., a sorted array) results in n−1 recursive calls for an array of n elements. For n = 8, this means 7 recursive calls, as each call splits the array into a subarray of size k−1 and an empty partition, leading to a linear chain of nested calls`,
   
   sol74: `D) All of the above`,
   
   sol75: `C) C, D, E, F <br><br>
            To solve this problem, let's perform the operations step by step on the given queue: A, B, C, D, E. <br>
               Dequeue(): Remove the front element, which is A. The queue becomes B, C, D, E. <br>
               Enqueue(F): Add F to the rear of the queue. The queue becomes B, C, D, E, F. >br>
               Dequeue(): Remove the front element, which is B. The queue becomes C, D, E, F. <br>
               Therefore, after performing these operations, the elements left in the queue are C, D, E, F.`,
   
   
   sol76: `Non-comparison-based sorting algorithm <br> <br>
            adix sort is a sorting algorithm that does not use comparisons to sort data. Instead, it sorts integers or strings by grouping them based on individual digits or characters, starting from the least significant digit or character. It uses counting sort as a subroutine to achieve this `,
   
   sol77: `D) 2 <br><br>
            In an AVL tree, the balance factor of a node is defined as the difference in height between its left and right subtrees. For the tree to remain balanced, the balance factor must be -1, 0, or +1. If the balance factor is outside this range (e.g., -2 or +2), the tree is considered unbalanced, and rebalancing operations are necessary to restore the AVL property`,
   
   sol80: ` b) Customers are served in the order they arrive, without any changes.<br><br> This situation describes a queue operating under the First-In-First-Out (FIFO) principle, where customers are served in the exact order they arrive. This means the first customer to arrive will be the first one served, the second customer will be the second one served, and so on.`,
   
   sol81: `c) Nutty will need to search through every creature in the tree, so it’s linear in time complexity. <br><br>
               Explanation: <br>
               The tree described is a Binary Search Tree (BST), where left children are smaller and right children are larger than their parent. However, the problem does not specify that the tree is balanced. If the BST is unbalanced (e.g., skewed into a linked list due to insertion order), the worst-case search time becomes O(n), as Nutty might need to traverse most or all nodes to find creature 42.`,
   
   sol82: `a) Recursive Inorder Traversal. <br> <br>
   
               Explanation: <br>
               In a binary search tree (BST), inorder traversal processes nodes in the order of left subtree → root → right subtree. Since the BST is structured such that: <br>
               - Left children represent genres with earlier release dates, <br>
               - Right children represent genres with later release dates, <br>
               inorder traversal will naturally output the genres in chronological order (ascending by release date). This matches the requirement to display movies sorted by release date within each genre.`,
   
   sol84: `c) 3. <br><br>
               The minimal number of replacements required to sort the array [2, 5,[3][1][4][2] in non-decreasing order is determined by the longest non-decreasing subsequence (LNDS) method. <br>
               Key Steps: <br>
               1.  Identify the LNDS: <br>
               The longest non-decreasing subsequence in the array is [2,[3][4] (length 4). Other valid LNDS include [2,[5] (length 3), but the maximum length is 4. <br>
   
               2. Calculate Replacements: <br>
               The minimal replacements needed are Array length − LNDS length = 7 − 4 = 3.`,
   
   sol85: `a) Hash Map to store book IDs and their categories <br><br>
   
               Key Benefits of Using a Hash Map: <br>
               Efficient Lookups: Hash maps allow for fast lookups, insertions, and deletions with an average time complexity of O(1). This is crucial for quickly identifying books by category. <br>
               Category-Based Retrieval: By storing book IDs as keys and categories as values (or vice versa), you can efficiently retrieve all books within a specific category. <br>
               Scalability: Hash maps can handle large datasets efficiently, making them suitable for managing extensive book collections.`,
   
   sol91: ` c) c a b <br><br>
                        To determine which permutations are not possible, let's analyze the operations allowed: <br>
               Pop from Stack A: You can either print the popped element immediately or push it onto Stack B.<br>
               Pop from Stack B: You can only print the popped element.<br>
               Given Stack A has entries a, b, c with a on top, let's examine each option: <br> <br>
   
               a) b a c: <br>
               Pop a from A and push to B. <br>
               Pop b from A and print.<br>
               Pop a from B and print.<br>
               Pop c from A and print. <br>
               Possible.<br><br>
   
               b) b c a: <br>
               Pop a from A and push to B.<br>
               Pop b from A and print.<br>
               Pop c from A and print.<br>
               Pop a from B and print.<br>
               Possible.<br><br>
   
               c) c a b: <br>
               To get c first, you must pop a and b from A and push them to B, or print a and then push b to B. However, you cannot print c before a and b without printing a or b first, as c is at the bottom of A.<br>
               If you pop a and push to B, then pop b and push to B, you can print c from A, but then you must print a and b in that order from B.<br>
               Not Possible.<br><br>
   
               d) a b c:<br>
               Pop a from A and print.<br>
               Pop b from A and print.<br>
               Pop c from A and print.<br>
               Possible.`, 
   
   sol92: `b) The program will crash due to stack overflow. <br><br>
   
            Explanation: <br>
            The function fun(int n) is recursive, and each recursive call adds a new frame to the call stack. The recursion depth is determined by the value of n, which in this case is 1,000,000. Most systems have a limited stack size, typically in the range of a few megabytes, which translates to a maximum recursion depth of around 10,000 to 100,000 calls, depending on the system and compiler settings.
            <br>
            When fun(1000000) is executed, the recursion depth far exceeds this limit, causing a stack overflow. This happens because the call stack runs out of space to store the function calls, leading to a runtime error.`,
   
   sol93: `a) Full: (REAR+1) mod n == FRONT, empty: REAR == FRONT. <br><br>
   
               Explanation: <br>
               In a circular queue implemented with an array of n elements, where the capacity is n-1 elements, the conditions for detecting full and empty states are as follows: <br>
               - Full Condition: The queue is full when (REAR+1) mod n == FRONT. This condition checks if the next position after REAR wraps around to FRONT, indicating that all available slots are filled. <br>
               - Empty Condition: The queue is empty when REAR == FRONT. However, to distinguish between an empty queue and a full queue, the initial state of both REAR and FRONT being 0 is used to indicate an empty queue. If REAR == FRONT and the queue is not empty, it means there is exactly one element in the queue.`,
   
   sol94: `  d) Both B and C. <br><br>
   
            Explanation: <br>
            The code snippet performs two operations: <br>
            Dequeue: It removes an element from the front of the queue by incrementing the front index and returning the value at the previous front position. <br>
            Return the front element: Before removing it, the code retrieves the value at the current front index, which is the front element of the queue. <br>
   
            Here's a breakdown of the code: <br> <br>
                     <code>int fun() { <br>
               if (isEmpty()) { <br>
                  return -10; // Queue is empty <br>
               } else { <br>
                  int n; <br>
                  n = q[front]; // Retrieve the front element <br>
                  front++; // Increment front to remove the element <br>
                  return n; // Return the removed element <br>
               } <br>
            } </code>`,
   
   sol95: `d) Calculate all distances and use a min-heap. <br><br> However, a more efficient approach is to use a min-heap directly without explicitly calculating all distances and storing them, as you can push elements into the heap based on their squared distances. Here's why each option is viable or not: <br>
   
               Explanation of Options: <br>
               a) Calculate distances, sort, and take the first k: This approach involves calculating the squared distances for all points, sorting them, and then selecting the first k points. This method has a time complexity of O(n log n) due to sorting. <br> <br>
               b) Use a max-heap (priority queue) of size k: This approach involves maintaining a max-heap of size k. For each point, calculate its squared distance and push it into the heap if it's not full. If the heap is full and the new point is closer than the farthest point in the heap, remove the farthest point and add the new one. This method has a time complexity of O(n log k). <br><br>
               c) Use quickselect (a variation of quicksort): Quickselect is an algorithm that can find the kth smallest element in an unsorted array. It has an average time complexity of O(n), making it efficient for large datasets. However, it is more complex to implement compared to sorting or using a heap.<br><br>
               d) Calculate all distances and use a min-heap: This option is essentially similar to using a min-heap but implies calculating all distances first. In practice, you can push points into the heap based on their squared distances without needing to explicitly calculate all distances first. This approach is efficient but might be slightly less optimal than using a max-heap of size k.`,
   
   sol96: `c) 4 <br><br>
            To determine the height of the binary tree from the given postorder and inorder traversals, we can infer the structure: <br>
            Postorder: 8, 9, 6, 7, 4, 5, 2, 3, 1 <br>
            Inorder: 8, 6, 9, 4, 7, 2, 5, 1, 3 <br>
            The root is 1, with a complex left subtree and a simple right subtree. The left subtree's complexity suggests multiple levels, making the tree's height at least 4.`,
   
   sol97: `d) 5040 <br><br> 
            To find the number of different orders for the key values 10, 20, 40, 50, 70, 80, 90 on the search path for 60 in a binary search tree, we consider how these values can be arranged in a valid search path. <br>
            However, without specific constraints on the tree structure, calculating the exact number of valid orders is complex. If considering all permutations without constraints, there would be 7! = 5040 arrangements, but this doesn't accurately reflect valid search paths in a BST.`,
   
   sol99: `a) The cost of searching an AVL tree is θ (log n) but that of a binary search tree is O(n).`,
   
   sol101: `d)5 <br><br>
   
               Since 11 is odd, <br>
               f(11) = f(5) + f(6)<br>
               Then , as 5 is odd ,<br>
               f(5) = f(2) + f(3)<br>
               For 6 is even,<br>
               f(6) = f(3) <br>
               As 2 is even, <br> 
               f(2) = 1 = f(1) <br>
               3 is odd so, <br>
               f(3) = f(2) + f(1) = 1 + 1 = 2
               So, f(11) = f(5) + f(6) = 3 + 2 = 5 <br>
               The recursive function works similarly to a recursive sequence series. The base case returns 1 for inputs less than or equal to 1. For even numbers, it recursively halves the input. For odd numbers, it breaks the problem into two recursive calls based on the half and half-plus-one pattern.`,
   
   sol102: `Option B <BR><BR>
            Explanation <br>
            In Heapsort, we first build a heap, then we do following operations till the heap size becomes 1. a) Swap the root with last element b) Call heapify for root c) reduce the heap size by 1. In this question, it is given that heapify has been called few times and we see that last two elements in given array are the 2 maximum elements in array. So situation is clear, it is maxheapify which has been called 2 times.
            hence option(B) is the correct answer.`, 
   
   sol103: `b)1000 2000 4000 4000 2000 1000 <br><br>
                Explanation <br>
                  first time n=1000 Then 1000 is printed by first printf function then call print(2*1000) then again print 2000 by printf function then call print(2*2000) and it prints 4000 next time print(4000*2) is called. Here 8000 is greater than 4000 condition becomes true and it return at function(2*4000). Here n=4000 then 4000 will again print through second printf. Similarly print(2*2000) after that n=2000 then 2000 will print and come back at print(2*1000) here n=1000, so print 1000 through second print. 
                  Hence Option (B) is correct.`,
   
   sol104: `b)&A[0][0][0] + w(y * z * p + z*q + r) <br><br>
         According to above question we have to find the address of A[p][q][r] To reach pth row we must have to cross 0 to p-1 row i.e. p rows and each rows contains y*z elements Hence , = y*z*p Now to reach qth element in pth row we have to cross q rows and each row contains z(total columns) elements =z*q to reach rth elements we have to cross r elements in (p+1)th row Total elements to cross =(y*z*p+z*q+r) 
         Now each element occupies m amount of space in memory Therefore total space occupied by these elements = m(y*z*p+z*q+r) Hence , address of A[p][q][r]=base address+ Space Occupied by the Elements Before it. =&A[0][0][0]+m(y*z*p+z*q+r) sooo option (B) is correct.`,
    
   sol105: `d) All of the above. <br><br>
   
   Explanation: <br>
   Here are the advantages of adjacency list representation over adjacency matrix representation: <br>
   a) In adjacency list representation, space is saved for sparse graphs: Adjacency lists are more space-efficient, especially for sparse graphs, as they only store existing edges, whereas adjacency matrices require O(V^2) space regardless of the number of edges. <br>
   b) DFS and BFS can be done in O(V + E) time for adjacency list representation: These operations are more efficient in adjacency lists because they allow direct iteration over all edges of a vertex, resulting in a time complexity of O(V + E). In contrast, adjacency matrices require checking all possible edges, leading to a time complexity of O(V^2) for these operations.<br>
   c) Adding a vertex in adjacency list representation is easier than adjacency matrix representation: Adding a new vertex in an adjacency list is simpler and more efficient than in an adjacency matrix, which requires updating the entire matrix structure.`
   
   
   
   
 };
   



const body = document.querySelector('.container');

const introlinks = document.querySelectorAll(".introlinks");
// console.log(introlinks);

introlinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 

        // Get the target content section ID
        const targetId = link.getAttribute('data-target');
        // console.log(targetId);

        // Hide all content sections
        const contentSections = document.querySelectorAll('.content-section');
        console.log(contentSections);
        contentSections.forEach(section => section.classList.remove('active'));

        // Show the targeted content section
        const targetContent = document.getElementById(targetId);
        targetContent.classList.add('active');

        const weekContent =document.querySelectorAll('.week-content');
    // console.log(weekContent);
    weekContent.forEach(section => section.classList.remove('active'));
    
    });
});

const weeks = document.querySelectorAll(".week");
// console.log(weeks);

weeks.forEach(week => {
 week.addEventListener('click', (event) => {
    event.preventDefault();

    const weekid = week.getAttribute('data-target');
    console.log(weekid);

    const weekContent =document.querySelectorAll('.week-content');
    // console.log(weekContent);
    weekContent.forEach(section => section.classList.remove('active'));

    const showweekContent = document.getElementById(weekid);
    console.log(showweekContent);
    showweekContent.classList.add('active');

    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => section.classList.remove('active'));

 });

});




//modal-solution

const modal = document.getElementById('solution-modal');
const closeButton = document.querySelector('.close');

console.log(modal);

const showSolutionButtons = document.querySelectorAll('.answers');
console.log(showSolutionButtons);

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
  const weekContent =document.querySelectorAll('.week-content');
    // console.log(weekContent);
    weekContent.forEach(section => section.classList.remove('modal'));
}

// Loop through each button and add an event listener
showSolutionButtons.forEach(button => {
  button.addEventListener('click', function() {
    const solutionKey = this.getAttribute('data-solution');
    console.log(solutionKey);
    openModal(solutionKey);
    const weekContent =document.querySelectorAll('.week-content');
    // console.log(weekContent);
    weekContent.forEach(section => section.classList.add('modal'));
  });
});

// Function to open the modal with a solution
function openModal(solutionKey) {
   const solutionText = solutions[solutionKey];
   document.getElementById('modal-solution').innerHTML= solutionText;
   modal.style.display = 'block';

 }
 
 // Add event listener to the close button
closeButton.addEventListener('click', closeModal);

// Optional: Close the modal when clicking outside it
window.addEventListener('click', function(event) {
   if (event.target == modal) {
     closeModal();
   }
 });