/*
'''
https://leetcode.com/problems/zigzag-conversion/description/

❓ PROMPT
Given a string an a positive number of rows, consider this method of formatting the string across the prescribed number of rows. If the original string is FORMATION and we want 3 rows, then the first three characters are down the first column as so:

F
O
R

The next character, M, diagonals up so then is next to the O. The A then continues up and to the right on the first row before proceeding down with the column:

F   A
O M T
R   I

The final two letters continue the pattern:

F   A   N
O M T O
R   I

Now, if we read these letters in the normal fashion (left to right, top down), we get FANOMTORI.

With 4 rows, we'd get:

F     I
O   T O
R A   N
M

And then read in normal fashion we'd get FIOTORANM.

Write a function that computes this reordering.

Example(s)
toZigzag("FORMATION", 3) -> FANOMTORI
toZigzag("FORMATION", 4) -> FIOTORANM

Input: word: str, # of rows: int
Output: formated word based on # of rows to to Zigzag

if ROW is 0, => '' since there are no rows
if ROW is 1, => ie FORMATION
if ROW is 2, ie. FRAINOMTO

F R A I N
O M T O  

FORMATION 
012345678

ROW 2
2     2
FRAIN OMTO
02368 1356

ROW 3
4.  2.   4
FAN OMTO RI
048 1357 26

ROW 4
6. 4 3 2.  
FI OTO RAN M
06 157 248 3

even odd even odd ...

When row is 3
0 1 2 3 4 5 6 7 8
F O R M A T I O N
      i
['F','','']
['F','O','R']  left to right
['FA','OM','R'] right to left
['FA','OMT','RI'] left to right
['FA','OMT','RI'] left to right
Create an arr up to ROW fill with empty str
arr[0] = word[0]
i=1
While i < len(word)

  for j = 1; j < row; j++
    arr[j] = arr[j]+word[i]
    i++
  for k = row-2; k >= 0; k--
    arr[k] = arr[k]+word[i]
    i++

return arr

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N) 
Space: O(N) space in new string or arr
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function toZigzag(s, numRows)
def to_zigzag(s, num_rows):
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function toZigzag(s, numRows){

  if(!s.length) return ''
  if(numRows == 0) return ''
  if(numRows == 1) return s

  const result = new Array(numRows).fill('')

  result[0] = s[0]
  let i = 1;
  while(i < s.length){
    for (let j = 1; j < numRows; j++){
      result[j] = result[j]+s[i]
      i++
      if(i >= s.length) break
    }
    
    if(i >= s.length) break;

    for (let k = numRows-2; k >= 0; k--){
      result[k] = result[k]+s[i]
      i++
      if(i >= s.length) break
    }
    if(i >= s.length) break;

  }
  return result.join('')
}

console.log(toZigzag('FORMATION', 3) === 'FANOMTORI')
console.log(toZigzag('FORMATION', 4) === 'FIOTORANM')
console.log(toZigzag("FORMATION", 5) === 'FNOORIMTA')
