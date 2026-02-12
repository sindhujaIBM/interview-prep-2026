/**
 * Given two strings, determine if one is a non-trivial rotation of the other.
 * A non-trivial rotation is defined as a rotation by at least one character and less than the length of the string.
 *
 * For example, "abcde" and "deabc" are non-trivial rotations of each other, but "abcde" and "abcde" are not.
 *
 * Your function should return 1 if the strings are non-trivial rotations of each other, and 0 otherwise.
 */

function rotatedString(s1,ch) {
    if (ch > s1.length || ch < 1) return s1;
    return s1.substring(ch)+s1.substring(0,ch);
}

function isNonTrivialRotation(s1, s2) {
    // Write your code here
    if( s1 === s2)
        return 0;
    else {
        let i = 1;
        while (i<s1.length) {
            if(rotatedString(s1,i)===s2) return 1;
            i++;
        }
        return 0;
    }

}

function isNonTrivialRotationBetter(s1, s2) {
    if (s1.length !== s2.length || s1 === s2) return 0;
    return (s1 + s1).includes(s2) ? 1 : 0;
}
