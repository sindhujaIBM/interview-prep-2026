/**
 * Minimum Distances
 * Given an array of integers, find the minimum distance between any pair of equal elements in the array. If no such value exists, return -1.
 *
 * Example
 *
 * a = [3, 2, 1, 2, 3]
 *
 * There are two matching pairs: 3 and 2. The indices of the 3's are 0 and 4, so their distance is |4-0|=4. The indices of the 2's are 1 and 3, so their distance is |3-1|=2. The minimum distance is 2.
 *
 * Function Description
 *
 * Complete the minimumDistances function in the editor below.
 *
 * minimumDistances has the following parameter(s):
 *
 * int a[n]: an array of integers
 *
 * Returns
 *
 * int: the minimum distance found; -1 if there are no matching pairs
 *
 * Input Format
 *
 * The first line contains an integer n, the size of array a.
 * The second line contains n space-separated integers a[i].
 *
 * Constraints
 *
 * 1 <= n <= 1000
 * 1 <= a[i] <= 1000
 *
 * Sample Input 0
 *
 * 6
 * 7 1 3 4 1 7
 *
 * Sample Output 0
 *
 * 3
 */

function minimumDistances(a: number[]): number {
    // Write your code here
    let minDistance = a.length;
    let distMap = new Map();
    for ( let i=0;i< a.length;i++){
        let current = a[i];
        if ( distMap.has(a[i]) ) {
            let new_min = i - distMap.get(a[i]);
            if ( new_min < minDistance) 
                minDistance = new_min;
            distMap.delete(a[i]);
        }
        else {
            distMap.set(a[i],i);
        }
    }
    return  distMap.size === a.length ? -1 : minDistance;
}