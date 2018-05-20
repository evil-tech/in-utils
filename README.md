# in-utils
### because you have to know the problem to make it worse

Are you searching for blazing fast standard utilities in javascript? Well, you're on the wrong repo, just check this one: https://lodash.com.

Are you still there? That's good, I like you, you're a really tough one. This repo is for people like you that don't like to be taken down by others beliefs.
You're free.

Are you still reading? Really?!? You're probably messed up and have no social life. Well then, in this case I will explain everything to you. 

**In-utils** is a set of standard javascript utilities with a twist, an horrible one. They're made to be as slow as humanly possible, but still completely idempotent and deterministic.
You don't believe me? Just try to include them in your production code with: 
```bash
npm install --save in-utils-js
```
Your team-leader will probably love you by now, so much that he will give you non-stop vacation. That means you now have a lot of free time to help us on this project.

In-utils follows severe conventions and stardards, summarized with the MEME principle (Make Everything More Entangled). You probably understood everything by now, but I think bullet points are cool, so let's examine everything in detail:
* All the utilities **MUST** always work, as their good counterpart would, they just need to be slower, way slower.
* Random pauses are not approved, unless they are part of an alghorithm, like the [Sleep Sort](https://rosettacode.org/wiki/Sorting_algorithms/Sleep_sort).
* Everything has to be proven to always work, so you should always include tests or, in case they would be to slow to execute, a demonstration of your logic in the documentation.
* Performance matters, add some performance tests to prove your code is really slow.
* Meme ASCII pictures && links are welcome.
* Your logic must be messed up, your code must not. It's already complicated to read your pull-request when the alghoritm is complex and non-sense, don't make your code ugly too.
* From time to time write some random funny comments to prove you have the worst sense of humor.

Well then, let's make it real, here a practical demonstration of what MEME means, using the pow function:

```javascript
//let's assume the exponent is always 2
function pow(number) {
    if(Math.sqrt(Number.MAX_VALUE) <= number) {
        throw new Error(`Power of ${number} is too big...`)
    }
    let pow = 0;
    do {
        pow = Math.round(Math.random() * Number.MAX_VALUE)
    } while (Math.sqrt(pow) != Math.round(number));
    return pow
}
```
I will leave the test up to you, but don't blame if everything goes BSOD as f***.

Be polite to others, unless they write good code, in that case you're allowed to insult them as much as you wish.

#HAVE FUN.
