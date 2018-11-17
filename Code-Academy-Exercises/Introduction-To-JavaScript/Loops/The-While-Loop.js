let bobsFollowers = ['Tyler', 'Samantha', 'Laury', 'Felicia'];
let tinasFollowers = ['Tyler', 'Samantha', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

// I learned while loops