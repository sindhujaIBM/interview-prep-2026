/* Given a string containing letters, digits, and symbols,
 determine if it reads the same forwards and backwards 
 when considering only alphabetic characters (case-insensitive).*/

 function isAlphabeticPalindrome(s:string) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !/[a-zA-Z]/.test(s[left])) left++;
        while (left < right && !/[a-zA-Z]/.test(s[right])) right--;

        if (left < right && s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

isAlphabeticPalindrome("A1b2B!a");