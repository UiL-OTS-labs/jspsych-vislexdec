////////////////
// STIMULI
///////////////

// Item types
const NON_WORD = "NON_WORD";
const REAL_WORD = "REAL_WORD";
const PRACTICE = "PRACTICE";

const LISTS = [
  'A',
  'B'
];

// In case of more complex design, the above could be, for example:

// const LISTS = [
//     "my_first_list",
//     "my_second_list"
// ];

const PRACTICE_ITEMS = [
    { id: 1, item_type: PRACTICE, word: "palve", correct: 0 },
    { id: 2, item_type: PRACTICE, word: "hot", correct: 1 }
];

const LIST_1 = [
    { id: 1, item_type: NON_WORD, word: "list_a", correct: 0 },
];

const LIST_2 = [
    { id: 1, item_type: NON_WORD, word: "list_b", correct: 0 },
];

// const TEST_ITEMS = [
//     {list_name: LISTS[0], table: LIST_1}
// ];

// If there were two lists to choose from:

const TEST_ITEMS = [
    {list_name: LISTS[0], table: LIST_1},
    {list_name: LISTS[1], table: LIST_2}
];


function getPracticeItems() {
    return {list_name : "practice", table : PRACTICE_ITEMS};
}

function findList(name) {
  for(let i=0; i<TEST_ITEMS.length; i++) {
    if (TEST_ITEMS[i].list_name == name) return TEST_ITEMS[i];
  }
}

function pickRandomList() {
    let range = function (n) {
        let empty_array = [];
        let i;
        for (i = 0; i < n; i++) {
            empty_array.push(i);
        }
        return empty_array;
    }
    let num_lists = TEST_ITEMS.length;
    var shuffled_range = jsPsych.randomization.repeat(range(num_lists), 1)
    var retlist = TEST_ITEMS[shuffled_range[0]];
    return retlist
}