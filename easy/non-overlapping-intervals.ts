/**
 * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...], find the maximum number of non-overlapping meetings that can be scheduled.
 * For example, given [[0,30],[5,10],[15,20]], the maximum number of non-overlapping meetings is 2 (the first and third meetings).
 * HINT: Sort the meetings by their end times and use a greedy approach to select the maximum number of non-overlapping meetings.
 */


function maximizeNonOverlappingMeetings(meetings: number[][]): number {
    // Write your code here
    if (meetings.length === 0) return 0;
    // for( let i=0; i < meetings.length; i++) {
    //     for ( let j=i+1; j < meetings.length; j++) {
    //         if( meetings[i][1] > meetings[j][1]){
    //             let temp = meetings[i];
    //             meetings[i] = meetings[j];
    //             meetings[j] = temp;
    //         }
    //     }
    // }
    meetings.sort((a,b)=>a[1]-b[1]);
    let init = meetings[0];
    let count = 1;
    let last_end = meetings[0][1];
    for( let i=1;i<meetings.length;i++) {
        if (meetings[i][0] >= last_end) {
            count++;
            last_end=meetings[i][1];
        }
    }
    return count;
}