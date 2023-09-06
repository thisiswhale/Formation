/*
'''
Given a set of characters, a minimum length, and a maximum length, generate all strings that can be created using characters from the set between those lengths inclusively.

This algorithm requires a large time and space complexity to enumerate all the possibilities. You should be able to get this to either time out or run out of memory even on rather small lengths.
 

EXAMPLE(S)
generatePasswords(["a"], 2, 4) == [
  "aa",
  "aaa",
  "aaaa",
]

generatePasswords(["a", "b", "c"], 2, 3) == [
  "aa","aaa","aab","aac",
  "ab","aba","abb","abc",
  "ac","aca","acb","acc",
  "ba","baa","bab","bac",
  "bb","bba","bbb","bbc",
  "bc","bca","bcb","bcc",
  "ca","caa","cab","cac",
  "cb","cba","cbb","cbc",
  "cc","cca","ccb","ccc"
]
 

["a", "b", "c"]
  i
                      "
           a            b          c
      aa  ab ac    ba bb bc

Base: 2,3

L , M

time complexity : n^ (MaxLength)


FUNCTION SIGNATURE
function generatePasswords(validCharacters, minLength, maxLength) {
def generatePasswords(validCharacters: list[str], minLength: int, maxLength: int) -> list[str]:
'''
*/


_ _ _ _


n* n* n* n  
a  a  a  
      b
      c
   b
   c 



TC : n*n*n*n  ==  n ^ Length(Max)
n= {a,b,c}
    
function generatePasswords(validCharacters, minLength, maxLength) {
  const result = []
  
  function helper(str){
    
    if(str.length > maxLength) {
      return
    }

    if(str.length >minLength) {   //!
      result.push(str)
    }
    // a b c d .... n 
    const ogString = str
    for(let char of validCharacters){
      str += char // 'a'      
      helper(str) // a 
      str = ogString // ''
    }

    
  }
  
  helper('')
  return result
}


/// Test cases 
console.log(JSON.stringify(generatePasswords(["a","b","c","d"], 0, 0))
    === JSON.stringify([""]))
console.log(JSON.stringify(generatePasswords(["a","b","c","d"], 0, 1))
    === JSON.stringify(["","a","b","c","d"]))
console.log(JSON.stringify(generatePasswords(["a","b","c","d"], 1, 1))
    === JSON.stringify(["a","b","c","d"]))
console.log(JSON.stringify(generatePasswords(["a","b"], 3, 3))
    === JSON.stringify(["aaa","aab","aba","abb","baa","bab","bba","bbb"]))
console.log(JSON.stringify(generatePasswords(["a"], 2, 4))
    === JSON.stringify(["aa","aaa","aaaa"]))
console.log(JSON.stringify(generatePasswords(["a"], 2, 4))
    === JSON.stringify(["aa","aaa","aaaa"]))
console.log(JSON.stringify(generatePasswords(["a","b","c"], 2, 3))
    === JSON.stringify(["aa","aaa","aab","aac","ab","aba","abb","abc",
    "ac","aca","acb","acc","ba","baa","bab","bac","bb","bba","bbb","bbc",
    "bc","bca","bcb","bcc","ca","caa","cab","cac","cb","cba","cbb","cbc",
    "cc","cca","ccb","ccc"]))
console.log(JSON.stringify(generatePasswords(["a","b","c","d"], 2, 3))
    === JSON.stringify(["aa","aaa","aab","aac","aad","ab","aba","abb",
    "abc","abd","ac","aca","acb","acc","acd","ad","ada","adb","adc",
    "add","ba","baa","bab","bac","bad","bb","bba","bbb","bbc","bbd",
    "bc","bca","bcb","bcc","bcd","bd","bda","bdb","bdc","bdd","ca",
    "caa","cab","cac","cad","cb","cba","cbb","cbc","cbd","cc","cca",
    "ccb","ccc","ccd","cd","cda","cdb","cdc","cdd","da","daa","dab",
    "dac","dad","db","dba","dbb","dbc","dbd","dc","dca","dcb","dcc",
    "dcd","dd","dda","ddb","ddc","ddd"]))


// Follow Up : Generate all passwords which can be formed from the digits : there is no repetition
 
//  _  _     _      _  _  _ 
 
// n  n-1   n-2  .. . ...(n-l)
  

// O(n*(n-1)*(n-2)....(n-l)) < I(n^l)

function generatePasswords(validCharacters, minLength, maxLength) {
    let result= [];
    
    function helper(curPass,){
      
      if(curPass.length>= minLength && curPass.length <= maxLength){
        result.push(curPass);
      }
      
      if(curPass.length > maxLength) return;

      for(let i=0; i< validCharacters.length; i++){
        //helper( curPass + validCharacters[i]);
        if(set.contains(validCharacters[i]))
          continue;
          set.add(char)
         helper( curPass , new Set(ogset,validCharacter) );
         set.remove(char)
      }
      
      
    }
    helper( "",new Set());

    return result;
}


