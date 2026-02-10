const ALLOWED_SIZE = 10 * 1000;
const ALLOWED_HITS = 5;

type HitCounter = {
  timestamps: number[];
};

class RateLimiter {
  private userRequests = new Map<string, HitCounter>();

  allow(userId: string, timestamp: number): boolean {
    let currentHit = this.userRequests.get(userId);

    if (currentHit === undefined) {
      this.userRequests.set(userId, { timestamps: [timestamp] });
      return true;
    }

    const windowStart = timestamp - ALLOWED_SIZE;

    // Evict old timestamps (sliding window)
    while (
      currentHit.timestamps.length > 0 &&
      currentHit.timestamps[0] < windowStart
    ) {
      currentHit.timestamps.shift();
    }

    if (currentHit.timestamps.length >= ALLOWED_HITS) {
      return false;
    }

    currentHit.timestamps.push(timestamp);
    return true;
  }
}
