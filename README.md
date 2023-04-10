TEST TASK

Please open the App.js and review the current code. You need to complete the code logic.

The code should do following things:

1. There is a counter rendered in the center of the screen, it should increase every 3 seconds by one

2. There is a decrease and increase buttons on the screen, these buttons should increase and decrease counter on click (this process does not affect automatic increasing of counter)

3. In code there is a section for posts. This part has 2 implementation variants 1st is random and the second is api fetch. Doing both is great.
   (a) posts are random 5 digit numbers, the count of these numbers is equal to counter number. So on each counter decrease or increase the number of generated random numbers changes.
   (b) for each change of counter you should fetch posts from `https://jsonplaceholder.typicode.com/todos/{number_here}`, and render title of them.

4. After you render posts, you should add a scrollbar for posts section in order to make them a fixed height and so that content do not go up when new posts are added.

It is not necessary to complete all of the steps, I just need to see how you write the code, how you use state and useEffect hooks.

Good luck!
