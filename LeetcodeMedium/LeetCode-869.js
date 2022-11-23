/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
  function dfs(nums, temp, res) {
    //base case
    if (nums.length === 0) {
      res.push(temp.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const curElm = nums[i];
      nums.splice(i, 1);
      temp.push(curElm);

      if (temp[0] !== '0') {
        dfs(nums, temp, res);
      }

      // add back the removed num
      nums.splice(i, 0, curElm);
      temp.pop();
    }
  }

  const nums = n.toString().split('');
  const temp = [];
  const res = [];

  dfs(nums, temp, res);

  // check if any of the res are a power of 2
  //TODO POWER OF 2 NOT SAME AS SQRT(square root)
  //TODO make a list of all power of 2s & stored them in a hashset & check if they're there
  for (let i = 0; i < res.length; i++) {
    const permutedNumber = res[i].join('') * 1;

    console.log(permutedNumber);

    // if the number can be powered by 2
    if (!Math.sqrt(permutedNumber).toString().includes('.')) {
      return true;
    }
  }

  return false;
};

console.log(reorderedPowerOf2(218));

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// const permute = function (nums) {
//   //DFS stands for Depth-first search
//   const dfs = function (nums, temp, res) {
//     if (nums.length === 0) {
//       res.push([...temp]);
//       return;
//     }

//     for (let i = 0; i < nums.length; i++) {
//       // console.log('temp.',temp) put console.logs before any splice or push so you can see them before any change
//       // console.log('nums',nums)

//       const curr = nums[i];

//       temp.push(curr);
//       nums.splice(i, 1);

//       console.log(res);
//       dfs(nums, temp, res);

//       //everything we do in forloop we need to reverse, so that we can
//       temp.pop();
//       nums.splice(i, 0, curr);
//     }
//   };

//   let temp = [];
//   let res = [];
//   dfs(nums, temp, res);

//   return res;
// };

// console.log(permute([1, 2, 3]));
