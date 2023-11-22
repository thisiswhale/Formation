/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    
    const array = s.split('');
    const resultSet = new Set();
    let removes = 0;
    let minRemoves = Number.MAX_VALUE;

    function isValidParens(s) {
        let depth = 0;

        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                depth++;
            } else if (s[i] === ')') {
                if (depth === 0) return false;
                depth--;
            }
        }

        return depth === 0;
    }

    function helper(index) {

        if (index === array.length) {
            if (isValidParens(array) && removes <= minRemoves) {
                resultSet.add(array.join(''));
                minRemoves = removes;
            }
            return;
        }

        if (removes > minRemoves) return;
    
        // Try NOT removing this character first because we
        // want to find the minimum number of edits.
        helper(index + 1);

        const char = array[index];
        if (char === '(' || char === ')') {
            array[index] = null;
            removes++;
            helper(index + 1);
            removes--;
            array[index] = char;
        }
    }

    helper(0);

    // Leetcode wants the results in an array
    const resultList = [];
    resultSet.forEach(v => resultList.push(v));
    return resultList;
};
